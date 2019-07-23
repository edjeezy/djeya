import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize, tap } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CATEGORIES } from 'src/app/constants/categories';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-ajouter-produits',
  templateUrl: './ajouter-produits.component.html',
  styleUrls: ['./ajouter-produits.component.scss']
})
export class AjouterProduitsComponent implements OnInit {
  c = CATEGORIES;
  nom: string;
  description: string;
  prix: number;
  category = { val: '', id: 0 };
  tagCategory: any;
  tag = { val: '', id: 0 };
  subCategories: any;
  subCategory = {val: '', id: 0, tags: []};
  uploadPercent: any;
  downloadURL1: any;
  downloadURL2: any = '';
  constructor(private storage: AngularFireStorage,
    private snackbar: ToastController,
    private router: Router,
    private _storage: Storage,
    private db: AngularFirestore) { }

  ngOnInit() {
    this.tagCategory = [
      {
        id: 0,
        display_name: '',
        value: '',
      },
    ];
    this.subCategories = [
      [
        {
          id: 0,
          subcat_display_name: 'Corps',
          subcat_value: 'corps',
          tags: this.tagCategory,
        }
      ]
    ];
    console.log(this.c);
  }

  checkProduct() {
    if (!this.prix || !this.category || !this.downloadURL1 || !this.description) {
      this.snackbar.create({
        message: 'Formulaire Incorrect. Verifiez',
        duration: 9000,
        color: 'danger'
      });
      return false;
    }
    return true;
  }

  uploadProduct() {
    console.log('uploading');
    if (/* this.checkProduct() */ true) {


      this._storage.get('seller').then((seller) => {
        const product = {
          name: this.nom,
          description: this.description,
          prix: this.prix,
          category_id: this.category.id,
          category_value: this.category.val,
          sub_category_id: this.subCategory.id,
          sub_category_value: this.subCategory.val,
          tag_id: this.tag.id,
          tag_value: this.tag.val,
          image1: this.downloadURL1,
          image2: this.downloadURL2,
          promo: null,
          sellerId: seller.sellerId,
        };
        console.log(product);
        this.db.collection('produits').add(product).then(() => {
          this.snackbar.create(
            {
              message: 'Opération éfféctuée',
              duration: 9000,
              color: 'success'
            }
          );
          this.router.navigate(['/admin']);
        });
      });

    } else {
      console.log('Noo');
    }
  }

  uploadFile1(event) {
    const file = event.target.files[0];
    const filePath = 'images/' + Date.now();
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().pipe(
          tap(res => this.downloadURL1 = res)
        ).subscribe();
      })
    )
      .subscribe();
  }
  uploadFile2(event) {
    const file = event.target.files[0];
    const filePath = 'name-your-file-path-here';
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().pipe(
          tap(res => this.downloadURL2 = res)
        ).subscribe();
      })
    )
      .subscribe();
  }

  selectCategories() {
    console.log(this.category);
    this.subCategories = this.c.filter(d => d.id === this.category.id).map(e => e.sub_category);
    console.log(this.subCategories);
    return this.subCategories;
  }

  selectSubCategories() {

    this.tagCategory = this.subCategories.filter(d => d.id === this.subCategory.id);
    console.log(this.tagCategory);
  }

  showTag() {
    console.log(this.tag);
  }
}
