import { SafeUrl, DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component ({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  width: any;
  fbLink: SafeUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.width = window.innerWidth - 75;
    // tslint:disable-next-line:max-line-length
    this.fbLink = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FDreamValleyHandmadeSoap%2F&tabs=timeline&width=' + this.width + '&height=450&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId');
  }

  ngOnInit() {
  }

  onResize(event) {
    this.width = window.innerWidth - 75;
    console.log(this.width);
    // tslint:disable-next-line:max-line-length
    this.fbLink = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FDreamValleyHandmadeSoap%2F&tabs=timeline&width=' + this.width + '&height=450&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId');
  }

}
