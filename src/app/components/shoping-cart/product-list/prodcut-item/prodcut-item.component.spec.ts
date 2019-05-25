import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdcutItemComponent } from './prodcut-item.component';

describe('ProdcutItemComponent', () => {
  let component: ProdcutItemComponent;
  let fixture: ComponentFixture<ProdcutItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdcutItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdcutItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
