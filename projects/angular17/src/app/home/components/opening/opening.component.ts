import { Component, Input, effect, ViewChild, ElementRef } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ProgressService } from '../../service/progress.service'
import { ElementPositionProgress } from '@about-me-mix/communal/store/section-progress'
import { ContentComponent } from './content/content.component'

@Component({
  selector: 'app-opening',
  standalone: true,
  imports: [CommonModule, ContentComponent],
  templateUrl: './opening.component.html',
  styleUrl: './opening.component.scss',
})
export class OpeningComponent {
  @Input() index: number = -1

  constructor(public progress: ProgressService) {
    effect(() => {
      const container: HTMLDivElement = this?.container?.nativeElement
      if (!container) return
      const { hidden = true, progress = 0 } = this.progress.progress()?.[this?.index] ?? {}
      // hidden
      container.style.display = hidden ? 'none' : ''
      // update progress
      if (!hidden && this.mask) this.mask.style.height = `${(1 - progress) * 100}%`
    })
  }

  // Main Dom
  @ViewChild('container') container!: ElementRef
  // Second Child
  mask!: HTMLElement

  ngAfterViewInit() {
    this.mask = this.container.nativeElement?.querySelector('#opening-mask')
  }

  // 重複
  repeat: number[] = Array.from({ length: 2 }, (_, i) => i)
}
