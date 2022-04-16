import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngravingsStatsSearchComponent } from './engravings-stats-search.component';

describe('EngravingsStatsSearchComponent', () => {
  let component: EngravingsStatsSearchComponent;
  let fixture: ComponentFixture<EngravingsStatsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngravingsStatsSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EngravingsStatsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
