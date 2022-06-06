// ==UserScript==
// @name         DeliveryAdvisorHacks
// @version      100.05
// @description  DeliveryAdvisorHacks
// @author       Justin
// @match        https://warpdrive.teslamotors.com/deliveryops/advisor?sidepanel_fullscreen=yes&rn=*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

function ActivityCapLimit() {
    setTimeout(function () {
        var editablenotecontent = document.getElementsByClassName("editable-note-content")[0];

        if (editablenotecontent != null) {
            var textarea_character = document.getElementsByTagName("textarea")[0];
            textarea_character.removeAttribute("maxlength");
            ActivityCapLimit();
        } else {
            ActivityCapLimit();
        };
    }, 5000);
    //console.log('test');
};

function WDONotesFix(num) {
    setTimeout(function () {
        var activitystreams = document.getElementsByClassName("activity-streams")[0];

        if (activitystreams != null) {
            for (let i = 0; i < document.getElementsByClassName("wdo-notes").length; i++) {
                document.getElementsByClassName("wdo-notes")[i].setAttribute("style", "inline-size: 350px; overflow-wrap: break-word;");
            }
            WDONotesFix();
        } else {
            num = (num + 1);
            if (num != 50) {
                WDONotesFix(num);
            }
            WDONotesFix(num);
        };
    }, 1000);
};


