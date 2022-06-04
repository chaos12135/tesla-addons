// ==UserScript==
// @name         Checkout Tab
// @version      100.01
// @description  Brings back checkout tab
// @author       Justin
// @match        https://warpdrive.teslamotors.com/deliveryops*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==


function AddNewTab() {
    setTimeout(function () {
        var menulink = document.getElementsByClassName("top-menu")[0];

        if (menulink != null) {
            var navmenu = menulink.getElementsByTagName("nav")[0];
            var divnavmenu = navmenu.getElementsByTagName("div")[7];
            var menulinkvar = ('menu-link ' + divnavmenu.getAttributeNames()[0]);

            let buttonnode = document.createElement("a");
            buttonnode.setAttribute(divnavmenu.getAttributeNames()[0], "");
            buttonnode.setAttribute("class", menulinkvar);
            buttonnode.setAttribute("routerlinkactive", "active-link");
            buttonnode.setAttribute("href", "/deliveryops/checkout?stopredirect_please=1");

            let buttonnode2 = document.createElement("i");
            buttonnode2.setAttribute(divnavmenu.getAttributeNames()[0], "");
            buttonnode2.setAttribute("class", "checkout");

            let buttonnode3 = document.createElement("span");
            buttonnode3.setAttribute(divnavmenu.getAttributeNames()[0], "");
            buttonnode3.setAttribute("class", "link-title");
            let buttonnodetext3 = document.createTextNode("Checkout");

            buttonnode.appendChild(buttonnode2);
            buttonnode3.appendChild(buttonnodetext3);
            buttonnode.appendChild(buttonnode3);
            divnavmenu.appendChild(buttonnode);
        } else {
            AddNewTab();
        };
    }, 1000);
};

(function() {
    AddNewTab();
})();
