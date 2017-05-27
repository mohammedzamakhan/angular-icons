"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var IconBaseComponent = (function () {
    function IconBaseComponent() {
        this.color = 'black';
        this.style = { 'color': this.color };
        this.computedSize = 40;
        this.name = 'Angular Library';
    }
    return IconBaseComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], IconBaseComponent.prototype, "viewBox", void 0);
IconBaseComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'icon-base',
        template: "\n    <div [ngStyle]=\"style\">Color</div>\n    <svg\n      fill='currentColor'\n      preserveAspectRatio='xMidYMid meet'\n      [attr.height]=\"computedSize\"\n      [attr.width]=\"computedSize\"\n      [ngStyle]=\"style\"\n      [attr.viewBox]=\"viewBox\"\n    >\n      <ng-content></ng-content>\n    </svg>\n  ",
        styles: ["\n    svg {\n      color: red;\n    }\n  "],
    })
], IconBaseComponent);
exports.IconBaseComponent = IconBaseComponent;
//# sourceMappingURL=IconBase.component.js.map