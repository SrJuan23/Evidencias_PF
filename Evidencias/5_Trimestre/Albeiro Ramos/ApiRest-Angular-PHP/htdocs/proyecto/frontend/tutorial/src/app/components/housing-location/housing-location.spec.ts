import { ComponentFixture, TestBed } from '@angular/core/testing';

import { housingLocationComponent } from './housing-location';

describe('housingLocationComponent', () => {
  let component: housingLocationComponent;
  let fixture: ComponentFixture<housingLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [housingLocationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(housingLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
