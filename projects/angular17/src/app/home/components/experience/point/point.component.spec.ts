import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointComponent } from './point.component';

describe('PointComponent', () => {
  let component: PointComponent;
  let fixture: ComponentFixture<PointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PointComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
