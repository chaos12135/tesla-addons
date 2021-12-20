// ==UserScript==
// @name         SALES OP
// @version      0.1
// @description  Adjusts visuals on Sales OPs
// @author       Justin
// @match        https://sales-prd.tesla.com/dashboard/lms/so/details/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

function formatPhoneNumber(phoneNumberString) {
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        var intlCode = (match[1] ? '+1 ' : '');
        return [intlCode, '(', match[2], ')-', match[3], '-', match[4]].join('');
    }
    return null;
}

function CleanPhoneNumber() {
    setTimeout(function () {
        var DocumentIndexPage = document.getElementsByClassName("message-status_children__2fFil")[0];
        if (DocumentIndexPage != null) {
            var FixedData = DocumentIndexPage.innerHTML.replace(/\D/g, '');
            if (FixedData.length == 11) {
                DocumentIndexPage.innerHTML = (formatPhoneNumber(FixedData));
                //alert("11 data: " + formatPhoneNumber(FixedData));
            } else if (FixedData.length == 10) {
                DocumentIndexPage.innerHTML = (formatPhoneNumber(FixedData));
                //alert("10 data: " + formatPhoneNumber(FixedData));
            }
        } else {
            CleanPhoneNumber();
        }
    }, 1000);
};


function OpInfoClean(index) {
    if (index < 1000) {
        setTimeout(function () {
            var DocumentIndexPage = document.getElementsByClassName("TabList_sfdcGridContainer__2RYES")[0];
            if (DocumentIndexPage != null) {
                const listofremoved = [];
                var xB = 0;
                listofremoved[xB] = ("Product Specialist Credit  : ");
                xB++;
                listofremoved[xB] = ("Type  : ");
                for (let i = 0; i <= DocumentIndexPage.getElementsByTagName("div").length; i++) {
                    if (DocumentIndexPage.getElementsByTagName("div")[i] != null) { // Check each DIV in the <ul> list
                        if (DocumentIndexPage.getElementsByTagName("div")[i].getElementsByClassName("MuiFormLabel-root")[0] != null) { // Each div has a <label> with the class 'MuiFormLabel-root'
                            //console.log(DocumentIndexPage.getElementsByTagName("div")[i].getElementsByClassName("MuiFormLabel-root")[0].innerHTML);
                            for (let ixB = 0; ixB <= listofremoved.length; ixB++) {
                                if (listofremoved[ixB] == DocumentIndexPage.getElementsByTagName("div")[i].getElementsByClassName("MuiFormLabel-root")[0].innerHTML) {
                                    console.log("REMOVED: " + DocumentIndexPage.getElementsByTagName("div")[i].getElementsByClassName("MuiFormLabel-root")[0].innerHTML);
                                    setTimeout(function () {
                                        DocumentIndexPage.getElementsByTagName("div")[i].remove();
                                    }, 100);
                                }
                            }
                        }
                    }

                }

            } else {
                OpInfoClean(0);
            };
        }, 1000);
    }
};


(function() {
    CleanPhoneNumber();
    //OpInfoClean(0);
})();
