import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  src: SafeUrl;

  @Input() url: string;
  @Input() title: string;
  @Input() text: string;

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.src = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

}
