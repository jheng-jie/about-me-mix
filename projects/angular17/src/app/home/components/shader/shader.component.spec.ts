import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ShaderComponent } from './shader.component'

describe('ShaderComponent', () => {
  let component: ShaderComponent
  let fixture: ComponentFixture<ShaderComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShaderComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(ShaderComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
