import { Component, Input } from '@angular/core'
import { Work } from '@about-me-mix/communal/src/experience'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-point',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './point.component.html',
  styleUrl: './point.component.scss',
})
export class PointComponent {
  @Input() details!: Work

  /**
   * @desc 為了解決無法動態翻譯的問題
   */
  static locales = new Map([
    ['end[0]', $localize`:@@end[0]:end[0]`],
    ['end[1]', $localize`:@@end[1]:end[1]`],
    ['end[2]', $localize`:@@end[2]:end[2]`],
    ['team[0]', $localize`:@@team[0]:team[0]`],
    ['team[1]', $localize`:@@team[1]:team[1]`],
    ['experience.2015.company', $localize`:@@experience.2015.company:experience.2015.company`],
    ['experience.2015.maintain', $localize`:@@experience.2015.maintain:experience.2015.maintain`],
    ['experience.2015.cart', $localize`:@@experience.2015.cart:experience.2015.cart`],
    ['experience.2015.soap', $localize`:@@experience.2015.soap:experience.2015.soap`],
    ['experience.2016.company', $localize`:@@experience.2016.company:experience.2016.company`],
    ['experience.2016.flash', $localize`:@@experience.2016.flash:experience.2016.flash`],
    ['experience.2016.app', $localize`:@@experience.2016.app:experience.2016.app`],
    ['experience.2016.dm', $localize`:@@experience.2016.dm:experience.2016.dm`],
    ['experience.2016.test', $localize`:@@experience.2016.test:experience.2016.test`],
    ['experience.2016.textbook', $localize`:@@experience.2016.textbook:experience.2016.textbook`],
    ['experience.2019.company', $localize`:@@experience.2019.company:experience.2019.company`],
    ['experience.2019.pay', $localize`:@@experience.2019.pay:experience.2019.pay`],
    ['experience.2019.source', $localize`:@@experience.2019.source:experience.2019.source`],
    ['experience.2019.forum', $localize`:@@experience.2019.forum:experience.2019.forum`],
    ['experience.2019.react_h5', $localize`:@@experience.2019.react_h5:experience.2019.react_h5`],
    ['experience.2019.website', $localize`:@@experience.2019.website:experience.2019.website`],
    ['experience.2019.chat', $localize`:@@experience.2019.chat:experience.2019.chat`],
    ['experience.2019.vue_h5', $localize`:@@experience.2019.vue_h5:experience.2019.vue_h5`],
    ['experience.2019.ci', $localize`:@@experience.2019.ci:experience.2019.ci`],
    ['experience.2022.company', $localize`:@@experience.2022.company:experience.2022.company`],
    ['experience.2022.sport', $localize`:@@experience.2022.sport:experience.2022.sport`],
    ['experience.2022.chat', $localize`:@@experience.2022.chat:experience.2022.chat`],
    ['experience.2023.company', $localize`:@@experience.2023.company:experience.2023.company`],
    ['experience.2023.vn_pc', $localize`:@@experience.2023.vn_pc:experience.2023.vn_pc`],
    ['experience.2023.vn_app_web', $localize`:@@experience.2023.vn_app_web:experience.2023.vn_app_web`],
    ['experience.2023.vn_app', $localize`:@@experience.2023.vn_app:experience.2023.vn_app`],
    ['experience.2023.vn_live', $localize`:@@experience.2023.vn_live:experience.2023.vn_live`],
    ['experience.2023.vn_live2', $localize`:@@experience.2023.vn_live2:experience.2023.vn_live2`],
    ['experience.department.title', $localize`:@@experience.department.title:experience.department.title`],
    ['experience.department.topic', $localize`:@@experience.department.topic:experience.department.topic`],
    ['experience.leave', $localize`:@@experience.leave:experience.leave`],
    ['experience.job', $localize`:@@experience.job:experience.job`],
  ])

  // 翻譯
  t(key?: string) {
    if (!key || !PointComponent.locales.has(key)) return key
    return PointComponent.locales.get(key)
  }
}
