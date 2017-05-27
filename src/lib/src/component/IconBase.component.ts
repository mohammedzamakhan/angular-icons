import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'icon-base',
  template: `
    <div [ngStyle]="style">Color</div>
    <svg
      fill='currentColor'
      preserveAspectRatio='xMidYMid meet'
      [attr.height]="computedSize"
      [attr.width]="computedSize"
      [ngStyle]="style"
      [attr.viewBox]="viewBox"
    >
      <ng-content></ng-content>
    </svg>
  `,
  styles: [`
    svg {
      color: red;
    }
  `],
})
export class IconBaseComponent {
  @Input() viewBox: string;
  public color: string = 'black';
  public style = {'color': this.color };
  public computedSize: number = 40;
  name = 'Angular Library';
}
