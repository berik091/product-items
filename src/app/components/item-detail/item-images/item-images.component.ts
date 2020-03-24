import { Component, OnInit, Input } from '@angular/core';
import {Items} from 'src/app/components/item.model';

@Component({
  selector: 'app-item-images',
  templateUrl: './item-images.component.html',
  styleUrls: ['./item-images.component.css']
})
export class ItemImagesComponent implements OnInit {
  @Input() items1: Items;
  constructor() { }

  ngOnInit(): void {
  }
  urlChange(newUrl: string) {
    this.items1.imagePath = newUrl;
  }
}
