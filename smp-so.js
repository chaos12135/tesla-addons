// ==UserScript==
// @name         SALES OP
// @version      100.01
// @description  Adjusts visuals on Sales OPs
// @author       Justin
// @match        https://sales-prd.tesla.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

function formatPhoneNumber(phoneNumberString) {
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        var intlCode = (match[1] ? '+1 ' : '');
        return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('');
    }
    return null;
}

function CleanPhoneNumber(index) {
    index = (index + 1);
    if (index < 10) {
        setTimeout(function () {
            var DocumentIndexPage = document.getElementsByClassName("message-status_children__2fFil")[0];
            if (DocumentIndexPage != null) {
                var FixedData = DocumentIndexPage.innerHTML.replace(/\D/g, '');
                DocumentIndexPage.innerHTML = (formatPhoneNumber(FixedData));
            } else {
                CleanPhoneNumber(index);
            }
        }, 1000);
    };
};

function MailToEmail(index) {
    index = (index + 1);
    if (index < 10) {
        setTimeout(function () {
            var DocumentIndexPage = document.getElementsByClassName("banner_listRow__2GZHP")[2];
            if (DocumentIndexPage != null) {
                var DocumentIndexPage2 = DocumentIndexPage.getElementsByClassName("banner_listItem__H4ijz")[1];
                if (DocumentIndexPage2 != null) {
                    var DocumentIndexPage3 = DocumentIndexPage.getElementsByClassName("banner_colorBlue__3NE-P banner_linkWrap__2A8Q7")[0];
                    if (DocumentIndexPage3 != null) {
                        var FixedData = DocumentIndexPage2.innerHTML;
                        const node = document.createElement("a");
                        node.setAttribute("href", "mailto:" + DocumentIndexPage3.innerText + "");
                        node.setAttribute("style", "display: block; width: 155px; height: 25px; background: #3E6AE1; padding: 0px; text-align: center; border-radius: 100px; color: white; font-weight: 600; font-size: 10px; line-height: 25px;");
                        const textnode = document.createTextNode("OPEN IN OUTLOOK");
                        node.appendChild(textnode);
                        DocumentIndexPage2.appendChild(node);
                    } else {
                        MailToEmail(index);
                    }
                } else {
                    MailToEmail(index);
                }
            } else {
                MailToEmail(index);
            }
        }, 1000);
    };
};

/*
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
*/

(function() {
    CleanPhoneNumber(0);
    MailToEmail(0);
    //OpInfoClean(0);
})();
