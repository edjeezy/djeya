import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  processCategory(data: any[], category_id: string) {
    // ORganise the data by ID;
    const processed: any[] =  data.reduce((r, a) => {
      /* console.log('Current Val',r);
      console.log(a); */
      r[a[category_id]] = r[a[category_id]] || [];
      r[a[category_id]].push(a);
      console.log(r);
      console.log('processed', processed);
      return r;
    }, []);
    const filtered = processed.filter(() => true);
    return filtered;
  }

  processTitle(title: string) {
    return title.replace('_', ' ');
  }

  configureId = () => map((action: any[]) => {
    return action.map(a => {
      const data = a.payload.doc.data() as any;
      data.id = a.payload.doc.id;
      return data;
    });
  })
}
