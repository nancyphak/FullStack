System.register(["./pages/homPage"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var homPage_1, homePage;
    return {
        setters: [
            function (homPage_1_1) {
                homPage_1 = homPage_1_1;
            }
        ],
        execute: function () {
            homePage = new homPage_1.HomePage();
            homePage.render();
        }
    };
});
