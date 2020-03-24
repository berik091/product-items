import { Component, OnInit } from '@angular/core';
import {Items} from 'src/app/components/item.model';
import { ItemService } from '../../item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})

export class ItemListComponent implements OnInit {
  items: Items[];

  constructor(private itemServ: ItemService) { }

  ngOnInit() {
    this.itemServ.onChangeItem.subscribe(
      (items: Items[]) => {
        this.items = items;
      }
    );
    this.items = this.itemServ.onGetItems();
  }

}
