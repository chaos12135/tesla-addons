// ==UserScript==
// @name         NEXT GEN DASHBOARD
// @version      0.2
// @description  Makes the dashboard fullsized
// @author       Justin
// @match        https://sales-prd.tesla.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

function RetryPage(index) {
    index = (index + 1);
    if (index < 10) {
        setTimeout(function () {
            var col2of3 = document.getElementsByClassName("tds-flex--col_2of3")[0];
            if (col2of3 != null) {
                col2of3.classList.remove("tds-flex--col_2of3");
                col2of3.classList.add("tds-flex--col_1of1");
            } else {
                RetryPage(index);
            }
        }, 1000);
    };
};


(function() {
    RetryPage(0);
})();
