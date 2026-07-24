import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerciPage } from './merci-page';

describe('MerciPage', () => {
  let component: MerciPage;
  let fixture: ComponentFixture<MerciPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MerciPage],
    }).compileComponents();

    fixture = TestBed.createComponent(MerciPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
