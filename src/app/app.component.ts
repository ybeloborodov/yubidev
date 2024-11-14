import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatIcon} from '@angular/material/icon';
import {MatCard} from '@angular/material/card';
import {MatButton} from '@angular/material/button';
import {MatToolbar} from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatIcon, MatCard, MatButton, MatToolbar],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'yubidev';
}
