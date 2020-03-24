import { Injectable } from '@angular/core';
import { Items } from 'src/app/components/item.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  sum = 0;

  onChangeItem: Subject<Items[]> = new Subject<Items[]>();

  items: Items[] = [
    new Items('Samsung', 500, 'https://avatars.mds.yandex.net/get-pdb/940654/5d5263b9-502e-4cb5-be59-c84f20046a89/s375', 
    ['https://avatars.mds.yandex.net/get-pdb/940654/5d5263b9-502e-4cb5-be59-c84f20046a89/s375',
    'https://avatars.mds.yandex.net/get-pdb/940654/5d5263b9-502e-4cb5-be59-c84f20046a89/s375',
    'https://avatars.mds.yandex.net/get-pdb/940654/5d5263b9-502e-4cb5-be59-c84f20046a89/s375',
    'https://avatars.mds.yandex.net/get-pdb/940654/5d5263b9-502e-4cb5-be59-c84f20046a89/s375',
    'https://avatars.mds.yandex.net/get-pdb/940654/5d5263b9-502e-4cb5-be59-c84f20046a89/s375'],
     "Lenovo Note Android smartphone. Announced Feb 2017.Lenovo Note Android smartphone. Announced Feb 2017.Lenovo Note Android smartphone. Announced Feb 2017."
    ),
    
    new Items('Samsung', 500, 'https://s31.wheelsage.org/format/picture/picture-thumb-medium/a/amg/mercedes-benz/s_63_coupe/mercedes-benz_s_63_amg_coupe_28_007e050708e606bc.jpg', 
    ['https://avatars.mds.yandex.net/get-pdb/940654/5d5263b9-502e-4cb5-be59-c84f20046a89/s375',
    'https://avatars.mds.yandex.net/get-pdb/940654/5d5263b9-502e-4cb5-be59-c84f20046a89/s375',
    'https://avatars.mds.yandex.net/get-pdb/940654/5d5263b9-502e-4cb5-be59-c84f20046a89/s375',
    'https://avatars.mds.yandex.net/get-pdb/940654/5d5263b9-502e-4cb5-be59-c84f20046a89/s375',
    'https://s31.wheelsage.org/format/picture/picture-thumb-medium/a/amg/mercedes-benz/s_63_coupe/mercedes-benz_s_63_amg_coupe_28_007e050708e606bc.jpg'],
     "Lenovo Note Android smartphone. Announced Feb 2017.Lenovo Note Android smartphone. Announced Feb 2017.Lenovo Note Android smartphone. Announced Feb 2017."
    ),
  ];

  constructor() { }

  onGetItems() {
    return this.items.slice();
  }

  getItemsById(id: number) {
    return this.items[id];
  }
}
