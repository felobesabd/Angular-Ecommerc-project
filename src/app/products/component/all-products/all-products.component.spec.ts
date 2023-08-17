import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProductsComponent } from './AllProductsComponent.1';

describe('AllProductsComponent', () => {
  let component: AllProductsComponent;
  let fixture: ComponentFixture<AllProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllProductsComponent]
    });
    fixture = TestBed.createComponent(AllProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
