import { Component, OnInit } from '@angular/core';
import {Items} from 'src/app/components/item.model';
import { ActivatedRoute, Params } from '@angular/router';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  id: number;
  inItems: Items;
  today: number = Date.now();

  constructor(
    private activeRoute: ActivatedRoute, 
    private itemServ: ItemService) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      (params: Params) => {
        this.id = params.id;
        this.inItems = this.itemServ.getItemsById(this.id);
      }
    );
  }

}
