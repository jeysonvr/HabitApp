import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectiveNewComponent } from './objective-new.component';

describe('ObjectiveNewComponent', () => {
  let component: ObjectiveNewComponent;
  let fixture: ComponentFixture<ObjectiveNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectiveNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjectiveNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
