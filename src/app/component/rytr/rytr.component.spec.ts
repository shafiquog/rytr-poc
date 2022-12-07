import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RytrComponent } from './rytr.component';

describe('RytrComponent', () => {
  let component: RytrComponent;
  let fixture: ComponentFixture<RytrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RytrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RytrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