function FindSectionHeader() {
    setTimeout(function () {
        var sectionheader = document.getElementsByClassName("section-header")[0];

        if (sectionheader != null) {
            //document.getElementsByClassName("drop-column-group")[0].style.display = "none";

            var ORIGINAL_LINE_BREAK = document.createElement("hr");
            sectionheader.after(ORIGINAL_LINE_BREAK);

            var NEW_INFO_ELEMENT_CONTAINER = document.createElement("div");
            NEW_INFO_ELEMENT_CONTAINER.setAttribute(sectionheader.getAttributeNames()[0], "");
            NEW_INFO_ELEMENT_CONTAINER.setAttribute("style", "flex-direction: row; box-sizing: border-box; display: flex;");
            ORIGINAL_LINE_BREAK.before(NEW_INFO_ELEMENT_CONTAINER);

            var NEW_INFO_ELEMENT_BOX = document.createElement("div");
            NEW_INFO_ELEMENT_BOX.setAttribute(sectionheader.getAttributeNames()[0], "");
            NEW_INFO_ELEMENT_BOX.setAttribute("style", "flex-direction: row; box-sizing: border-box; display: flex; flex: 1 1 calc(100.0%); min-width: calc(100.0%);");
            NEW_INFO_ELEMENT_CONTAINER.appendChild(NEW_INFO_ELEMENT_BOX);

            var NEW_INFO_ELEMENT_SECTION_1 = document.createElement("div");
            NEW_INFO_ELEMENT_SECTION_1.setAttribute(sectionheader.getAttributeNames()[0], "");
            NEW_INFO_ELEMENT_SECTION_1.setAttribute("style", "flex: 1 1 100%; box-sizing: border-box; max-width: 25%;");
            NEW_INFO_ELEMENT_BOX.appendChild(NEW_INFO_ELEMENT_SECTION_1);

            var NEW_INFO_ELEMENT_SECTION_2 = document.createElement("div");
            NEW_INFO_ELEMENT_SECTION_2.setAttribute(sectionheader.getAttributeNames()[0], "");
            NEW_INFO_ELEMENT_SECTION_2.setAttribute("style", "flex: 1 1 100%; box-sizing: border-box; max-width: 25%;");
            NEW_INFO_ELEMENT_BOX.appendChild(NEW_INFO_ELEMENT_SECTION_2);

            var NEW_INFO_ELEMENT_SECTION_3 = document.createElement("div");
            NEW_INFO_ELEMENT_SECTION_3.setAttribute(sectionheader.getAttributeNames()[0], "");
            NEW_INFO_ELEMENT_SECTION_3.setAttribute("style", "flex: 1 1 100%; box-sizing: border-box; max-width: 25%;");
            NEW_INFO_ELEMENT_BOX.appendChild(NEW_INFO_ELEMENT_SECTION_3);

            var NEW_INFO_ELEMENT_SECTION_4 = document.createElement("div");
            NEW_INFO_ELEMENT_SECTION_4.setAttribute(sectionheader.getAttributeNames()[0], "");
            NEW_INFO_ELEMENT_SECTION_4.setAttribute("style", "flex: 1 1 100%; box-sizing: border-box; max-width: 25%;");
            NEW_INFO_ELEMENT_BOX.appendChild(NEW_INFO_ELEMENT_SECTION_4);

            function VehicleImageLoader(num1, num2) {
                setTimeout(function () {
                    var VehicleModelImage = document.getElementsByClassName("vehicle-configuration-image")[0];
                    if (VehicleModelImage) {
                    } else {
                        num1 = (num1 + 1);
                        if (num1 != 50) {
                            VehicleImageLoader(num1, num1);
                        }
                        return;
                    }

                    var VehicleModelImage_ImgTag = VehicleModelImage.getElementsByTagName("img")[0];
                    if (VehicleModelImage_ImgTag) {
                    } else {
                        num2 = (num2 + 1);
                        if (num2 != 50) {
                            VehicleImageLoader(num1, num2);
                        }
                        return;
                    }

                    if (VehicleModelImage_ImgTag.getAttribute('src')) {
                        var VehicleModelImage_Element = document.createElement("div");
                        VehicleModelImage_Element.setAttribute(sectionheader.getAttributeNames()[0], "");
                        VehicleModelImage_Element.setAttribute("class", "vehicle-configuration-image");
                        NEW_INFO_ELEMENT_SECTION_1.appendChild(VehicleModelImage_Element);

                        var VehicleModelImage_Element_2 = document.createElement("img");
                        VehicleModelImage_Element_2.setAttribute(sectionheader.getAttributeNames()[0], "");
                        VehicleModelImage_Element_2.setAttribute("src", VehicleModelImage_ImgTag.getAttribute('src'));
                        VehicleModelImage_Element.appendChild(VehicleModelImage_Element_2);
                    }

                }, 250);
            };
            VehicleImageLoader(0,0);

            function VehicleNameLoader(num1, num2, num3) {
                setTimeout(function () {
                    var VehicleModelName = document.getElementsByClassName("vehicle-model")[0];
                    if (VehicleModelName) {
                    } else {
                        num1 = (num1 + 1);
                        if (num1 != 50) {
                            VehicleNameLoader(num1, num2, num3);
                        }
                        return;
                    }
                    var VehicleModelDescription = document.getElementsByClassName("vehicle-configuration-string")[0];
                    if (VehicleModelDescription) {
                    } else {
                        num2 = (num2 + 1);
                        if (num2 != 50) {
                            VehicleNameLoader(num1, num2, num3);
                        }
                        return;
                    }
                    var VehicleModelDetails = document.getElementsByClassName("total-cash-title title");
                    if (VehicleModelDetails) {
                    } else {
                        num3 = (num3 + 1);
                        if (num3 != 50) {
                            VehicleNameLoader(num1, num2, num3);
                        }
                        return;
                    }

                    var VehicleModelDescription_Exploded = (VehicleModelDescription.innerHTML).split(",");
                    var VehicleModelName_ELEMENT = document.createElement("strong");
                    VehicleModelName_ELEMENT.setAttribute(sectionheader.getAttributeNames()[0], "");
                    VehicleModelName_ELEMENT.setAttribute("style", "font-size: 15px;");
                    if (VehicleModelDescription_Exploded[2]) {
                        var VehicleModelName_ELEMENT_TEXT = document.createTextNode(VehicleModelDescription_Exploded[2]);
                    } else {
                        var VehicleModelName_ELEMENT_TEXT = document.createTextNode(VehicleModelName.innerHTML);
                    }
                    VehicleModelName_ELEMENT.appendChild(VehicleModelName_ELEMENT_TEXT);
                    NEW_INFO_ELEMENT_SECTION_1.appendChild(VehicleModelName_ELEMENT);

                    if (VehicleModelDescription_Exploded[0]) {
                        var NEW_LINE_BR = document.createElement("br");
                        NEW_INFO_ELEMENT_SECTION_1.appendChild(NEW_LINE_BR);
                        var VehicleModelDescription_ELEMENT = document.createElement("strong");
                        VehicleModelDescription_ELEMENT.setAttribute(sectionheader.getAttributeNames()[0], "");
                        VehicleModelDescription_ELEMENT.setAttribute("style", "font-size: 15px;");
                        var VehicleModelDescription_ELEMENT_TEXT = document.createTextNode('- ' + VehicleModelDescription_Exploded[0]);
                        VehicleModelDescription_ELEMENT.appendChild(VehicleModelDescription_ELEMENT_TEXT);
                        NEW_INFO_ELEMENT_SECTION_1.appendChild(VehicleModelDescription_ELEMENT);
                    }

                    if (VehicleModelDescription_Exploded[3]) {
                        var NEW_LINE_BR = document.createElement("br");
                        NEW_INFO_ELEMENT_SECTION_1.appendChild(NEW_LINE_BR);
                        var VehicleModelDescription_ELEMENT = document.createElement("strong");
                        VehicleModelDescription_ELEMENT.setAttribute(sectionheader.getAttributeNames()[0], "");
                        VehicleModelDescription_ELEMENT.setAttribute("style", "font-size: 15px;");
                        var VehicleModelDescription_ELEMENT_TEXT = document.createTextNode('- ' + VehicleModelDescription_Exploded[3]);
                        VehicleModelDescription_ELEMENT.appendChild(VehicleModelDescription_ELEMENT_TEXT);
                        NEW_INFO_ELEMENT_SECTION_1.appendChild(VehicleModelDescription_ELEMENT);
                    }

                    if (VehicleModelDescription_Exploded[4]) {
                        var NEW_LINE_BR = document.createElement("br");
                        NEW_INFO_ELEMENT_SECTION_1.appendChild(NEW_LINE_BR);
                        var VehicleModelDescription_ELEMENT = document.createElement("strong");
                        VehicleModelDescription_ELEMENT.setAttribute(sectionheader.getAttributeNames()[0], "");
                        VehicleModelDescription_ELEMENT.setAttribute("style", "font-size: 15px;");
                        var VehicleModelDescription_ELEMENT_TEXT = document.createTextNode('- ' + VehicleModelDescription_Exploded[4]);
                        VehicleModelDescription_ELEMENT.appendChild(VehicleModelDescription_ELEMENT_TEXT);
                        NEW_INFO_ELEMENT_SECTION_1.appendChild(VehicleModelDescription_ELEMENT);
                    }

                    for (let i = 0; i < VehicleModelDetails.length; i++) {
                        if ((VehicleModelDetails[i].innerHTML).trim() == "Five Seat Interior") {
                            var NEW_LINE_BR = document.createElement("br");
                            NEW_INFO_ELEMENT_SECTION_1.appendChild(NEW_LINE_BR);

                            var VehicleModelDescription_ELEMENT = document.createElement("strong");
                            VehicleModelDescription_ELEMENT.setAttribute(sectionheader.getAttributeNames()[0], "");
                            VehicleModelDescription_ELEMENT.setAttribute("style", "font-size: 15px;");
                            var VehicleModelDescription_ELEMENT_TEXT = document.createTextNode("- 5 Seats");
                            VehicleModelDescription_ELEMENT.appendChild(VehicleModelDescription_ELEMENT_TEXT);
                            NEW_INFO_ELEMENT_SECTION_1.appendChild(VehicleModelDescription_ELEMENT);
                        }
                        if ((VehicleModelDetails[i].innerHTML).trim() == "Seven Seat Interior") {
                            var NEW_LINE_BR = document.createElement("br");
                            NEW_INFO_ELEMENT_SECTION_1.appendChild(NEW_LINE_BR);

                            var VehicleModelDescription_ELEMENT = document.createElement("strong");
                            VehicleModelDescription_ELEMENT.setAttribute(sectionheader.getAttributeNames()[0], "");
                            VehicleModelDescription_ELEMENT.setAttribute("style", "font-size: 15px;");
                            var VehicleModelDescription_ELEMENT_TEXT = document.createTextNode("- 7 Seats");
                            VehicleModelDescription_ELEMENT.appendChild(VehicleModelDescription_ELEMENT_TEXT);
                            NEW_INFO_ELEMENT_SECTION_1.appendChild(VehicleModelDescription_ELEMENT);
                        }
                        if ((VehicleModelDetails[i].innerHTML).trim() == "Tow Hitch") {
                            var NEW_LINE_BR = document.createElement("br");
                            NEW_INFO_ELEMENT_SECTION_1.appendChild(NEW_LINE_BR);

                            var VehicleModelDescription_ELEMENT = document.createElement("strong");
                            VehicleModelDescription_ELEMENT.setAttribute(sectionheader.getAttributeNames()[0], "");
                            VehicleModelDescription_ELEMENT.setAttribute("style", "font-size: 15px;");
                            var new_element_VehicleModelDescription_ELEMENT_TEXT5_7_text = document.createTextNode("- Tow Hitch");
                            VehicleModelDescription_ELEMENT.appendChild(VehicleModelDescription_ELEMENT);
                            NEW_INFO_ELEMENT_SECTION_1.appendChild(VehicleModelDescription_ELEMENT);
                        }
                    };

                    var WORK_IN_PROGRESS = document.createElement("div");
                    WORK_IN_PROGRESS.setAttribute(sectionheader.getAttributeNames()[0], "");
                    WORK_IN_PROGRESS.setAttribute("style", "line-height: 28px;");
                    var WORK_IN_PROGRESS_TEXT = document.createTextNode("(work in progress)");
                    WORK_IN_PROGRESS.appendChild(WORK_IN_PROGRESS_TEXT);
                    NEW_INFO_ELEMENT_SECTION_1.appendChild(WORK_IN_PROGRESS);

                }, 250);
            };
            VehicleNameLoader(0,0,0);

            function OrderDeliveryType(num1) {
                setTimeout(function () {
                    var DeliveryTypeDetails = document.getElementsByClassName("data-col-1 content");
                    if (DeliveryTypeDetails) {
                    } else {
                        num1 = (num1 + 1);
                        if (num1 != 50) {
                            OrderDeliveryType(num1);
                        }
                        return;
                    }

                    var DeliveryType_ELEMENT = document.createElement("strong");
                    DeliveryType_ELEMENT.setAttribute(sectionheader.getAttributeNames()[0], "");
                    DeliveryType_ELEMENT.setAttribute("style", "font-size: 16px;");
                    var DeliveryType_ELEMENT_TEXT = document.createTextNode("Delivery Type:");
                    DeliveryType_ELEMENT.appendChild(DeliveryType_ELEMENT_TEXT);
                    NEW_INFO_ELEMENT_SECTION_2.appendChild(DeliveryType_ELEMENT);

                    var NEW_LINE_BR = document.createElement("br");
                    NEW_INFO_ELEMENT_SECTION_2.appendChild(NEW_LINE_BR);

                    var DeliveryType_ELEMENT_2 = document.createElement("strong");
                    DeliveryType_ELEMENT_2.setAttribute(sectionheader.getAttributeNames()[0], "");
                    for (let i = 0; i < DeliveryTypeDetails.length; i++) {
                        if ((DeliveryTypeDetails[i].innerHTML).trim() == "Customer Pick-Up") {
                            var DeliveryType_ELEMENT_2_TEXT = document.createTextNode("Customer Pick-Up");
                        } else if ((DeliveryTypeDetails[i].innerHTML).trim() == "Deliver To Address") {
                            var DeliveryType_ELEMENT_2_TEXT = document.createTextNode("Deliver To Address");
                        } else if ((DeliveryTypeDetails[i].innerHTML).trim() == "Tesla Direct") {
                            var DeliveryType_ELEMENT_2_TEXT = document.createTextNode("Tesla Direct");
                        } else {
                            var DeliveryType_ELEMENT_2_TEXT = document.createTextNode("Pick-Up / Tesla Direct not selected!");
                        }
                    };
                    DeliveryType_ELEMENT_2.appendChild(DeliveryType_ELEMENT_2_TEXT);
                    NEW_INFO_ELEMENT_SECTION_2.appendChild(DeliveryType_ELEMENT_2);
                }, 250);
            };
            OrderDeliveryType(0);

            function ScheduleDate(num1, num2) {
                setTimeout(function () {
                    var DeliveryTypeDetails = document.getElementsByClassName("data-line")[1];
                    if (DeliveryTypeDetails) {
                    } else {
                        num1 = (num1 + 1);
                        if (num1 != 50) {
                            ScheduleDate(num1, num2);
                        }
                        return;
                    }
                    var DeliveryTypeDetails_2 = DeliveryTypeDetails.getElementsByClassName("data-col-2")[0];
                    if (DeliveryTypeDetails_2) {
                    } else {
                        num2 = (num2 + 1);
                        if (num2 != 50) {
                            ScheduleDate(num1, num2);
                        }
                        return;
                    }

                    var NEW_LINE_BR = document.createElement("br");
                    NEW_INFO_ELEMENT_SECTION_2.appendChild(NEW_LINE_BR);
                    var NEW_LINE_BR = document.createElement("br");
                    NEW_INFO_ELEMENT_SECTION_2.appendChild(NEW_LINE_BR);

                    var ScheduleDate_ELEMENT = document.createElement("strong");
                    ScheduleDate_ELEMENT.setAttribute(sectionheader.getAttributeNames()[0], "");
                    ScheduleDate_ELEMENT.setAttribute("style", "font-size: 16px;");
                    var ScheduleDate_ELEMENT_TEXT = document.createTextNode('Schedule Date:');
                    ScheduleDate_ELEMENT.appendChild(ScheduleDate_ELEMENT_TEXT);
                    NEW_INFO_ELEMENT_SECTION_2.appendChild(ScheduleDate_ELEMENT);

                    var NEW_LINE_BR = document.createElement("br");
                    NEW_INFO_ELEMENT_SECTION_2.appendChild(NEW_LINE_BR);

                    var ScheduleDate_ELEMENT_2 = document.createElement("strong");
                    ScheduleDate_ELEMENT_2.setAttribute(sectionheader.getAttributeNames()[0], "");
                    if ((DeliveryTypeDetails_2.innerHTML).trim() != '-') {
                        var ScheduleDate_ELEMENT_2_TEXT = document.createTextNode((DeliveryTypeDetails_2.innerHTML).trim());
                    } else {
                        var ScheduleDate_ELEMENT_2_TEXT = document.createTextNode('Not scheduled!');
                    }
                    ScheduleDate_ELEMENT_2.appendChild(ScheduleDate_ELEMENT_2_TEXT);
                    NEW_INFO_ELEMENT_SECTION_2.appendChild(ScheduleDate_ELEMENT_2);
                }, 250);
            };
            ScheduleDate(0, 0);


            function DeliveryCenter(num1, num2) {
                setTimeout(function () {
                    var DeliveryCenterDetails = document.getElementsByClassName("data-line")[1];
                    if (DeliveryCenterDetails) {
                    } else {
                        num1 = (num1 + 1);
                        if (num1 != 50) {
                            DeliveryCenter(num1, num2);
                        }
                        return;
                    }
                    var DeliveryCenterDetails_2 = DeliveryCenterDetails.getElementsByClassName("data-col-3")[0];
                    if (DeliveryCenterDetails_2) {
                    } else {
                        num2 = (num2 + 1);
                        if (num2 != 50) {
                            DeliveryCenter(num1, num2);
                        }
                        return;
                    }

                    var NEW_LINE_BR = document.createElement("br");
                    NEW_INFO_ELEMENT_SECTION_2.appendChild(NEW_LINE_BR);
                    var NEW_LINE_BR = document.createElement("br");
                    NEW_INFO_ELEMENT_SECTION_2.appendChild(NEW_LINE_BR);

                    var DeliveryCenter_ELEMENT = document.createElement("strong");
                    DeliveryCenter_ELEMENT.setAttribute(sectionheader.getAttributeNames()[0], "");
                    DeliveryCenter_ELEMENT.setAttribute("style", "font-size: 16px;");
                    var DeliveryCenter_ELEMENT_TEXT = document.createTextNode('Delivery Center:');
                    DeliveryCenter_ELEMENT.appendChild(DeliveryCenter_ELEMENT_TEXT);
                    NEW_INFO_ELEMENT_SECTION_2.appendChild(DeliveryCenter_ELEMENT);

                    var NEW_LINE_BR = document.createElement("br");
                    NEW_INFO_ELEMENT_SECTION_2.appendChild(NEW_LINE_BR);

                    var DeliveryCenter_ELEMENT_2 = document.createElement("strong");
                    DeliveryCenter_ELEMENT_2.setAttribute(sectionheader.getAttributeNames()[0], "");
                    if ((DeliveryCenterDetails_2.innerHTML).trim()) {
                        var DeliveryCenter_ELEMENT_2_TEXT = document.createTextNode((DeliveryCenterDetails_2.innerHTML).trim());
                    } else {
                        var DeliveryCenter_ELEMENT_2_TEXT = document.createTextNode('Delivery location not selected!');
                    }
                    DeliveryCenter_ELEMENT_2.appendChild(DeliveryCenter_ELEMENT_2_TEXT);
                    NEW_INFO_ELEMENT_SECTION_2.appendChild(DeliveryCenter_ELEMENT_2);
                }, 250);
            };
            DeliveryCenter(0, 0);


            function PaymentType(num1, num2, num3, num4, num5, num6) {
                setTimeout(function () {
                    var PaymentTypeDetails = document.getElementsByClassName("payment-type-title item")[0];
                    if (PaymentTypeDetails) {
                    } else {
                        num1 = (num1 + 1);
                        if (num1 != 50) {
                            PaymentType(num1, num2, num3, num4, num5, num6);
                        }
                        return;
                    }
                    var PaymentTypeDetails_2 = PaymentTypeDetails.getElementsByClassName("value")[0];
                    if (PaymentTypeDetails_2) {
                    } else {
                        num2 = (num2 + 1);
                        if (num2 != 50) {
                            PaymentType(num1, num2, num3, num4, num5, num6);
                        }
                        return;
                    }
                    var PaymentTypeDetails_3 = document.getElementsByClassName("result section")[0];
                    if (PaymentTypeDetails_3) {
                    } else {
                        num3 = (num3 + 1);
                        if (num3 != 50) {
                            PaymentType(num1, num2, num3, num4, num5, num6);
                        }
                        return;
                    }
                    if (PaymentTypeDetails_3.getElementsByClassName("normal-row")[0]) {
                        var PaymentTypeDetails_4 = PaymentTypeDetails_3.getElementsByClassName("normal-row")[0];
                        if (PaymentTypeDetails_4) {
                        } else {
                            num4 = (num4 + 1);
                            if (num4 != 50) {
                                PaymentType(num1, num2, num3, num4, num5, num6);
                            }
                            return;
                        }
                        var PaymentTypeDetails_5 = PaymentTypeDetails_4.getElementsByClassName("row-content")[0];
                        if (PaymentTypeDetails_5) {
                        } else {
                            num5 = (num5 + 1);
                            if (num5 != 50) {
                                PaymentType(num1, num2, num3, num4, num5, num6);
                            }
                            return;
                        }
                        var PaymentTypeDetails_6 = PaymentTypeDetails_5.getElementsByTagName("div")[0];
                        if (PaymentTypeDetails_6) {
                        } else {
                            num6 = (num6 + 1);
                            if (num6 != 50) {
                                PaymentType(num1, num2, num3, num4, num5, num6);
                            }
                            return;
                        }
                    }


                    var NEW_LINE_BR = document.createElement("br");
                    NEW_INFO_ELEMENT_SECTION_2.appendChild(NEW_LINE_BR);
                    var NEW_LINE_BR = document.createElement("br");
                    NEW_INFO_ELEMENT_SECTION_2.appendChild(NEW_LINE_BR);

                    var PaymentType_ELEMENT = document.createElement("strong");
                    PaymentType_ELEMENT.setAttribute(sectionheader.getAttributeNames()[0], "");
                    PaymentType_ELEMENT.setAttribute("style", "font-size: 16px;");
                    var PaymentType_ELEMENT_TEXT = document.createTextNode('Payment Type:');
                    PaymentType_ELEMENT.appendChild(PaymentType_ELEMENT_TEXT);
                    NEW_INFO_ELEMENT_SECTION_2.appendChild(PaymentType_ELEMENT);

                    var NEW_LINE_BR = document.createElement("br");
                    NEW_INFO_ELEMENT_SECTION_2.appendChild(NEW_LINE_BR);

                    var PaymentType_ELEMENT_2 = document.createElement("strong");
                    PaymentType_ELEMENT_2.setAttribute(sectionheader.getAttributeNames()[0], "");
                    if ((PaymentTypeDetails_2.innerHTML).trim() == 'TESLA_LENDING') {
                        CreditDecision(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                        if (PaymentTypeDetails_3.getElementsByClassName("normal-row")[0]) {
                            var PaymentType_ELEMENT_2_TEXT = document.createTextNode('Tesla Financing - [' + (PaymentTypeDetails_6.innerHTML).trim() + ']');
                        } else {
                            var PaymentType_ELEMENT_2_TEXT = document.createTextNode('Tesla Financing - [~NOT APPLIED~]');
                        }
                    } else if ((PaymentTypeDetails_2.innerHTML).trim() == 'TESLA_LEASING') {
                        CreditDecision(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                        if (PaymentTypeDetails_3.getElementsByClassName("normal-row")[0]) {
                            var PaymentType_ELEMENT_2_TEXT = document.createTextNode('Tesla Leasing - [' + (PaymentTypeDetails_6.innerHTML).trim() + ']');
                        } else {
                            var PaymentType_ELEMENT_2_TEXT = document.createTextNode('Tesla Leasing - [~NOT APPLIED~]');
                        }
                    } else if ((PaymentTypeDetails_2.innerHTML).trim() == 'THIRD_PARTY_LENDING') {
                        var PaymentType_ELEMENT_2_TEXT = document.createTextNode('3rd Party Financing - [' + (PaymentTypeDetails_6.innerHTML).trim() + ']');
                    } else if ((PaymentTypeDetails_2.innerHTML).trim() == 'CASH') {
                        var PaymentType_ELEMENT_2_TEXT = document.createTextNode('Cash');
                    } else {
                        var PaymentType_ELEMENT_2_TEXT = document.createTextNode('Payment type not selected!');
                    }
                    PaymentType_ELEMENT_2.appendChild(PaymentType_ELEMENT_2_TEXT);
                    NEW_INFO_ELEMENT_SECTION_2.appendChild(PaymentType_ELEMENT_2);
                }, 250);
            };
            PaymentType(0, 0, 0, 0, 0, 0);


            function PaymentEstimate(num1) {
                setTimeout(function () {
                    var PaymentEstimateDetails = document.getElementsByClassName("estimate-amount-due-value")[0];
                    if (PaymentEstimateDetails) {
                    } else {
                        num1 = (num1 + 1);
                        if (num1 != 50) {
                            PaymentEstimate(num1);
                        }
                        return;
                    }

                    var NEW_LINE_BR = document.createElement("br");
                    NEW_INFO_ELEMENT_SECTION_2.appendChild(NEW_LINE_BR);
                    var NEW_LINE_BR = document.createElement("br");
                    NEW_INFO_ELEMENT_SECTION_2.appendChild(NEW_LINE_BR);

                    var PaymentEstimate_ELEMENT = document.createElement("strong");
                    PaymentEstimate_ELEMENT.setAttribute(sectionheader.getAttributeNames()[0], "");
                    PaymentEstimate_ELEMENT.setAttribute("style", "font-size: 16px;");
                    var PaymentEstimate_ELEMENT_TEXT = document.createTextNode('Amount Due:');
                    PaymentEstimate_ELEMENT.appendChild(PaymentEstimate_ELEMENT_TEXT);
                    NEW_INFO_ELEMENT_SECTION_2.appendChild(PaymentEstimate_ELEMENT);

                    var NEW_LINE_BR = document.createElement("br");
                    NEW_INFO_ELEMENT_SECTION_2.appendChild(NEW_LINE_BR);

                    var PaymentEstimate_ELEMENT_2 = document.createElement("strong");
                    PaymentEstimate_ELEMENT_2.setAttribute(sectionheader.getAttributeNames()[0], "");
                    if ((PaymentEstimateDetails.innerHTML).trim() != '$0.00') {
                        PaymentEstimate_ELEMENT_2.setAttribute("style", "color: red;");
                    }
                    if ((PaymentEstimateDetails.innerHTML).trim()) {
                        var PaymentEstimate_ELEMENT_2_TEXT = document.createTextNode((PaymentEstimateDetails.innerHTML).trim());
                    } else {
                        var PaymentEstimate_ELEMENT_2_TEXT = document.createTextNode('Something went wrong, please verify amount due!');
                    }
                    PaymentEstimate_ELEMENT_2.appendChild(PaymentEstimate_ELEMENT_2_TEXT);
                    NEW_INFO_ELEMENT_SECTION_2.appendChild(PaymentEstimate_ELEMENT_2);
                }, 250);
            };
            PaymentEstimate(0);


            function CreditDecision(num1, num2, num3, num4, num5, num6, num7, num8, num9, num10, num11) {
                setTimeout(function () {
                    var CreditDecisionDetails = document.getElementsByClassName("progress section")[0];
                    if (CreditDecisionDetails) {
                    } else {
                        num1 = (num1 + 1);
                        if (num1 != 50) {
                            PaymentType(num1, num2, num3, num4, num5, num6, num7, num8, num9, num10, num11);
                        }
                        return;
                    }
                    var CreditDecisionDetails_2 = CreditDecisionDetails.getElementsByClassName("normal-row")[0];
                    if (CreditDecisionDetails_2) {
                    } else {
                        num2 = (num2 + 1);
                        if (num2 != 50) {
                            PaymentType(num1, num2, num3, num4, num5, num6, num7, num8, num9, num10, num11);
                        }
                        return;
                    }
                    var CreditDecisionDetails_3 = CreditDecisionDetails.getElementsByClassName("normal-row")[1];
                    if (CreditDecisionDetails_3) {
                    } else {
                        num3 = (num3 + 1);
                        if (num3 != 50) {
                            PaymentType(num1, num2, num3, num4, num5, num6, num7, num8, num9, num10, num11);
                        }
                        return;
                    }
                    var CreditDecisionDetails_4 = CreditDecisionDetails_2.getElementsByClassName("row-content")[0];
                    if (CreditDecisionDetails_4) {
                    } else {
                        num4 = (num4 + 1);
                        if (num4 != 50) {
                            PaymentType(num1, num2, num3, num4, num5, num6, num7, num8, num9, num10, num11);
                        }
                        return;
                    }
                    var CreditDecisionDetails_5 = CreditDecisionDetails_3.getElementsByClassName("row-content")[0];
                    if (CreditDecisionDetails_5) {
                    } else {
                        num5 = (num5 + 1);
                        if (num5 != 50) {
                            PaymentType(num1, num2, num3, num4, num5, num6, num7, num8, num9, num10, num11);
                        }
                        return;
                    }
                    var CreditDecisionDetails_6 = CreditDecisionDetails_4.getElementsByTagName("div")[0];
                    if (CreditDecisionDetails_6) {
                    } else {
                        num6 = (num6 + 1);
                        if (num6 != 50) {
                            PaymentType(num1, num2, num3, num4, num5, num6, num7, num8, num9, num10, num11);
                        }
                        return;
                    }
                    var CreditDecisionDetails_7 = CreditDecisionDetails_4.getElementsByTagName("div")[1];
                    if (CreditDecisionDetails_7) {
                    } else {
                        num7 = (num7 + 1);
                        if (num7 != 50) {
                            PaymentType(num1, num2, num3, num4, num5, num6, num7, num8, num9, num10, num11);
                        }
                        return;
                    }
                    var CreditDecisionDetails_8 = CreditDecisionDetails_5.getElementsByTagName("div")[0];
                    if (CreditDecisionDetails_8) {
                    } else {
                        num8 = (num8 + 1);
                        if (num8 != 50) {
                            PaymentType(num1, num2, num3, num4, num5, num6, num7, num8, num9, num10, num11);
                        }
                        return;
                    }
                    var CreditDecisionDetails_9 = CreditDecisionDetails.getElementsByClassName("normal-row")[2];
                    if (CreditDecisionDetails_9) {
                    } else {
                        num9 = (num9 + 1);
                        if (num9 != 50) {
                            PaymentType(num1, num2, num3, num4, num5, num6, num7, num8, num9, num10, num11);
                        }
                        return;
                    }
                    var CreditDecisionDetails_10 = CreditDecisionDetails_9.getElementsByClassName("row-content")[0];
                    if (CreditDecisionDetails_10) {
                    } else {
                        num10 = (num10 + 1);
                        if (num10 != 50) {
                            PaymentType(num1, num2, num3, num4, num5, num6, num7, num8, num9, num10, num11);
                        }
                        return;
                    }
                    var CreditDecisionDetails_11 = CreditDecisionDetails_10.getElementsByTagName("div")[0];
                    if (CreditDecisionDetails_11) {
                    } else {
                        num11 = (num11 + 1);
                        if (num11 != 50) {
                            PaymentType(num1, num2, num3, num4, num5, num6, num7, num8, num9, num10, num11);
                        }
                        return;
                    }

                    var CreditDecision_ELEMENT = document.createElement("strong");
                    CreditDecision_ELEMENT.setAttribute(sectionheader.getAttributeNames()[0], "");
                    CreditDecision_ELEMENT.setAttribute("style", "font-size: 16px;");
                    var CreditDecision_ELEMENT_TEXT = document.createTextNode('Application Status:');
                    CreditDecision_ELEMENT.appendChild(CreditDecision_ELEMENT_TEXT);
                    NEW_INFO_ELEMENT_SECTION_3.appendChild(CreditDecision_ELEMENT);

                    var NEW_LINE_BR = document.createElement("br");
                    NEW_INFO_ELEMENT_SECTION_3.appendChild(NEW_LINE_BR);

                    var CreditDecision_ELEMENT_2 = document.createElement("strong");
                    CreditDecision_ELEMENT_2.setAttribute(sectionheader.getAttributeNames()[0], "");
                    if ((CreditDecisionDetails_6.innerHTML).trim() == 'ACTIVE') {
                        CreditDecision_ELEMENT_2.setAttribute("style", "color: lime;");
                    }
                    var CreditDecision_ELEMENT_2_TEXT = document.createTextNode((CreditDecisionDetails_6.innerHTML).trim());
                    CreditDecision_ELEMENT_2.appendChild(CreditDecision_ELEMENT_2_TEXT);
                    NEW_INFO_ELEMENT_SECTION_3.appendChild(CreditDecision_ELEMENT_2);



                    var NEW_LINE_BR = document.createElement("br");
                    NEW_INFO_ELEMENT_SECTION_3.appendChild(NEW_LINE_BR);
                    var NEW_LINE_BR = document.createElement("br");
                    NEW_INFO_ELEMENT_SECTION_3.appendChild(NEW_LINE_BR);

                    var CreditDecision_ELEMENT = document.createElement("strong");
                    CreditDecision_ELEMENT.setAttribute(sectionheader.getAttributeNames()[0], "");
                    CreditDecision_ELEMENT.setAttribute("style", "font-size: 16px;");
                    var CreditDecision_ELEMENT_TEXT = document.createTextNode('Credit Decision Status:');
                    CreditDecision_ELEMENT.appendChild(CreditDecision_ELEMENT_TEXT);
                    NEW_INFO_ELEMENT_SECTION_3.appendChild(CreditDecision_ELEMENT);

                    var NEW_LINE_BR = document.createElement("br");
                    NEW_INFO_ELEMENT_SECTION_3.appendChild(NEW_LINE_BR);

                    var CreditDecision_ELEMENT_2 = document.createElement("strong");
                    CreditDecision_ELEMENT_2.setAttribute(sectionheader.getAttributeNames()[0], "");
                    if ((CreditDecisionDetails_7.innerHTML).trim() == 'APPROVED') {
                        CreditDecision_ELEMENT_2.setAttribute("style", "color: lime;");
                    }
                    var CreditDecision_ELEMENT_2_TEXT = document.createTextNode((CreditDecisionDetails_7.innerHTML).trim());
                    CreditDecision_ELEMENT_2.appendChild(CreditDecision_ELEMENT_2_TEXT);
                    NEW_INFO_ELEMENT_SECTION_3.appendChild(CreditDecision_ELEMENT_2);



                    var NEW_LINE_BR = document.createElement("br");
                    NEW_INFO_ELEMENT_SECTION_3.appendChild(NEW_LINE_BR);
                    var NEW_LINE_BR = document.createElement("br");
                    NEW_INFO_ELEMENT_SECTION_3.appendChild(NEW_LINE_BR);

                    var CreditDecision_ELEMENT = document.createElement("strong");
                    CreditDecision_ELEMENT.setAttribute(sectionheader.getAttributeNames()[0], "");
                    CreditDecision_ELEMENT.setAttribute("style", "font-size: 16px;");
                    var CreditDecision_ELEMENT_TEXT = document.createTextNode('Offer Status:');
                    CreditDecision_ELEMENT.appendChild(CreditDecision_ELEMENT_TEXT);
                    NEW_INFO_ELEMENT_SECTION_3.appendChild(CreditDecision_ELEMENT);

                    var NEW_LINE_BR = document.createElement("br");
                    NEW_INFO_ELEMENT_SECTION_3.appendChild(NEW_LINE_BR);

                    var CreditDecision_ELEMENT_2 = document.createElement("strong");
                    CreditDecision_ELEMENT_2.setAttribute(sectionheader.getAttributeNames()[0], "");
                    if ((CreditDecisionDetails_8.innerHTML).trim() == 'EXPIRED') {
                        CreditDecision_ELEMENT_2.setAttribute("style", "color: red;");
                    }
                    var CreditDecision_ELEMENT_2_TEXT = document.createTextNode((CreditDecisionDetails_8.innerHTML).trim());
                    CreditDecision_ELEMENT_2.appendChild(CreditDecision_ELEMENT_2_TEXT);
                    NEW_INFO_ELEMENT_SECTION_3.appendChild(CreditDecision_ELEMENT_2);



                    var NEW_LINE_BR = document.createElement("br");
                    NEW_INFO_ELEMENT_SECTION_3.appendChild(NEW_LINE_BR);
                    var NEW_LINE_BR = document.createElement("br");
                    NEW_INFO_ELEMENT_SECTION_3.appendChild(NEW_LINE_BR);

                    var CreditDecision_ELEMENT = document.createElement("strong");
                    CreditDecision_ELEMENT.setAttribute(sectionheader.getAttributeNames()[0], "");
                    CreditDecision_ELEMENT.setAttribute("style", "font-size: 16px;");
                    var CreditDecision_ELEMENT_TEXT = document.createTextNode('Credit Expiration Date:');
                    CreditDecision_ELEMENT.appendChild(CreditDecision_ELEMENT_TEXT);
                    NEW_INFO_ELEMENT_SECTION_3.appendChild(CreditDecision_ELEMENT);

                    var NEW_LINE_BR = document.createElement("br");
                    NEW_INFO_ELEMENT_SECTION_3.appendChild(NEW_LINE_BR);

                    var DateString = ('');
                    var CreditDecision_ELEMENT_2 = document.createElement("strong");
                    CreditDecision_ELEMENT_2.setAttribute(sectionheader.getAttributeNames()[0], "");
                    if ((CreditDecisionDetails_11.innerHTML).trim() != 'Not available') {
                        var CreditDecision_ELEMENT_2_EXPLODED = ((CreditDecisionDetails_11.innerHTML).trim()).split("/");
                        if (CreditDecision_ELEMENT_2_EXPLODED[1] == '01') {
                            DateString = ('Jan');
                        } else if (CreditDecision_ELEMENT_2_EXPLODED[1] == '02') {
                            DateString = ('Feb');
                        } else if (CreditDecision_ELEMENT_2_EXPLODED[1] == '03') {
                            DateString = ('March');
                        } else if (CreditDecision_ELEMENT_2_EXPLODED[1] == '04') {
                            DateString = ('April');
                        } else if (CreditDecision_ELEMENT_2_EXPLODED[1] == '05') {
                            DateString = ('May');
                        } else if (CreditDecision_ELEMENT_2_EXPLODED[1] == '06') {
                            DateString = ('June');
                        } else if (CreditDecision_ELEMENT_2_EXPLODED[1] == '07') {
                            DateString = ('July');
                        } else if (CreditDecision_ELEMENT_2_EXPLODED[1] == '08') {
                            DateString = ('August');
                        } else if (CreditDecision_ELEMENT_2_EXPLODED[1] == '09') {
                            DateString = ('September');
                        } else if (CreditDecision_ELEMENT_2_EXPLODED[1] == '10') {
                            DateString = ('October');
                        } else if (CreditDecision_ELEMENT_2_EXPLODED[1] == '11') {
                            DateString = ('November');
                        } else if (CreditDecision_ELEMENT_2_EXPLODED[1] == '12') {
                            DateString = ('December');
                        }
                        DateString = (DateString + ' '  + CreditDecision_ELEMENT_2_EXPLODED[2] + ', ' + CreditDecision_ELEMENT_2_EXPLODED[0]);
                    } else {
                        DateString = ('Not Available');
                    }
                    var CreditDecision_ELEMENT_2_TEXT = document.createTextNode(DateString);
                    CreditDecision_ELEMENT_2.appendChild(CreditDecision_ELEMENT_2_TEXT);
                    NEW_INFO_ELEMENT_SECTION_3.appendChild(CreditDecision_ELEMENT_2);
                }, 250);
            };



            function DisplayKeywords(num1, num2) {
                setTimeout(function () {
                    var KeywordNoteItems = document.getElementsByClassName("note-items")[0];
                    if (KeywordNoteItems) {
                    } else {
                        num1 = (num1 + 1);
                        if (num1 != 50) {
                            DisplayKeywords(num1, num2);
                        }
                        return;
                    }
                    var KeywordNoteItems_2 = KeywordNoteItems.getElementsByClassName("selected-keyword-item");
                    if (KeywordNoteItems_2) {
                    } else {
                        num2 = (num2 + 1);
                        if (num2 != 50) {
                            DisplayKeywords(num1, num2);
                        }
                        return;
                    }

                    var KeywordItems_ELEMENT = document.createElement("strong");
                    KeywordItems_ELEMENT.setAttribute(sectionheader.getAttributeNames()[0], "");
                    KeywordItems_ELEMENT.setAttribute("style", "font-size: 16px;");
                    var KeywordItems_ELEMENT_TEXT = document.createTextNode('Keywords:');
                    KeywordItems_ELEMENT.appendChild(KeywordItems_ELEMENT_TEXT);
                    NEW_INFO_ELEMENT_SECTION_4.appendChild(KeywordItems_ELEMENT);

                    for (let i = 0; i < KeywordNoteItems_2.length; i++) {
                        var NEW_LINE_BR = document.createElement("br");
                        NEW_INFO_ELEMENT_SECTION_4.appendChild(NEW_LINE_BR);

                        var KeywordItems_ELEMENT_2 = document.createElement("strong");
                        KeywordItems_ELEMENT_2.setAttribute(sectionheader.getAttributeNames()[0], "");
                        if ((KeywordNoteItems_2[i].getElementsByTagName("span")[0].innerHTML).trim() == 'VIP') {
                            KeywordItems_ELEMENT_2.setAttribute("style", "color: red;");
                            var KeywordItems_ELEMENT_2_TEXT = document.createTextNode('~ VIP - PLEASE PAY ATTENTION ~');
                        } else {
                            var KeywordItems_ELEMENT_2_TEXT = document.createTextNode('- ' + (KeywordNoteItems_2[i].getElementsByTagName("span")[0].innerHTML));
                        }
                        KeywordItems_ELEMENT_2.appendChild(KeywordItems_ELEMENT_2_TEXT);
                        NEW_INFO_ELEMENT_SECTION_4.appendChild(KeywordItems_ELEMENT_2);
                    }
                }, 250);
            };
            DisplayKeywords(0, 0);


        } else {
            FindSectionHeader();
        };
    }, 3000);
};


(function() {
    ActivityCapLimit();
    WDONotesFix();
    FindSectionHeader();
})();
