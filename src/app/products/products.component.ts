import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit, Input } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  database = firebase.database();
  data: FirebaseListObservable<any[]>;
  ref: any;
  @Input()
  db: string;
  @Input()
  heading: string;
  @Input()
  content: string;

  constructor(af: AngularFireDatabase) {
    this.ref = af;
  }

  ngOnInit() {
    console.log(this.db);
    this.data = this.ref.list(this.db);
  }

}
