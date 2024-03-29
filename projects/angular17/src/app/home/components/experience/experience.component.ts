import { Component, effect, ElementRef, HostListener, Input, ViewChild } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ProgressService } from '../../service/progress.service'
import { createExperienceTween, config as ExperienceConfig, type TweenTimeLine, type Work } from '@about-me-mix/communal/src/experience'
import { PointComponent } from './point/point.component'
import { ElementPositionProgress, getElementProgressData } from '@about-me-mix/communal/store/section-progress'

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, PointComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  @Input() index: number = -1

  // Main Dom
  @ViewChild('container') container!: ElementRef
  // Tween
  tween?: TweenTimeLine
  // 當頁捲軸進度
  position?: ElementPositionProgress

  constructor(public progress: ProgressService) {
    effect(() => {
      this.position = this.progress.progress()?.[this?.index] ?? {}
      const { hidden = true, progress = 0, height = 0, overlappingEnter = 0, overlappingLeave = 0 } = this.position
      if (height === 0) return
      // hidden
      if (this.container?.nativeElement) this.container.nativeElement.style.display = hidden ? 'none' : ''
      // update tween
      if (!hidden) this.tween?.progress(progress * 0.7 + Math.max(0, overlappingEnter / 0.8) * 0.15 + Math.min(1, 1 - overlappingLeave) * 0.15)
    })
  }

  // destroyed
  ngOnDestroy() {
    this.tween?.kill()
  }
  ngAfterViewInit() {
    this.tween = createExperienceTween(this.container.nativeElement)
  }

  // experience
  experience: Work[] = ExperienceConfig.map(({ date, label, works = [] }, group) => [{ date, label, group, category: true, count: works.length }, ...works.map(work => ({ ...work, group }))]).flat()

  // 角度控制
  running: boolean = false
  rotate: number = 0
  prevSpeed: number = 0
  enterFrame(): void {
    // finish
    if (!this.container?.nativeElement || Math.abs(this.rotate) < 0.01) return void (this.running = false)
    // run
    this.running = true
    this.container.nativeElement.style.transform = `rotate(${(this.rotate *= 0.75).toFixed(2)}deg)`
    requestAnimationFrame(this.enterFrame.bind(this))
  }

  @HostListener('window:scroll', ['$event'])
  onScrollHandler() {
    if (!this.position || this.position?.hidden) return
    // 加速度計算
    const distance = window.scrollY - this.prevSpeed
    this.rotate = Math.max(-5, Math.min(5, this.rotate - Math.max(-0.5, Math.min(0.5, distance * 0.01))))
    // 恢復平衡
    !this.running && this.enterFrame()
    this.prevSpeed = window.scrollY
  }
}
