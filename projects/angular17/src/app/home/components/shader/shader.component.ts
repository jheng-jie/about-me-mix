import { Component, effect, ElementRef, Input, ViewChild } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ProgressService } from '../../service/progress.service'
import { createShaderTween, TweenShader } from '@about-me-mix/communal/src/shader'
import { environment } from '@/environments/environment'
import { StoreService } from '@/stores/store.service'

@Component({
  selector: 'app-shader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shader.component.html',
  styleUrl: './shader.component.scss',
})
export class ShaderComponent {
  @Input() index: number = -1

  // Main Dom
  @ViewChild('container') container!: ElementRef
  @ViewChild('canvas') canvas!: ElementRef

  // Shader Tween
  shader?: TweenShader

  constructor(public progress: ProgressService, public store: StoreService) {
    effect(() => {
      const { height = 0, hidden = true, progress = 0 } = this.progress.progress()?.[this?.index] ?? {}
      if (height === 0) return
      // hidden
      if (this.container.nativeElement) this.container.nativeElement.style.display = hidden ? 'none' : ''
      // update tween
      if (!hidden) this.shader?.progress(progress)
    })

    // 尺寸更新重新繪製
    let prev = this.store.state().sizeUpdateTimestamp
    effect(() => {
      const next = this.store.state().sizeUpdateTimestamp
      if (next === prev) return
      prev = next
      this.shader?.resetSize()
    })
  }

  // destroyed
  ngOnDestroy() {
    this.shader?.kill()
  }

  async ngAfterViewInit() {
    if (typeof window === 'undefined') return
    if (!this.canvas?.nativeElement) return
    this.shader = await createShaderTween(this.canvas?.nativeElement, {
      bg: '#27272a',
      bg2: '#8b5cf6',
      noise: `${environment.MIX_ASSETS_URL}/noise.jpg`,
      noise2: `${environment.MIX_ASSETS_URL}/noise2.jpg`,
    })
    const { progress = 0 } = this.progress?.progress()?.[this?.index] ?? {}
    this.shader?.progress(progress)
  }
}
