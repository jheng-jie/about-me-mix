import { Component, ElementRef, HostListener, ViewChild } from '@angular/core'
import { environment } from '../../environments/environment'
import { CommonModule } from '@angular/common'
import { DarkModeComponent } from './dark-mode/dark-mode.component'
import { SwitchLanguageComponent } from './switch-language/switch-language.component'
import { StoreService } from '../../stores/store.service'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, DarkModeComponent, SwitchLanguageComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @ViewChild('progress') progress: ElementRef | null = null
  @ViewChild('header') header: ElementRef | null = null
  env: typeof environment

  constructor(public store: StoreService) {
    this.env = environment
  }

  // 手機版選單
  toggle: boolean = false
  onMobileMenu() {
    this.toggle = !this.toggle
  }

  // 跳轉其他框架
  onGoto(key: 'MIX_MENU_LINK_VUE' | 'MIX_MENU_LINK_REACT' | 'MIX_MENU_LINK_SVELTE') {
    window.location.href = this.env[key as unknown as keyof typeof environment] + `/${this.store.locale}/home`
  }

  // 捲軸進度
  prevScrollTop: number = 0

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (!this.header?.nativeElement) return
    if (!this.progress?.nativeElement) return
    const progress: HTMLDivElement = this.progress?.nativeElement
    const header: HTMLDivElement = this.header?.nativeElement
    // 整體視窗捲軸進度
    const scrollHeight = document.body.clientHeight
    const windowProgress = Math.max(0, Math.min(1, scrollY / (scrollHeight - window.innerHeight))) * 100
    progress.style.width = `${windowProgress}%`
    // toggle header
    if (window.scrollY > this.prevScrollTop) header?.classList?.add('-translate-y-100%')
    else header?.classList?.remove('-translate-y-100%')
    this.prevScrollTop = window.scrollY
  }
}
