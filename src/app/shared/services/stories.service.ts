import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../interfaces/apiResponse.interface';

@Injectable({
  providedIn: 'root',
})
export class StoriesService {
  constructor(private http: HttpClient) {}

  getLatestStories() {
    return this.http.get<ApiResponse>(this.buildUrl('stories'));
  }

  private buildUrl(path: string) {
    return `${environment.apiBaseUrl}/${path}`;
  }
}
