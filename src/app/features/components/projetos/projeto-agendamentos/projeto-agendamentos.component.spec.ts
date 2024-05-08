import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoAgendamentosComponent } from './projeto-agendamentos.component';

describe('ProjetoAgendamentosComponent', () => {
  let component: ProjetoAgendamentosComponent;
  let fixture: ComponentFixture<ProjetoAgendamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjetoAgendamentosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjetoAgendamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
