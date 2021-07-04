import { Component, LOCALE_ID, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zenabelTest';
  languageList = [
    { code: 'fr', label: 'Francais' },
    { code: 'ar', label: 'Arabic' }
  ];
constructor(
  @Inject(LOCALE_ID) protected localeId: string) {

   }
}
