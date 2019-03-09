import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfoodtypeComponent } from './addfoodtype.component';

describe('AddfoodtypeComponent', () => {
  let component: AddfoodtypeComponent;
  let fixture: ComponentFixture<AddfoodtypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddfoodtypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfoodtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
