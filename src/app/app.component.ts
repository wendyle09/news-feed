import { Component, OnInit } from '@angular/core';
import { Story } from './shared/interfaces/story.interface';
import { StoriesService } from './shared/services/stories.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  stories: Story[] = [];

  constructor(private storiesService: StoriesService) {}

  ngOnInit(): void {
    this.stories = this.storiesService.getNewStories();
  }

  getDateFromUnixTime(time: number) {
    var date = new Date(time * 1000);
    return date.toLocaleDateString();
  }
}
