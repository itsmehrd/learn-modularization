import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotfolioItemComponent } from './potfolio-item.component';

describe('PotfolioItemComponent', () => {
  let component: PotfolioItemComponent;
  let fixture: ComponentFixture<PotfolioItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PotfolioItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PotfolioItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
