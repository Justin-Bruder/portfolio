import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexDialogComponent } from './pokedex-dialog.component';

describe('PokedexDialogComponent', () => {
  let component: PokedexDialogComponent;
  let fixture: ComponentFixture<PokedexDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokedexDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PokedexDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
