"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
__export(require("./button"));
exports.configure = function (aurelia) {
    aurelia.plugin('@au-mcw-ripple');
    aurelia.globalResources([
        aurelia_framework_1.PLATFORM.moduleName('./button')
    ]);
};
//# sourceMappingURL=index.js.map