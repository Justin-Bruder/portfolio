import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocoDialogComponent } from './loco-dialog.component';

describe('LocoDialogComponent', () => {
  let component: LocoDialogComponent;
  let fixture: ComponentFixture<LocoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocoDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LocoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
