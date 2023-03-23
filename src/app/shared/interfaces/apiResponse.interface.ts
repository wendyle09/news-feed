import { Story } from './story.interface';

export interface ApiResponse {
  data: Story[];
  metadata: ApiResponseMetadata;
}

export interface ApiResponseMetadata {
  currentPage: number;
  hasNext: boolean;
  hasPrevious: boolean;
  pageSize: number;
  totalCount: number;
  totalPages: number;
  links: ApiResponseMetadataLinks;
}

export interface ApiResponseMetadataLinks {
  self: string;
  previous: string | null;
  next: string | null;
  first: string;
  last: string;
}
