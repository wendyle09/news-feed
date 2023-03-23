import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {
  ApiResponse,
  ApiResponseMetadata,
} from './shared/interfaces/apiResponse.interface';
import { Story } from './shared/interfaces/story.interface';
import { StoriesService } from './shared/services/stories.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  metadata: ApiResponseMetadata = {} as ApiResponseMetadata;
  stories: Story[] = [];

  constructor(private storiesService: StoriesService) {}

  ngOnInit(): void {
    this.storiesService.getLatestStories().subscribe({
      next: (res) => {
        this.stories = res.data;
        this.metadata = res.metadata;
        console.log(res);
      },
    });
  }

  getDateFromUnixTime(time: number) {
    var date = new Date(time * 1000);
    return date.toLocaleDateString();
  }
}
