import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { MENU } from '../../constants/categories-menu';
import { Router } from '@angular/router';
export interface Icat {
  name: string;
  id: number;
}

@Component({
  selector: 'app-mega-menu',
  templateUrl: './mega-menu.component.html',
  styleUrls: ['./mega-menu.component.scss']
})
export class MegaMenuComponent implements OnInit {
  currentCat = new BehaviorSubject<Icat>({name: 'hygiene', id: 0});
  data = MENU;
  subcat$ = this.currentCat.pipe(
    switchMap((cat) => {
      return of(this.data[cat.id]);
    })
  );
  constructor(private router: Router) { }

  ngOnInit() {

  }

  navCat(link) {
    console.log(link);
    this.router.navigate([`/categories${link}`]);
  }


}

