import { Component, OnInit } from '@angular/core';
import { CATEGORIES } from 'src/app/constants/categories';

@Component({
  selector: 'app-ajouter-categories',
  templateUrl: './ajouter-categories.component.html',
  styleUrls: ['./ajouter-categories.component.scss']
})
export class AjouterCategoriesComponent implements OnInit {
  category_list = CATEGORIES;
  constructor() { }

  ngOnInit() {
  }

}
