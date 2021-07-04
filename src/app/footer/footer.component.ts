import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  lang = false;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
   var lang = this.document.documentElement.lang;
    this.lang = lang=='ar' ? true : false;
  }

}
