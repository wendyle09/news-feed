import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'News Feed';
  stories = [
    {
      id: 8863,
      time: 1175714200,
      title: 'My YC app: Dropbox - Throw away your USB drive',
      url: 'http://www.getdropbox.com/u/2/screencast.html',
    },
    {
      id: 35238878,
      time: 1679346973,
      title: 'Why northern Europe is so indebted',
      url: 'https://theloop.ecpr.eu/why-northern-europe-is-so-indebted/',
    },
  ];
}
