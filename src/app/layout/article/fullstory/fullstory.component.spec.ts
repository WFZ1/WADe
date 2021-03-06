/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FullstoryComponent } from './fullstory.component';

describe('FullstoryComponent', () => {
  let component: FullstoryComponent;
  let fixture: ComponentFixture<FullstoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullstoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullstoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
