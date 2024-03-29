import { Component, ElementRef, HostListener, ViewChild } from '@angular/core'
import { CommonModule } from '@angular/common'
import { OpeningComponent } from './components/opening/opening.component'
import { DialogueComponent } from './components/dialogue/dialogue.component'
import { ExperienceComponent } from './components/experience/experience.component'
import { CodingComponent } from './components/coding/coding.component'
import { ShaderComponent } from './components/shader/shader.component'
import { ElementPositionProgress, getChildrenRect, getElementProgressData } from '@about-me-mix/communal/store/section-progress'
import { environment } from '@/environments/environment'
import { ProgressService } from './service/progress.service'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, OpeningComponent, DialogueComponent, ExperienceComponent, CodingComponent, ShaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  env: typeof environment
  // Main Dom
  @ViewChild('main') main!: ElementRef
  // onScroll
  onScrollClear?: () => void

  constructor(public progress: ProgressService) {
    this.env = environment
  }

  ngOnDestroy() {
    this.onScrollClear?.()
  }

  // 綁定子組件資訊
  childrenProgressData: ElementPositionProgress[] = []
  ngAfterViewInit() {
    if (typeof window === 'undefined') return
    this.childrenProgressData = getChildrenRect(this.main.nativeElement)
    this.onScrollHandler()
  }

  @HostListener('window:scroll', ['$event'])
  onScrollHandler() {
    if (typeof window === 'undefined' || !this.childrenProgressData.length) return
    this.progress.updateProgress(getElementProgressData(this.childrenProgressData))
  }
}
