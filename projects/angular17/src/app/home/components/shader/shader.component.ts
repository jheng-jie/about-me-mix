import { Component, effect, Inject, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ElementPositionProgress } from '@about-me-mix/communal/store/section-progress'
import { ProgressService } from '../../service/progress.service'

@Component({
  selector: 'app-shader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shader.component.html',
  styleUrl: './shader.component.scss',
})
export class ShaderComponent {
  @Input() index: number = -1

  // 當頁捲軸進度
  position?: ElementPositionProgress

  constructor(public progress: ProgressService) {
    effect(() => {
      this.position = this.progress.progress()?.[this?.index]
    })
  }
}
