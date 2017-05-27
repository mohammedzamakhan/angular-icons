import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { IconBaseComponent } from './component/IconBase.component';
import { Fa500pxComponent } from './component/fa/500px';
export { Fa500pxComponent };

@NgModule({
  declarations: [IconBaseComponent],
  exports: [IconBaseComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class IconsModule { }
