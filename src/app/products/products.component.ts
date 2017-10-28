import { DatabaseService } from '../database.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Component, Input, OnInit } from '@angular/core';
import { Lightbox } from 'angular2-lightbox';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  data = [];
  private album = [];
  @Input() db: string;
  @Input() heading: string;
  @Input() content: string;

  constructor(private ds: DatabaseService, private lightbox: Lightbox) { }

  ngOnInit() {
    switch (this.db) {
      case 'traditional':
        this.data = this.ds.getTraditional();
        break;
      case 'coconut':
        this.data = this.ds.getCoconut();
        break;
      case 'bath':
        this.data = this.ds.getBath();
        break;
      case 'balms':
        this.data = this.ds.getBalms();
        break;
      default: console.log('That is not a valid database reference.');
        break;
    }
    this.populateAlbum(this.data);
  }

  populateAlbum(data: any[]) {
    for (let i = 0; i < data.length; i++) {
      this.album.push({
        src: data[i].src,
        caption: data[i].text,
        thumb: ''
      });
    }
  }

  open(index: number) {
    this.lightbox.open(this.album, index, { wrapAround: true });
  }

}
