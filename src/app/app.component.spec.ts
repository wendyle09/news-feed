import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterTestingModule } from '@angular/router/testing';
import { MockPipe } from 'ng-mocks';
import { AppComponent } from './app.component';
import { ApiResponse } from './interfaces/apiResponse.interface';
import {
  mockApiResponse,
  mockMetadata,
  mockStories,
} from './mocks/mockApiResponse';
import { RelativeTimePipe } from './pipes/relative-time.pipe';
import { StoriesService } from './services/stories.service';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MatPaginatorHarness } from '@angular/material/paginator/testing';
import { MatInputHarness } from '@angular/material/input/testing';
import { Observable, of, Subject, throwError } from 'rxjs';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let loader: HarnessLoader;

  const setup = (storiesServiceMock: {
    getLatestStories: () => Observable<ApiResponse>;
  }) =>
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [
          HttpClientTestingModule,
          RouterTestingModule,
          MatToolbarModule,
          MatPaginatorModule,
          FormsModule,
        ],
        declarations: [AppComponent, MockPipe(RelativeTimePipe)],
        providers: [
          {
            provide: StoriesService,
            useValue: storiesServiceMock,
          },
        ],
      }).compileComponents();

      fixture = TestBed.createComponent(AppComponent);
      loader = TestbedHarnessEnvironment.loader(fixture);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

  describe('initial data load successful', () => {
    const storiesServiceMock = {
      getLatestStories: () => of(mockApiResponse),
    };
    setup(storiesServiceMock);

    it('should display all stories on load', () => {
      const listItems =
        fixture.debugElement.nativeElement.querySelectorAll('li');

      expect(listItems.length).toEqual(mockApiResponse.data.length);
    });
  });

  describe('search feature', () => {
    const storiesSvcObsMock = new Subject<ApiResponse>();
    const storiesServiceMock = {
      getLatestStories: () => storiesSvcObsMock,
    };
    setup(storiesServiceMock);

    it('should display stories matching search on Search button click', async () => {
      storiesSvcObsMock.next(mockApiResponse);

      fixture.detectChanges();
      const listItems =
        fixture.debugElement.nativeElement.querySelectorAll('li');
      expect(listItems.length).toEqual(mockApiResponse.data.length);

      const searchText = 'looking for the moon';
      const input = await loader.getHarness(MatInputHarness);
      await input.setValue(searchText);

      storiesSvcObsMock.next({
        data: [mockStories[0]],
        metadata: mockMetadata,
      });

      const submitButton =
        fixture.debugElement.nativeElement.querySelector('#btn-submit');
      submitButton.click();

      fixture.detectChanges();
      const newListItems =
        fixture.debugElement.nativeElement.querySelectorAll('li');
      expect(newListItems.length).toEqual(1);
    });

    it('should reset search input and display all stories on Reset button click', async () => {
      storiesSvcObsMock.next({
        data: [mockStories[0]],
        metadata: mockMetadata,
      });

      const searchText = 'looking for the moon';
      const input = await loader.getHarness(MatInputHarness);
      await input.setValue(searchText);

      const submitButton =
        fixture.debugElement.nativeElement.querySelector('#btn-submit');
      submitButton.click();

      fixture.detectChanges();
      const newListItems =
        fixture.debugElement.nativeElement.querySelectorAll('li');
      expect(newListItems.length).toEqual(1);

      storiesSvcObsMock.next(mockApiResponse);

      const resetButton =
        fixture.debugElement.nativeElement.querySelector('#btn-reset');
      resetButton.click();

      fixture.detectChanges();
      const listItems =
        fixture.debugElement.nativeElement.querySelectorAll('li');
      expect(listItems.length).toEqual(mockApiResponse.data.length);
    });
  });

  describe('paginator', () => {
    const storiesSvcObsMock = new Subject<ApiResponse>();
    const storiesServiceMock = {
      getLatestStories: () => storiesSvcObsMock,
    };
    setup(storiesServiceMock);

    it('should display next page of stories', async () => {
      storiesSvcObsMock.next(mockApiResponse);

      fixture.detectChanges();
      const listItems =
        fixture.debugElement.nativeElement.querySelectorAll('li');
      expect(listItems.length).toEqual(mockApiResponse.data.length);

      storiesSvcObsMock.next({
        data: [mockStories[0]],
        metadata: { ...mockMetadata, currentPage: 2 },
      });

      const paginator = await loader.getHarness(MatPaginatorHarness);
      await paginator.goToNextPage();

      const nextListItems =
        fixture.debugElement.nativeElement.querySelectorAll('li');
      expect(nextListItems.length).toEqual(1);
    });
  });

  describe('data load error', () => {
    const storiesServiceMock = {
      getLatestStories: () => throwError(() => new Error()),
    };
    setup(storiesServiceMock);

    it('should display error message if service throws error', () => {
      expect(component.stories).toEqual([]);

      fixture.detectChanges();

      const errorMessage =
        fixture.debugElement.nativeElement.querySelector('div.error');

      expect(errorMessage).toBeTruthy();
    });
  });
});
