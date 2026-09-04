import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GearsPage } from './gears-page';

describe('GearsPage', () => {
  let component: GearsPage;
  let fixture: ComponentFixture<GearsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GearsPage],
    }).compileComponents();

    fixture = TestBed.createComponent(GearsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
