/// <reference path="require.d.ts" >
require.config({
    baseUrl: 'js/modules/'
});
require(['newRandom'], (newRandom) => {
    newRandom.run();
});
//# sourceMappingURL=main.js.map