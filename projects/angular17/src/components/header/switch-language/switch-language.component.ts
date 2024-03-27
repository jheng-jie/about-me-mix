import { Component } from '@angular/core'
import { environment } from '@/environments/environment'
import { animate, state, style, transition, trigger, AnimationEvent } from '@angular/animations'
import { CommonModule } from '@angular/common'
import { LocaleIconMap, Locales } from '@/lib/constant'
import { StoreService } from '@/stores/store.service'

@Component({
  selector: 'app-switch-language',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './switch-language.component.html',
  styleUrl: './switch-language.component.scss',
  animations: [
    trigger('openClose', [
      // ...
      state(
        'open',
        style({
          opacity: 1,
        }),
      ),
      state(
        'closed',
        style({
          opacity: 0,
        }),
      ),
      transition('open => closed', [animate('0.3s')]),
      transition('closed => open', [animate('0.3s')]),
    ]),
  ],
})
export class SwitchLanguageComponent {
  // 下拉選單
  show: boolean = false

  constructor(public store: StoreService) {}

  /**
   * @desc 開關選單
   */
  onDropdownToggle(event: MouseEvent, toggle: boolean) {
    // 事件穿透
    event?.preventDefault()
    event?.stopPropagation()
    // 關閉
    this.show = toggle
  }

  // 語系圖示列表
  iconMap = LocaleIconMap

  // 當前語系圖示
  get icon() {
    return this.iconMap.get('zh')
  }
  // 語系列表
  get locales() {
    return Locales
  }

  /**
   * @desc 語系選擇後
   */
  onLocaleSelect(event: MouseEvent, locale: string) {
    this.onDropdownToggle(event, false)
    location.replace(`${environment.MIX_MENU_LINK_ANGULAR}/${locale}/home`)
  }

  // Main Dom
  display: string = 'none'

  /**
   * @desc 動畫狀態
   */
  onAnimation(event: AnimationEvent) {
    if (event.toState === 'open' && event.phaseName === 'start') {
      this.display = 'block'
    } else if (event.toState === 'closed' && event.phaseName === 'done') {
      this.display = 'none'
    }
  }
}
