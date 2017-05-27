"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var IconBase_component_1 = require("./component/IconBase.component");
var _500px_1 = require("./component/fa/500px");
exports.Fa500pxComponent = _500px_1.Fa500pxComponent;
var IconsModule = (function () {
    function IconsModule() {
    }
    return IconsModule;
}());
IconsModule = __decorate([
    core_1.NgModule({
        declarations: [IconBase_component_1.IconBaseComponent],
        exports: [IconBase_component_1.IconBaseComponent],
        schemas: [core_1.NO_ERRORS_SCHEMA],
    })
], IconsModule);
exports.IconsModule = IconsModule;
//# sourceMappingURL=module.js.map