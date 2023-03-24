import {
  ApiResponse,
  ApiResponseMetadata,
} from '../interfaces/apiResponse.interface';
import { Story } from '../interfaces/story.interface';

export const mockStories: Story[] = [
  {
    id: 35283339,
    title: 'Spiders are Excelling at Web Development',
    time: 1679616639,
    url: null,
  },
  {
    id: 35283329,
    title: 'Lots of Shifts at the Keyboard Factory',
    time: 1679616556,
    url: 'https://www.news.com/article/0db9092d-9f19-43a1-be52-03e375e59eb6',
  },
  {
    id: 35283325,
    title: "Hard Drives are Stressing Your Computer's Car",
    time: 1679616542,
    url: 'https://www.newyorker.com/news/sa09dfi0s0-23kj-9823o89wf',
  },
];

export const mockMetadata: ApiResponseMetadata = {
  currentPage: 1,
  hasNext: true,
  hasPrevious: false,
  pageSize: 10,
  totalCount: mockStories.length,
  totalPages: 2,
  links: {
    self: '/stories?page=1&pageSize=10',
    previous: null,
    next: '/stories?page=2&pageSize=20',
    first: '/stories?page=1&pageSize=20',
    last: '/stories?page=2&pageSize=20',
  },
};

export const mockApiResponse: ApiResponse = {
  data: mockStories,
  metadata: mockMetadata,
};
