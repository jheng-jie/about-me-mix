import { Component, Inject, Input, effect, Signal, computed } from '@angular/core'
import { CommonBehavior } from '../../common-behavior'
import { CommonModule } from '@angular/common'
import { ProgressService } from '../../service/progress.service'
import { ElementPositionProgress } from '@about-me-mix/communal/store/section-progress'

@Component({
  selector: 'app-opening',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './opening.component.html',
  styleUrl: './opening.component.scss',
})
export class OpeningComponent extends CommonBehavior {
  @Input() index: number = -1

  // 當頁捲軸進度
  position?: ElementPositionProgress

  constructor(public progress: ProgressService) {
    super()
    effect(() => {
      this.position = this.progress.progress()?.[this?.index]
    })
  }
}
