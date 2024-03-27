import { Injectable, signal, WritableSignal } from '@angular/core'
import { ElementPositionProgress } from '@about-me-mix/communal/store/section-progress'
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class ProgressService {
  env: typeof environment

  constructor() {
    this.env = environment
  }

  // 保存頁面捲軸進度
  progress: WritableSignal<ElementPositionProgress[]> = signal([])
  updateProgress(payload: ElementPositionProgress[]) {
    this.progress.set(payload)
  }
}
