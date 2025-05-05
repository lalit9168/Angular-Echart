import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { ChartComponent } from './components/chart/chart.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [HeaderComponent, ChartComponent], // Add this line
  standalone: true  // Add this line if you're using standalone components
})
export class AppComponent {
  title = 'angular-echarts-demo';
}