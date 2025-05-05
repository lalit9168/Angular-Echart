import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { SalesData } from '../../models/data.models';
import * as echarts from 'echarts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit, AfterViewInit {
  @ViewChild('chartContainer') chartContainer!: ElementRef;
  
  salesData: SalesData[] = [];
  chartInstance: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.salesData = this.dataService.getSalesData();
  }

  ngAfterViewInit(): void {
    this.initChart();
  }

  initChart(): void {
    // Initialize ECharts instance
    this.chartInstance = echarts.init(this.chartContainer.nativeElement);
    
    // Prepare data for ECharts
    const pieData = this.salesData.map(item => ({
      value: item.sales,
      name: item.product
    }));
    
    // Set chart options
    const options = {
      title: {
        text: 'Product Sales Distribution',
        subtext: 'Annual Sales Data',
        left: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: this.salesData.map(item => item.product)
      },
      series: [
        {
          name: 'Sales',
          type: 'pie',
          radius: ['40%', '70%'], // Create a donut chart
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: true,
            formatter: '{b}: {c} ({d}%)'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '18',
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: true
          },
          data: pieData,
          color: this.salesData.map(item => item.color)
        }
      ]
    };
    
    // Apply options to chart
    this.chartInstance.setOption(options);
    
    // Make chart responsive
    window.addEventListener('resize', () => {
      if (this.chartInstance) {
        this.chartInstance.resize();
      }
    });
  }
}