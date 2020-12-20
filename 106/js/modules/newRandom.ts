import nsT = require ("./namespaceTrials");
import App = nsT.App;

export function run () {
    const logger = new App.Utils.Logger (nsT.loggerType.Console);
    logger.log ("RequireJS rocks!");
}