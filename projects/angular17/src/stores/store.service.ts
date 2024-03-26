// src/app/services/store.service.ts
import { Inject, Injectable, LOCALE_ID } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import CommunalStore, { GetDarkStorage, SetDarkMode } from '@about-me-mix/communal/store/initialize'
import throttle from 'lodash-es/throttle'

type State = typeof CommunalStore.website

const initialState: State = CommunalStore.website

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private state = new BehaviorSubject<State>(initialState)
  state$ = this.state.asObservable()

  constructor(@Inject(LOCALE_ID) public locale: string) {
    this.initialize()
  }

  /**
   * @desc 取得當前狀態
   */
  get current(): State {
    return this.state.value
  }

  /**
   * @desc website init
   */
  initialize() {
    if (typeof window === 'undefined') return
    window.addEventListener('resize', throttle(this.resetScreenSize, 333, { leading: true, trailing: true }))
    this.resetScreenSize()
    this.switchDarkMode(GetDarkStorage())
  }

  /**
   * @desc 設定視窗大小
   */
  resetScreenSize() {
    this.state.next({
      ...this.state.value,
      width: window.innerWidth,
      height: window.innerHeight,
      sizeUpdateTimestamp: Date.now(),
    })
  }

  /**
   * @desc 設定日夜
   */
  switchDarkMode(dark: boolean) {
    this.state.next({
      ...this.state.value,
      dark,
    })
    SetDarkMode(dark)
  }
}
