// ==UserScript==
// @name         NEXT GEN DASHBOARD
// @version      0.2
// @description  Makes the dashboard fullsized
// @author       Justin
// @match        https://sales-prd.tesla.com/nextgen/dashboard
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

function RetryPage() {
    setTimeout(function () {
        var col2of3 = document.getElementsByClassName("tds-flex--col_2of3")[0];
        if (col2of3 != null) {
            col2of3.classList.remove("tds-flex--col_2of3");
            col2of3.classList.add("tds-flex--col_1of1");
        } else {
            RetryPage();
        }
    }, 1000);
};

/*
function ClearGarbage() {
    setTimeout(function () {
        var align_start = document.getElementsByClassName("sfdc-app ")[0];

        if (align_start != null) {
            var CurrentHTML = align_start.innerHTML;
            align_start.innerHTML = ("</br></br><button onclick=\"ClearGarbage2()\">Clear Garbage</button>" + CurrentHTML);
        } else {
            ClearGarbage();
        };
    }, 1000);
};

function ClearGarbage2() {
    document.querySelectorAll('[data-colindex="4"]').forEach(function (el){
        el.innerHTML = ("hello");
    });
}
*/


(function() {
    RetryPage();
    //ClearGarbage();

    /*
    setTimeout(function () {
        var x = document.getElementsByClassName("tds-flex--col_2of3")[0];
        x.classList.remove("tds-flex--col_2of3");
        x.classList.add("tds-flex--col_1of1");
    }, 3000);
    */

    /*
    var NewSlide = document.getElementsByClassName('tds-flex--col_2of3');
    NewSlide.removeAttribute("tds-flex--col_2of3");
    */
})();
