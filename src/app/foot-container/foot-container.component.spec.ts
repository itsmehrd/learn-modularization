import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootContainerComponent } from './foot-container.component';

describe('FootContainerComponent', () => {
  let component: FootContainerComponent;
  let fixture: ComponentFixture<FootContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FootContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
