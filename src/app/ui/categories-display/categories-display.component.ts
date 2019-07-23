import { Component, OnInit, Input, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories-display',
  templateUrl: './categories-display.component.html',
  styleUrls: ['./categories-display.component.scss']
})
export class CategoriesDisplayComponent implements OnInit, OnDestroy {

  subCategories = [
    {},
    {},
    {},
    {}
  ];


  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 3,
    autoplay: true
  };

  @Input() title: string;
  @Input() products: any;
  @Input() tileConf: any;
  @Input() showLinks = false;
  @Input() links: any;
  @Input() collection: string;
  isBeginningSlide = new BehaviorSubject(true);
  isEndSlide = new BehaviorSubject(false);
  handsetSub: Subscription;
  tabletSub: Subscription;
  pc: Subscription;
  constructor(breakpointObserver: BreakpointObserver, private router: Router) {
  this.handsetSub =  breakpointObserver.observe([
      Breakpoints.HandsetLandscape,
      Breakpoints.HandsetPortrait
    ]).subscribe(result => {
      if (result.matches) {
        this.slideOptsOne.slidesPerView = 2;
      }
    });

  this.tabletSub = breakpointObserver.observe([
      Breakpoints.Tablet,
    ]).subscribe(result => {
      if (result.matches) {
        this.slideOptsOne.slidesPerView = 3;
      }
    });

    this.pc =  breakpointObserver.observe([
      Breakpoints.Web,
    ]).subscribe(result => {
      if (result.matches) {
        this.slideOptsOne.slidesPerView = 5;
      }
    });
   }

  ngOnInit() {

  }

  seeMore() {
    this.router.navigate([this.links]);
  }



  // Slider Logic
  slideNext(slideView) {
    slideView.slideNext(500).then(() => {
      this.checkIfNavDisabled( slideView);
    });
  }

  SlideDidChange( slideView) {
    this.checkIfNavDisabled( slideView);
  }

  // Move to previous slide
  slidePrev( slideView) {
    slideView.slidePrev(500).then(() => {
      this.checkIfNavDisabled( slideView);
    });
  }

  checkIfNavDisabled( slideView) {
    this.checkisBeginning(slideView);
    this.checkisEnd(slideView);
  }

  checkisBeginning( slideView) {
    slideView.isBeginning().then((istrue) => {
      this.isBeginningSlide.next(istrue);
    });
  }
  checkisEnd(slideView) {
    slideView.isEnd().then((istrue) => {
      this.isEndSlide.next(istrue);
    });
  }
  getNavEv(ev) {
    console.log(ev);
  }
  processProductName(name: String) {
    return name.toLocaleLowerCase().substring(0, 15);
  }

  ngOnDestroy() {
    this.handsetSub.unsubscribe();
    this.pc.unsubscribe();
    this.tabletSub.unsubscribe();
  }
}
