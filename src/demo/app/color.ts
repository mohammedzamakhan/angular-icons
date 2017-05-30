
import { Component } from '@angular/core';
import { Icon } from 'angular-icons';

@Component({
  moduleId: module.id,
  selector: 'color',
  template: `
    <icon-base viewBox="0 0 32 32" [color]="color" [width]="width">
      <svg:g>
      	<svg:polygon class="avocado_vier" points="27.477,30.5 26.522,9.5 5.478,9.5 4.523,30.5  " style="fill: #AF9480;"/>
      	<svg:path class="avocado_drie" d="M16,3.5c1.93,0,3.5,1.57,3.5,3.5v2.5h2V7c0-3.033-2.467-5.5-5.5-5.5S10.5,3.967,10.5,7v2.5h2V7   C12.5,5.07,14.07,3.5,16,3.5z" style="fill: #716558;"/>
      	<svg:path class="avocado_een" d="M27,9h-5V7c0-3.314-2.686-6-6-6s-6,2.686-6,6v2H5L4,31h24L27,9z M11,7c0-2.757,2.243-5,5-5   s5,2.243,5,5v2h-1V7c0-2.206-1.794-4-4-4s-4,1.794-4,4v2h-1V7z M19,9h-6V7c0-1.657,1.343-3,3-3s3,1.343,3,3V9z M5.047,30l0.909-20   h20.089l0.909,20H5.047z" style="fill: #231F20;"/>
      </svg:g>
    </icon-base>
  `,
})
export class ColorComponent extends Icon {}
