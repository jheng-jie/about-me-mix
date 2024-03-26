import { Component, effect, Inject, Input } from '@angular/core'
import { CommonBehavior } from '../../common-behavior'
import { CommonModule } from '@angular/common'
import { ElementPositionProgress } from '@about-me-mix/communal/store/section-progress'
import { ProgressService } from '../../service/progress.service'

@Component({
  selector: 'app-dialogue',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dialogue.component.html',
  styleUrl: './dialogue.component.scss',
})
export class DialogueComponent extends CommonBehavior {
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
