import { ComponentFixture, TestBed } from '@angular/core/testing';

import { inputBinding, signal } from '@angular/core';
import { provideRouter } from '@angular/router';
import { BookItemComponent } from './book-item.component';

describe('BooksComponent', () => {
  let component: BookItemComponent;
  let fixture: ComponentFixture<BookItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookItemComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(BookItemComponent, {
      bindings: [
        inputBinding(
          'book',
          signal({
            title: 'Java Web Scraping Handbook',
            subtitle: 'Learn advanced Web Scraping techniques',
            isbn: '1001606140805',
            abstract:
              'Web scraping or crawling is the art of fetching data from a third party website by downloading and parsing the HTML code to extract the data you want. It can be hard. From bad HTML code to heavy Javascript use and anti-bot techniques, it is often tricky. Lots of companies use it to obtain knowledge ...',
            author: 'Kevin Sahin',
            publisher: 'Leanpub',
            price: '$0.00',
            numPages: 115,
            cover: 'http://localhost:3000/covers/1001606140805.png',
            userId: 1,
          })
        ),
      ],
    });
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
