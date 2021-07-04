import { Component, OnInit, LOCALE_ID, Inject } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title = 'zenabelTest';
  languageList = [
    { code: 'fr', label: 'Francais' },
    { code: 'ar', label: 'العربية' }
  ];

  constructor(
    @Inject(LOCALE_ID) protected localeId: string ) 
    { }

  ngOnInit(): void {
  }

}
