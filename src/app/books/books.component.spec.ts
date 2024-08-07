import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { BooksService } from '../books.service';
import { BooksComponent } from './books.component';

describe('BooksComponent', () => {
  let component: BooksComponent;
  let fixture: ComponentFixture<BooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BooksComponent],
      providers: [
        { provide: BooksService, useValue: { getAll: () => of([]) } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(BooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
