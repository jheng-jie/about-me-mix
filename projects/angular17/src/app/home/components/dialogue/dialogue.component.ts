import { Component, effect, ElementRef, Inject, Input, ViewChild } from '@angular/core'
import { CommonModule } from '@angular/common'
import { createDialogueTween, type TweenTimeLine } from '@about-me-mix/communal/src/dialogue'
import { ProgressService } from '../../service/progress.service'
import { environment } from '@/environments/environment'

@Component({
  selector: 'app-dialogue',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dialogue.component.html',
  styleUrl: './dialogue.component.scss',
})
export class DialogueComponent {
  @Input() index: number = -1

  // Main Dom
  @ViewChild('container') container!: ElementRef
  // Tween
  tween?: TweenTimeLine

  constructor(public progress: ProgressService) {
    effect(() => {
      if (!this.tween) return
      const { hidden = true, progress = 0, overlappingEnter = 0 } = this.progress.progress()?.[this?.index] ?? {}
      // hidden
      if (this.container?.nativeElement) this.container.nativeElement.style.display = hidden ? 'none' : ''
      // update tween
      if (!hidden) this.tween?.progress(progress * 0.8 + overlappingEnter * 0.2)
    })
  }

  // destroyed
  ngOnDestroy() {
    this.tween?.kill()
  }

  ngAfterViewInit() {
    this.tween = createDialogueTween(this.container?.nativeElement)
  }

  // line bg
  lines = Array(5)
    .fill(0)
    .map((x, i) => i + 1)
  // avatar
  avatar = environment.MIX_ASSETS_URL + '/avatar.png'

  // 訊息
  chat1 = $localize`:@@section.dialogue[0]:section.dialogue[0]`.split('')
  chat2 = $localize`:@@section.dialogue[1]:section.dialogue[1]`.split('')
  chat3 = $localize`:@@section.dialogue[2]:section.dialogue[2]`.split('')
}
