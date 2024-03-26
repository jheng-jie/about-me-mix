import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpeningComponent } from './opening.component';

describe('OpeningComponent', () => {
  let component: OpeningComponent;
  let fixture: ComponentFixture<OpeningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpeningComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
