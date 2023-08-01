import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateprodutoComponent } from './updateproduto.component';

describe('UpdateprodutoComponent', () => {
  let component: UpdateprodutoComponent;
  let fixture: ComponentFixture<UpdateprodutoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateprodutoComponent]
    });
    fixture = TestBed.createComponent(UpdateprodutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
