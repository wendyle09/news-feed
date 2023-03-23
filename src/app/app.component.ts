import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { DEFAULT_REQUEST_PARAMS } from './constants';
import { ApiRequestParams } from './interfaces/apiRequest.interface';
import { ApiResponseMetadata } from './interfaces/apiResponse.interface';
import { Story } from './interfaces/story.interface';
import { StoriesService } from './services/stories.service';
import { formatSearchText } from './utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  requestParams: ApiRequestParams = DEFAULT_REQUEST_PARAMS;
  metadata: ApiResponseMetadata = {} as ApiResponseMetadata;
  stories: Story[] = [];
  searchText: string = '';

  constructor(private storiesService: StoriesService) {}

  ngOnInit(): void {
    this.getStories();
  }

  onSearchSubmit() {
    this.requestParams = {
      ...DEFAULT_REQUEST_PARAMS,
      search: formatSearchText(this.searchText),
    };
    this.getStories();
  }

  onSearchReset() {
    this.requestParams = DEFAULT_REQUEST_PARAMS;
    this.getStories();
  }

  handlePageEvent(e: PageEvent) {
    this.requestParams.pageNumber = e.pageIndex + 1;
    this.getStories();
  }

  getStories() {
    this.storiesService.getLatestStories(this.requestParams).subscribe({
      next: (res) => {
        this.stories = res.data;
        this.metadata = res.metadata;
      },
    });
  }
}
