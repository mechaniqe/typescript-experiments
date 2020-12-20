define(["require", "exports", "./namespaceTrials"], function (require, exports, nsT) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.run = void 0;
    var App = nsT.App;
    function run() {
        const logger = new App.Utils.Logger(nsT.loggerType.Console);
        logger.log("RequireJS rocks!");
    }
    exports.run = run;
});
//# sourceMappingURL=newRandom.js.map