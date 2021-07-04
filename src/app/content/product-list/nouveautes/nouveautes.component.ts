import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-nouveautes',
  templateUrl: './nouveautes.component.html',
  styleUrls: ['./nouveautes.component.css']
})
export class NouveautesComponent implements OnInit {

  active = false;
  currentRate = 4.3;
  lang = false;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
   var lang = this.document.documentElement.lang;
    this.lang = lang=='ar' ? true : false;
  }
  
  activeHeart(){
    this.active = this.active ? false : true ;
  }

}
