// ==UserScript==
// @name         WDO NEW SETUP
// @version      0.1
// @description  Adds new buttons
// @author       Justin
// @match        https://warpdrive.teslamotors.com/deliveryops/checkout/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

function VinMatch() {
    setTimeout(function () {
        var headerVin = document.getElementsByClassName("header-Vin")[0];
        var propertylabel = document.getElementsByClassName("property-label")[0];
        var pathArray = window.location.pathname.split('/');

        if (propertylabel != null && headerVin == null) {
            var CurrentHTML = propertylabel.innerHTML;
            propertylabel.innerHTML = (CurrentHTML + "</br><button size=\"medium\" class=\"tsl-color-blue tsl-size-medium tsl-shape-round tsl-button tsl-appearance-filled ng-star-inserted\" style=\"margin-right: 30px;\" onclick=\"window.open('https://myadmin.tesla.com/#/matchUnmatch2?rnSearchStr=" + pathArray[3] + "')\">Match / Unmatch</button>");

        } else if (propertylabel != null && headerVin != null) {
            var CurrentHTML2 = headerVin.innerHTML;
            headerVin.innerHTML = (CurrentHTML2 + "</br><button size=\"medium\" class=\"tsl-color-blue tsl-size-medium tsl-shape-round tsl-button tsl-appearance-filled ng-star-inserted\" style=\"margin-right: 30px;\" onclick=\"window.open('https://myadmin.tesla.com/#/matchUnmatch2?rnSearchStr=" + pathArray[3] + "')\">Match / Unmatch</button>");

        } else {
            VinMatch();
        };
    }, 1000);
};

function Masqray() {
    setTimeout(function () {
        var ogheadercell = document.getElementsByClassName("header-cell")[1];
        if (ogheadercell != null) {

            var headercell = ogheadercell.getElementsByTagName("div")[3];
            if (headercell != null) {
                var CurrentHTML = headercell.innerHTML;
                var CurrentHTML2 = ogheadercell.innerHTML;
                let result = CurrentHTML.replace("@", "@");
                console.log(result);
                ogheadercell.innerHTML = (CurrentHTML2 + "</br><button size=\"medium\" class=\"tsl-color-blue tsl-size-medium tsl-shape-round tsl-button tsl-appearance-filled ng-star-inserted\" style=\"margin-right: 30px;\" onclick=\"window.open('http://admin.tesla.com/sf-masquerade/" + result + "', '_blank')\">Masquerade</button>");

            } else {
                Masqray();
            };
        } else {
            Masqray();
        };
    }, 1000);
};

function TestPage() {
    /*
    setTimeout(function () {
        var headercell = document.getElementsByClassName("header-cell")[1].getElementsByTagName("div")[3];
        alert(headercell.innerHTML);
    }, 5000);
    */
}


(function() {
    VinMatch();
    TestPage();
    Masqray();
})();
