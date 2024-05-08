import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoDietComponent } from './projeto-diet.component';

describe('ProjetoDietComponent', () => {
  let component: ProjetoDietComponent;
  let fixture: ComponentFixture<ProjetoDietComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjetoDietComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjetoDietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
