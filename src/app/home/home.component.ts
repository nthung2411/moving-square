import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild
} from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  public transitionTime: number = 200;
  @ViewChild('theBox') theBox: ElementRef | undefined;

  ngAfterViewInit(): void {
    const transitionParams = {
      x: 0,
      y: 0
    }
    this.doMoveBoxAnimation(transitionParams);
  }

  public moveBoxToHere(event: any) {
    const transitionParams = {
      x: event.x - 8,
      y: event.y - 72
    }
    this.doMoveBoxAnimation(transitionParams);
  }

  private doMoveBoxAnimation(transitionParams: { x: number; y: number; }) {
    const animationStyle = this.generateAnimationStyle(transitionParams);
    this.getTheBoxElement().setAttribute('style', animationStyle);
  }

  private generateAnimationStyle(params: { x: number, y: number }): string {
    const transition =
      `transition: top ${this.transitionTime}ms ease-in-out, ` +
      `left ${this.transitionTime}ms ease-in-out;`;
    const left = `left:${params.x}px;`;
    const right = `top:${params.y}px;`;
    return `${transition} ${left} ${right}`;
  }

  private getTheBoxElement() {
    return this.theBox?.nativeElement;
  }
}
