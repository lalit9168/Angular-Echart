import { Injectable } from '@angular/core';
import { SalesData } from '../models/data.models';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  private salesData: SalesData[] = [
    { product: 'Smartphones', sales: 1234, color: '#5470c6' },
    { product: 'Laptops', sales: 934, color: '#91cc75' },
    { product: 'Tablets', sales: 621, color: '#fac858' },
    { product: 'Smart Watches', sales: 422, color: '#ee6666' },
    { product: 'Headphones', sales: 754, color: '#73c0de' },
    { product: 'Speakers', sales: 312, color: '#3ba272' },
    { product: 'Cameras', sales: 189, color: '#fc8452' }
  ];

  constructor() { }

  getSalesData(): SalesData[] {
    return this.salesData;
  }
}