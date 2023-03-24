import { Story } from './story.interface';

export interface ApiResponse {
  data: Story[];
  metadata: ApiResponseMetadata;
}

export interface ApiResponseMetadata {
  currentPage: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
}
