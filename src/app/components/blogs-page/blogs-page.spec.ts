import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlogsPage } from './blogs-page';

describe('BlogsPage', () => {
  let component: BlogsPage;
  let fixture: ComponentFixture<BlogsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogsPage],
    }).compileComponents();

    fixture = TestBed.createComponent(BlogsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
