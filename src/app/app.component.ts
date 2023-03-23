import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiRequestParams } from './shared/interfaces/apiRequest.interface';
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
  requestParams: ApiRequestParams = {
    pageNumber: 1,
    pageSize: 10,
    search: '',
  };
  metadata: ApiResponseMetadata = {} as ApiResponseMetadata;
  stories: Story[] = [];

  constructor(private storiesService: StoriesService) {}

  ngOnInit(): void {
    this.storiesService.getLatestStories(this.requestParams).subscribe({
      next: (res) => {
        this.stories = res.data;
        this.metadata = res.metadata;
      },
    });
  }

  getTimestampFromUnixTime(time: number) {
    var date = new Date(time * 1000);
    return `${date.toLocaleTimeString()}\r\n${date.toLocaleDateString()}`;
  }
}
