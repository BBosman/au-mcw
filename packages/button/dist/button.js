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
var aurelia_framework_1 = require("aurelia-framework");
/**
 * Buttons allow users to take actions, and make choices, with a single tap.
 * Material Design guidelines: Buttons:
 * https://material.io/go/design-buttons
 */
var AuMcwButton = /** @class */ (function () {
    function AuMcwButton() {
        var _this = this;
        this.disabled = false;
        this.label = '';
        this.outlined = false;
        this.raised = false;
        this.unelevated = false;
        // Add a default click handler, in case one isn't specified.
        this.onclick = function (event) {
            return _this.button.dispatchEvent(event);
        };
    }
    Object.defineProperty(AuMcwButton.prototype, "classes", {
        get: function () {
            var classes = [];
            if (this.raised) {
                classes.push('outlined');
            }
            if (this.raised) {
                classes.push('raised');
            }
            if (this.unelevated) {
                classes.push('unelevated');
            }
            return classes.map(function (item) { return "mdc-button--" + item; }).join(' ');
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Boolean)
    ], AuMcwButton.prototype, "disabled", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], AuMcwButton.prototype, "label", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Boolean)
    ], AuMcwButton.prototype, "outlined", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Boolean)
    ], AuMcwButton.prototype, "raised", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Boolean)
    ], AuMcwButton.prototype, "unelevated", void 0);
    __decorate([
        aurelia_framework_1.computedFrom('outlined', 'raised', 'unelevated'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [])
    ], AuMcwButton.prototype, "classes", null);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Function)
    ], AuMcwButton.prototype, "onclick", void 0);
    AuMcwButton = __decorate([
        aurelia_framework_1.containerless()
    ], AuMcwButton);
    return AuMcwButton;
}());
exports.AuMcwButton = AuMcwButton;
//# sourceMappingURL=button.js.map