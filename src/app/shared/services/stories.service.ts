import { Injectable } from '@angular/core';

const BASE_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class StoriesService {
  constructor() {}

  getNewStories() {
    return [
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
      {
        id: 9129199,
        time: 1425249192,
        title: 'BIT Poised to Become Publicly Traded Bitcoin Fund',
        url: 'http://www.wsj.com/articles/bitcoin-investment-trust-gets-finras-ok-to-become-public-bitcoin-fund-1425242094',
      },
      {
        id: 9129200,
        time: 1425249193,
        title: 'Story without URL',
      },
      {
        id: 9129201,
        time: 1425249194,
        title: 'Story with empty URL',
        url: '',
      },
    ];
  }
}
