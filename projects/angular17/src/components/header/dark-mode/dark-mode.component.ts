import { Component, effect } from '@angular/core'
import { CommonModule } from '@angular/common'
import { environment } from '@/environments/environment'
import { StoreService } from '@/stores/store.service'

@Component({
  selector: 'dark-mode',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dark-mode.component.html',
  styleUrl: './dark-mode.component.scss',
})
export class DarkModeComponent {
  env: typeof environment
  dark: boolean

  constructor(public store: StoreService) {
    this.env = environment
    this.dark = this.store.state().dark
    effect(() => {
      this.dark = this.store.state().dark
    })
  }

  /**
   * @desc 切換日夜
   */
  toggleDarkMode() {
    this.store.switchDarkMode(!this.store.current.dark)
  }
}
