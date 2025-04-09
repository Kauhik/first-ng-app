import { Component, signal } from '@angular/core';
import { GreetingComponent } from '../components/greeting/greeting.component';

@Component({
  selector: 'app-home',
  imports: [GreetingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  HomeComponent = signal('Hello from homecompenet')

  keyUpHandler() {
    console.log('user typed something in the input');
  }
}

