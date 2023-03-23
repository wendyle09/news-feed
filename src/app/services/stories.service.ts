import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ApiResponse } from '../interfaces/apiResponse.interface';
import { ApiRequestParams } from '../interfaces/apiRequest.interface';

@Injectable({
  providedIn: 'root',
})
export class StoriesService {
  constructor(private http: HttpClient) {}

  getLatestStories(requestParams?: ApiRequestParams) {
    let params = new HttpParams();

    if (requestParams) {
      // Object.keys(requestParams).forEach(
      //   (paramName: keyof ApiRequestParams) => {
      //     params.append(paramName, requestParams[paramName] as string);
      //   }
      // );
      if (requestParams.pageNumber) {
        params = params.append('pageNumber', requestParams.pageNumber);
      }
      if (requestParams.pageSize) {
        params = params.append('pageSize', requestParams.pageSize);
      }
      if (requestParams.search) {
        params = params.append('search', requestParams.search);
      }
    }

    return this.http.get<ApiResponse>(this.buildUrl('stories'), {
      params,
    });
  }

  private buildUrl(path: string) {
    return `${environment.apiBaseUrl}/${path}`;
  }
}
