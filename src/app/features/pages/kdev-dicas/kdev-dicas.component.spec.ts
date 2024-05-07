import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KdevDicasComponent } from './kdev-dicas.component';

describe('KdevDicasComponent', () => {
  let component: KdevDicasComponent;
  let fixture: ComponentFixture<KdevDicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KdevDicasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KdevDicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
