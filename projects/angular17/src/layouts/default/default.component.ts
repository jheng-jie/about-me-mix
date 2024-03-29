import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { HeaderComponent } from '../../components/header/header.component'

@Component({
  selector: 'app-default',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './default.component.html',
  styleUrl: './default.component.scss',
})
export class DefaultLayout {}
