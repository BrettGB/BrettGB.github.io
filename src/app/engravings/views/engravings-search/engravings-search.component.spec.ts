import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngravingsSearchComponent } from './engravings-search.component';

describe('EngravingsSearchComponent', () => {
  let component: EngravingsSearchComponent;
  let fixture: ComponentFixture<EngravingsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngravingsSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EngravingsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
