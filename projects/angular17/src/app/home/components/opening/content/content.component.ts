import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { environment } from '../../../../../environments/environment'

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
})
export class ContentComponent {
  @Input() index: number = -1

  get style() {
    return this.index === 1 ? { backgroundImage: `url(${environment.MIX_ASSETS_URL}/polygon-white.jpg)` } : {}
  }
}
