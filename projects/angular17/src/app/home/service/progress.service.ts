import { Injectable, signal, WritableSignal } from '@angular/core'
import { ElementPositionProgress } from '@about-me-mix/communal/store/section-progress'

@Injectable({
  providedIn: 'root',
})
export class ProgressService {
  constructor() {}

  // 保存頁面捲軸進度
  progress: WritableSignal<ElementPositionProgress[]> = signal([])
  updateProgress(payload: ElementPositionProgress[]) {
    this.progress.set(payload)
  }
}
