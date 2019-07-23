import { Injectable } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {

  constructor(private breakpoint$: BreakpointObserver) { }

  isMobile() {
    return this.breakpoint$.isMatched('(max-width: 599px)');

  }

  isTablet() {
    return this.breakpoint$.isMatched('max-width: 800px');

  }

  isLaptop() {
    return this.breakpoint$.isMatched('(max-width: 1024px)');

  }

  isDesktop() {
    return this.breakpoint$.isMatched('(min-width: 1025px)');
  }

  isLargeDevice() {
    if (this.isLaptop() || this.isDesktop()) {
      return true;
    }
    return false;
  }

  configureTiles() {
    let config = {
      rowHeight: '2:3',
      cols: 2
    };
    if (this.isMobile()) {
      return config;
    } else if (this.isTablet()) {
      console.log('tablet');
      config = {
        rowHeight: '2:3',
        cols: 3
      };
    } else if (this.isLaptop()) {
      console.log('laptop');
      config = {
        rowHeight: '3:3',
        cols: 4
      };
    } else {
      console.log('desktop-ish');
      config = {
        rowHeight: '2:3',
        cols: 6
      };
    }
    return config;
  }
}
