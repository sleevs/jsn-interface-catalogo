import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewprodutoComponent } from './viewproduto.component';

describe('ViewprodutoComponent', () => {
  let component: ViewprodutoComponent;
  let fixture: ComponentFixture<ViewprodutoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewprodutoComponent]
    });
    fixture = TestBed.createComponent(ViewprodutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
