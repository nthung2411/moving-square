import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        RouterModule,
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#ngAfterViewInit', () => {
    it('should #doMoveBoxAnimation with expected params', () => {
      const doMoveBoxAnimation = spyOn(component as any, 'doMoveBoxAnimation');
      doMoveBoxAnimation.calls.reset();

      component.ngAfterViewInit();
      expect(doMoveBoxAnimation).toHaveBeenCalledTimes(1);
      expect(doMoveBoxAnimation).toHaveBeenCalledWith({
        x: 0,
        y: 0
      });
    });
  });

  describe('#moveBoxToHere', () => {
    it('should #doMoveBoxAnimation with expected params, case 1', () => {
      const doMoveBoxAnimation = spyOn(component as any, 'doMoveBoxAnimation');
      doMoveBoxAnimation.calls.reset();

      const event = {
        x: 8,
        y: 72
      };
      component.moveBoxToHere(event);
      expect(doMoveBoxAnimation).toHaveBeenCalledTimes(1);
      expect(doMoveBoxAnimation).toHaveBeenCalledWith({
        x: 0,
        y: 0
      });
    });
    it('should #doMoveBoxAnimation with expected params, case 2', () => {
      const doMoveBoxAnimation = spyOn(component as any, 'doMoveBoxAnimation');
      doMoveBoxAnimation.calls.reset();

      const event = {
        x: 600,
        y: 600
      };
      component.moveBoxToHere(event);
      expect(doMoveBoxAnimation).toHaveBeenCalledTimes(1);
      expect(doMoveBoxAnimation).toHaveBeenCalledWith({
        x: 592,
        y: 528
      });
    });
  });

  describe('#doMoveBoxAnimation', () => {
    it('should behave...', () => {
      const generateAnimationStyle = spyOn(component as any, 'generateAnimationStyle').and.returnValue('some style');
      const theBoxElementMock = {
        setAttribute: jasmine.createSpy('setAttribute')
      };
      const getTheBoxElement = spyOn(component as any, 'getTheBoxElement').and.returnValue(theBoxElementMock);

      const transitionParams = {
        x: 0,
        y: 0
      };
      (component as any).doMoveBoxAnimation(transitionParams);

      expect(generateAnimationStyle).toHaveBeenCalledTimes(1);
      expect(generateAnimationStyle).toHaveBeenCalledWith(transitionParams);
      expect(getTheBoxElement).toHaveBeenCalledTimes(1);
      expect(theBoxElementMock.setAttribute).toHaveBeenCalledTimes(1);
      expect(theBoxElementMock.setAttribute).toHaveBeenCalledWith(
        'style',
        'some style'
      );
    });
  });

  describe('#generateAnimationStyle', () => {
    it('should behave...', () => {
      const transitionParams = {
        x: 0,
        y: 0
      };
      const result = (component as any).generateAnimationStyle(transitionParams);

      expect(result).toEqual('transition: top 200ms ease-in-out, left 200ms ease-in-out; left: 0px; top: 0px;');
    });
  });
});
