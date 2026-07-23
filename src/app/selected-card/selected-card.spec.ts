import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedCard } from './selected-card';

describe('SelectedCard', () => {
  let component: SelectedCard;
  let fixture: ComponentFixture<SelectedCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectedCard],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectedCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
