import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddusuarioComponent } from './addusuario.component';

describe('AddusuarioComponent', () => {
  let component: AddusuarioComponent;
  let fixture: ComponentFixture<AddusuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddusuarioComponent]
    });
    fixture = TestBed.createComponent(AddusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
