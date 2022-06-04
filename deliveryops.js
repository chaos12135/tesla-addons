// ==UserScript==
// @name         DeliveryAdvisorHacks
// @version      0.1
// @description  DeliveryAdvisorHacks
// @author       Justin
// @match        https://warpdrive.teslamotors.com/deliveryops/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

function ActivityCapLimit() {
    setTimeout(function () {
        var editablenotecontent = document.getElementsByClassName("editable-note-content")[0];

        if (editablenotecontent != null) {
            var navmenu = document.getElementsByTagName("textarea")[0];
            //navmenu.maxLength = 200;
            navmenu.removeAttribute("maxlength");
            //console.log(navmenu.getAttributeNames()[0]);
            ActivityCapLimit();
        } else {
            //console.log("DID NOT FIND");
            ActivityCapLimit();
        };
    }, 5000);
};

(function() {
    ActivityCapLimit();
})();
