import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kid2Component } from './kid2.component';

describe('Kid2Component', () => {
  let component: Kid2Component;
  let fixture: ComponentFixture<Kid2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Kid2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Kid2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
