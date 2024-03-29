import { Component, effect, ElementRef, Input, ViewChild } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ProgressService } from '../../service/progress.service'
import { environment } from '@/environments/environment'
import type { TweenTimeLine } from '@about-me-mix/communal/src/type'
import { createCodingTween } from '@about-me-mix/communal/src/coding'
import { CodeComponent } from './code/code.component'

@Component({
  selector: 'app-coding',
  standalone: true,
  imports: [CommonModule, CodeComponent],
  templateUrl: './coding.component.html',
  styleUrl: './coding.component.scss',
})
export class CodingComponent {
  @Input() index: number = -1

  // Main Dom
  @ViewChild('container') container!: ElementRef

  // code lines
  lines: number[] = []

  // Tween
  tween?: TweenTimeLine

  constructor(public progress: ProgressService) {
    this.lines = Array.from({ length: 20 }, (_, i) => i)
    effect(() => {
      const { height = 0, hidden = true, progress = 0, overlappingEnter = 0 } = this.progress.progress()?.[this.index] ?? {}
      if (height === 0) return
      // hidden
      if (this.container.nativeElement) this.container.nativeElement.style.display = hidden ? 'none' : ''
      // update tween
      if (!hidden) this.tween?.progress(Math.min(progress, overlappingEnter))
    })
  }

  ngAfterViewInit() {
    if (!this.container.nativeElement || typeof window === 'undefined') return
    this.tween = createCodingTween(this.container.nativeElement)
  }

  // destroyed
  ngOnDestroy() {
    this.tween?.kill()
  }

  // 頭像
  avatar = environment.MIX_ASSETS_URL + '/avatar.png'
}
