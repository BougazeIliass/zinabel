import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';   

@Component({
  selector: 'app-inspirations',
  templateUrl: './inspirations.component.html',
  styleUrls: ['./inspirations.component.css']
})
export class InspirationsComponent implements OnInit {
  lang = false;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
   var lang = this.document.documentElement.lang;
    this.lang = lang=='ar' ? true : false;
  }

}
