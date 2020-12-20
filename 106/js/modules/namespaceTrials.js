define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.App = exports.loggerType = void 0;
    exports.loggerType = {
        Alert: "alert",
        Console: "console",
        Toaster: "toaster"
    };
    var App;
    (function (App) {
        var Utils;
        (function (Utils) {
            class Logger {
                constructor(loggerType) {
                    this.loggerType = loggerType;
                }
                log(message) {
                    switch (this.loggerType) {
                        case exports.loggerType.Alert:
                            alert(message);
                            break;
                        case exports.loggerType.Console:
                            console.log(message);
                            break;
                        case exports.loggerType.Toaster:
                            toastr.info(message);
                            break;
                    }
                }
            }
            Utils.Logger = Logger;
        })(Utils = App.Utils || (App.Utils = {}));
    })(App = exports.App || (exports.App = {}));
});
//# sourceMappingURL=namespaceTrials.js.map