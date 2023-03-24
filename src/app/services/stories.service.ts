import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ApiResponse } from '../interfaces/apiResponse.interface';
import { ApiRequestParams } from '../interfaces/apiRequest.interface';
import { API_PATH, DEFAULT_REQUEST_PARAMS } from '../constants';

@Injectable({
  providedIn: 'root',
})
export class StoriesService {
  constructor(private http: HttpClient) {}

  getLatestStories(requestParams?: Partial<ApiRequestParams>) {
    let params = new HttpParams();

    const paramsWithDefaults = { ...DEFAULT_REQUEST_PARAMS, ...requestParams };

    params = params.append('pageNumber', paramsWithDefaults.pageNumber);
    params = params.append('pageSize', paramsWithDefaults.pageSize);
    if (paramsWithDefaults.search) {
      params = params.append('search', paramsWithDefaults.search);
    }

    return this.http.get<ApiResponse>(this.buildUrl(API_PATH), {
      params,
    });
  }

  private buildUrl(path: string) {
    return `${environment.apiBaseUrl}/${path}`;
  }
}
