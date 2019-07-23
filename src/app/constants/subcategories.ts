import { corps } from './hygienne/corps';
import { cheuveux } from './hygienne/cheuveux';
import { higyenne_dentaire } from './hygienne/higyenne_dentaire';
import { higyenne_intime } from './hygienne/higyenne_intime';
import { visage } from './hygienne/visage';
import { higyenne_bebe } from './bebe/higyenne_bebe';
import { maison } from './entretient_maison/maison';
import { linge } from './entretient_maison/linge';
import { cuisine } from './entretient_maison/cuisine';


export const higyenne_beaute = [
  {
    id: 101,
    subcat_display_name: 'Corps',
    subcat_value: 'corps',
    tags: corps,
  },
  {
    id: 102,
    subcat_display_name: 'Cheuveux',
    subcat_value: 'cheuveux',
    tags : cheuveux,
  },
  {
    id: 103,
    subcat_display_name: 'Higyénne Dentaire',
    subcat_value: 'higyenne_dentaire',
    tags : higyenne_dentaire,
  },
  {
    id: 104,
    subcat_display_name: 'Visage',
    subcat_value: 'visage',
    tags :  visage,
  },
  {
    id: 105,
    subcat_display_name: 'Higyénne Intime',
    subcat_value: 'higyenne_intime',
    tags :  higyenne_intime,
  }
];

export const univers_bebe = [
  {
    id: 106,
    subcat_display_name: 'Higiyéne Bébé',
    subcat_value: 'higiene_bebe',
    tags : higyenne_bebe
  }
];

export const entretient_maison = [
  {
    id: 107,
    subcat_display_name: 'Maison',
    subcat_value: 'maison',
    tags: maison
  },
  {
    id: 108,
    subcat_display_name: 'Soins du linge',
    subcat_value: 'soins_linge',
    tags: linge
  },
  {
    id: 109,
    subcat_display_name: 'Cuisine et droguerie',
    subcat_value: 'cuisine_droguerie',
    tags: cuisine
  },

];
