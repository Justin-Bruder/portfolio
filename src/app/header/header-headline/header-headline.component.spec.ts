import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderHeadlineComponent } from './header-headline.component';

describe('HeaderHeadlineComponent', () => {
  let component: HeaderHeadlineComponent;
  let fixture: ComponentFixture<HeaderHeadlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderHeadlineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderHeadlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
