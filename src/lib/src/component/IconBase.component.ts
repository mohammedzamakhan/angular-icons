import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'icon-base',
  template: `
    <svg
      fill='currentColor'
      preserveAspectRatio='xMidYMid meet'
      [attr.height]="computedSize"
      [attr.width]="computedSize"
      [style.color]="color"
      [attr.viewBox]="viewBox"
    >
      <ng-content></ng-content>
    </svg>
  `,
})
export class IconBaseComponent {
  @Input() viewBox: string;
  @Input() public color = 'black';
  @Input() public width: string | number;
  public get computedSize() {
    return this.width || 40;
  }
}
