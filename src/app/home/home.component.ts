import {
  Component,
  ElementRef,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public transitionTime: number = 200;
  @ViewChild('theBox') theBox: ElementRef | undefined;

  public moveBoxToHere(event: any) {
    const animationStyle = this.generateAnimationStyle(event);
    this.getTheBoxElement().setAttribute('style', animationStyle);
  }

  private generateAnimationStyle(event: any): string {
    const transition =
      `transition: top ${this.transitionTime}ms ease-in-out, ` +
      `left ${this.transitionTime}ms ease-in-out;`;
    const left = `left:${event.x}px;`;
    const right = `top:${event.y - 72}px;`;
    return `${transition} ${left} ${right}`;
  }

  private getTheBoxElement() {
    return this.theBox?.nativeElement;
  }
}
