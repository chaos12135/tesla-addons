// ==UserScript==
// @name         WDO NEW SETUP
// @version      0.9
// @description  Adds new buttons
// @author       Justin
// @match        https://warpdrive.teslamotors.com/deliveryops/checkout/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

function VinData() {
    setTimeout(function () {
        var headerVin = document.getElementsByClassName("header-Vin")[0];
        var pathArray = window.location.pathname.split('/');

        if (headerVin != null) {
            var vinlabel = document.getElementsByClassName("vin-label")[0];
            let buttonnode = document.createElement("button");
            buttonnode.setAttribute("size", "medium");
            buttonnode.setAttribute("class", "tsl-color-blue tsl-size-medium tsl-shape-round tsl-button tsl-appearance-filled ng-star-inserted");
            buttonnode.setAttribute("style", "margin-top: 7px; background: linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,154,0,1) 10%, rgba(208,222,33,1) 20%, rgba(79,220,74,1) 30%, rgba(63,218,216,1) 40%, rgba(47,201,226,1) 50%, rgba(28,127,238,1) 60%, rgba(95,21,242,1) 70%, rgba(186,12,248,1) 80%, rgba(251,7,217,1) 90%, rgba(255,0,0,1) 100%);");
            buttonnode.setAttribute("onclick", "window.open('https://warpdrive.teslamotors.com/warpdocapi/api/Download/MonroneyDocumentAsFile?DocumentType=Monroney&Vin=" + vinlabel.innerText + "')");
            let buttontextnode = document.createTextNode("Monroney");
            buttonnode.appendChild(buttontextnode);
            headerVin.appendChild(buttonnode);

            var CurrentHTML3 = vinlabel.innerHTML;
            //vinlabel.innerHTML = (CurrentHTML3 + "</br><button size=\"medium\" class=\"tsl-color-blue tsl-size-medium tsl-shape-round tsl-button tsl-appearance-filled ng-star-inserted\" style=\"margin-right: 30px; background: #F000F0;\" onclick=\"window.open('https://warpdrive.teslamotors.com/warpdocapi/api/Download/MonroneyDocumentAsFile?DocumentType=Monroney&Vin=" + vinlabel.innerText + "')\">Monroney</button></br>");
        } else {
            VinData();
        };
    }, 1000);
};


function VinMatch() {
    setTimeout(function () {
        var headerVin = document.getElementsByClassName("header-Vin")[0];
        var propertylabel = document.getElementsByClassName("property-label")[0];
        var pathArray = window.location.pathname.split('/');

        if (propertylabel != null && headerVin == null) {
            let buttonnode = document.createElement("button");
            buttonnode.setAttribute("size", "medium");
            buttonnode.setAttribute("class", "tsl-color-blue tsl-size-medium tsl-shape-round tsl-button tsl-appearance-filled ng-star-inserted");
            buttonnode.setAttribute("style", "background: #FF0000;");
            buttonnode.setAttribute("onclick", "window.open('https://myadmin.tesla.com/#/matchUnmatch2?rnSearchStr=" + pathArray[3] + "')");
            let buttontextnode = document.createTextNode("Match / Unmatch");
            buttonnode.appendChild(buttontextnode);
            propertylabel.appendChild(buttonnode);
            //var CurrentHTML = propertylabel.innerHTML;
            //propertylabel.innerHTML = (CurrentHTML + "</br><button size=\"medium\" class=\"tsl-color-blue tsl-size-medium tsl-shape-round tsl-button tsl-appearance-filled ng-star-inserted\" style=\"margin-right: 30px; background: #FF0000;\" onclick=\"window.open('https://myadmin.tesla.com/#/matchUnmatch2?rnSearchStr=" + pathArray[3] + "')\">Match / Unmatch</button>");

        } else if (propertylabel != null && headerVin != null) {
            let buttonnode = document.createElement("button");
            buttonnode.setAttribute("size", "medium");
            buttonnode.setAttribute("class", "tsl-color-blue tsl-size-medium tsl-shape-round tsl-button tsl-appearance-filled ng-star-inserted");
            buttonnode.setAttribute("style", "background: #FF0000;");
            buttonnode.setAttribute("onclick", "window.open('https://myadmin.tesla.com/#/matchUnmatch2?rnSearchStr=" + pathArray[3] + "')");
            let buttontextnode = document.createTextNode("Match / Unmatch");
            buttonnode.appendChild(buttontextnode);
            headerVin.appendChild(buttonnode);

            //var CurrentHTML2 = headerVin.innerHTML;
            //headerVin.innerHTML = (CurrentHTML2 + "</br><button size=\"medium\" class=\"tsl-color-blue tsl-size-medium tsl-shape-round tsl-button tsl-appearance-filled ng-star-inserted\" style=\"margin-right: 30px; background: #FF0000;\" onclick=\"window.open('https://myadmin.tesla.com/#/matchUnmatch2?rnSearchStr=" + pathArray[3] + "')\">Match / Unmatch</button>");
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
                ogheadercell.innerHTML = (CurrentHTML2 + "</br><button size=\"medium\" class=\"tsl-color-blue tsl-size-medium tsl-shape-round tsl-button tsl-appearance-filled ng-star-inserted\" style=\"margin-right: 30px; background: #FF0000;\" onclick=\"window.open('http://admin.tesla.com/sf-masquerade/" + result + "', '_blank')\">Masquerade</button>");

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
    VinData();
    TestPage();
    //Masqray();
})();
