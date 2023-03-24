import { HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment.development';
import { API_PATH, DEFAULT_REQUEST_PARAMS } from '../constants';
import { ApiRequestParams } from '../interfaces/apiRequest.interface';
import { mockApiResponse, mockStories } from '../mocks/mockApiResponse';

import { StoriesService } from './stories.service';

describe('StoriesService', () => {
  let service: StoriesService;
  let httpController: HttpTestingController;

  const DEFAULT_URL = `${environment.apiBaseUrl}/${API_PATH}?pageNumber=${DEFAULT_REQUEST_PARAMS.pageNumber}&pageSize=${DEFAULT_REQUEST_PARAMS.pageSize}`;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    service = TestBed.inject(StoriesService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should get all stories', () => {
    service.getLatestStories().subscribe((res) => {
      expect(res.data).toEqual(mockStories);
    });

    const req = httpController.expectOne({
      method: 'GET',
      url: DEFAULT_URL,
    });

    req.flush(mockApiResponse);
  });

  it('should send request with search param', async () => {
    const params: Partial<ApiRequestParams> = {
      search: 'text',
    };

    service.getLatestStories(params).subscribe((res) => {
      expect(res.data).toEqual(mockStories);
    });

    const req = httpController.expectOne({
      method: 'GET',
      url: `${DEFAULT_URL}&search=${params.search}`,
    });

    req.flush(mockApiResponse);
  });
});
