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
var ripple_1 = require("@material/ripple");
var aurelia_framework_1 = require("aurelia-framework");
require("./ripple.css");
/**
 * Ink Ripple effect for web element interactions.
 * Material Design guidelines: Ripple:
 * https://material.io/design/interaction/states.html
 * https://material.io/design/motion/understanding-motion.html
 */
var AuMcwRipple = /** @class */ (function () {
    function AuMcwRipple(element) {
        this.element = element;
    }
    AuMcwRipple.prototype.attached = function () {
        ripple_1.MDCRipple.attachTo(this.element);
    };
    AuMcwRipple = __decorate([
        aurelia_framework_1.autoinject(),
        aurelia_framework_1.customAttribute('au-mcw-ripple'),
        __metadata("design:paramtypes", [Element])
    ], AuMcwRipple);
    return AuMcwRipple;
}());
exports.AuMcwRipple = AuMcwRipple;
//# sourceMappingURL=ripple.js.map