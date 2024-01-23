(function() {
    //document.querySelectorAll("html.skrollr.skrollr-mobile").removeEventListener("touchend", function (a){})
    jQuery(document).ready(function ($) {
        var lang = $("html").attr("lang");

        console.log(lang);
        var langsh = "de";

        if (lang == "fr-FR"){
            langsh = "fr";
        }else if (lang == "en-US"){
            langsh = "en";
        }
        console.log(langsh);
        langu = {
            de: {
                JetztBuchen:"Jetzt buchen",
                TicketBestellen:'Ticket bestellen',
                JetztReservieren:'Jetzt reservieren',
                JetztBuchen:'Jetzt buchen',
                JetztLosen:'Jetzt lösen',
                cancelLabel: "Abbrechen",
                fromLabel: "Von",
                toLabel: "Bis",
                daysOfWeek: [
                    "So",
                    "Mo",
                    "Di",
                    "Mi",
                    "Do",
                    "Fr",
                    "Sa"
                ],
                monthNames: [
                    "Januar",
                    "Februar",
                    "März",
                    "April",
                    "Mai",
                    "Juni",
                    "Juli",
                    "August",
                    "September",
                    "Oktober",
                    "November",
                    "Dezember"
                ]
            },
            "fr": {
                JetztBuchen:"Réserver maintenant",
                TicketBestellen:'Commander un billet',
                JetztReservieren:'Réserver maintenant',
                JetztBuchen:'Réserver maintenant',
                JetztLosen:'Résoudre maintenant',
                cancelLabel: "Annuler",
                fromLabel: "De",
                toLabel: "Jusqu'à",
                daysOfWeek: [
                    "So",
                    "Mo",
                    "Ma",
                    "Mi",
                    "Do",
                    "Ven",
                    "Sa"
                ],
                monthNames: [
                    "janvier",
                    "février",
                    "mars",
                    "avril",
                    "mai",
                    "juin",
                    "juillet",
                    "août",
                    "septembre",
                    "octobre",
                    "novembre",
                    "décembre"
                ]
            },
            "en": {
                JetztBuchen:"Book now",
                TicketBestellen:'Order ticket',
                JetztReservieren:'Reserve now',
                JetztBuchen:'Book now',
                JetztLosen:'Release now',
                cancelLabel: "Cancel",
                fromLabel: "From",
                toLabel: "To",
                daysOfWeek: [
                    "So",
                    "Mon",
                    "Tue",
                    "Wed",
                    "Thu",
                    "Fri",
                    "Sat"
                ],
                monthNames: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December"
                ]
            }
        }

        $(".card_searchbox #searchbox-dropdown").change(function () {
            searchboxHtml();
        })
		
		// Hauptdropdown

        function searchboxHtml() {
            if ($(".card_searchbox #searchbox-dropdown").val() == "hotel" || $(".card_searchbox #searchbox-dropdown").val() == "hôtel" ) {
                $(".card_searchbox .searchbox-changes").addClass("displaynone");
                $(".card_searchbox .searchbox-hotel").removeClass("displaynone");
                $(".card_searchbox .btn-success").html(langu[langsh].JetztBuchen);
                $(".card_searchbox .btn-searchbox").show();
                console.log(dataLayer.push({'changeSearchbox': 'Hotel'}));
            } else if ($(".card_searchbox #searchbox-dropdown").val() == "bahn") {
                $(".card_searchbox .searchbox-changes").addClass("displaynone");
                $(".card_searchbox .searchbox-leer").removeClass("displaynone");
                $(".card_searchbox .btn-success").html(langu[langsh].TicketBestellen);
                $(".card_searchbox .btn-searchbox").show();
                console.log(dataLayer.push({'changeSearchbox': 'Bergbahntickets kaufen'}));
            } else if ($(".card_searchbox #searchbox-dropdown").val() == "ski") {
                $(".card_searchbox .searchbox-changes").addClass("displaynone");
                $(".card_searchbox .searchbox-leer").removeClass("displaynone");
                $(".card_searchbox .btn-success").html(langu[langsh].TicketBestellen);
                $(".card_searchbox .btn-searchbox").show();
                console.log(dataLayer.push({'changeSearchbox': 'Skitickets kaufen'}));
            } else if ($(".card_searchbox #searchbox-dropdown").val() == "skiberg") {
                $(".card_searchbox .searchbox-changes").addClass("displaynone");
                $(".card_searchbox .searchbox-leer").removeClass("displaynone");
                $(".card_searchbox .btn-success").html(langu[langsh].TicketBestellen);
                $(".card_searchbox .btn-searchbox").show();
                console.log(dataLayer.push({'changeSearchbox': 'Ski- und Bergbahntickets kaufen'}));
            } else if ($(".card_searchbox #searchbox-dropdown").val() == "restaurant") {
                $(".card_searchbox .searchbox-changes").addClass("displaynone");
                $(".card_searchbox .searchbox-reservieren").removeClass("displaynone");
                $(".card_searchbox .btn-success").html(langu[langsh].JetztReservieren);
                $(".card_searchbox .btn-searchbox").show();
                console.log(dataLayer.push({'changeSearchbox': 'Restaurant'}));
            } else if ($(".card_searchbox #searchbox-dropdown").val() == "fondures") {
                $(".card_searchbox .searchbox-changes").addClass("displaynone");
                $(".card_searchbox .searchbox-leer").removeClass("displaynone");
                $(".card_searchbox .btn-success").html(langu[langsh].JetztReservieren);
                $(".card_searchbox .btn-searchbox").show();
                console.log(dataLayer.push({'changeSearchbox': 'Fondue Reservieren'}));
            } else if ($(".card_searchbox #searchbox-dropdown").val() == "raclettres") {
                $(".card_searchbox .searchbox-changes").addClass("displaynone");
                $(".card_searchbox .searchbox-leer").removeClass("displaynone");
                $(".card_searchbox .btn-success").html(langu[langsh].JetztReservieren);
                $(".card_searchbox .btn-searchbox").show();
                console.log(dataLayer.push({'changeSearchbox': 'Raclett reservieren'}));
            } else if ($(".card_searchbox #searchbox-dropdown").val() == "kaserei") {
                $(".card_searchbox .searchbox-changes").addClass("displaynone");
                $(".card_searchbox .searchbox-leer").removeClass("displaynone");
                $(".card_searchbox .btn-success").html(langu[langsh].JetztBuchen);
                $(".card_searchbox .btn-searchbox").show();
                console.log(dataLayer.push({'changeSearchbox': 'Käserei'}));
            } else if ($(".card_searchbox #searchbox-dropdown").val() == "gutschein" || $(".card_searchbox #searchbox-dropdown").val() == "bon d'achat") {
                $(".card_searchbox .searchbox-changes").addClass("displaynone");
                $(".card_searchbox .searchbox-leer").removeClass("displaynone");
                $(".card_searchbox .btn-success").html(langu[langsh].JetztBuchen);
                $(".card_searchbox .btn-searchbox").show();
                console.log(dataLayer.push({'changeSearchbox': 'Gutscheine'}));
            } else if ($(".card_searchbox #searchbox-dropdown").val() == "bahn") {
                $(".card_searchbox .searchbox-changes").addClass("displaynone");
                $(".card_searchbox .searchbox-ticket").removeClass("displaynone");
                $(".card_searchbox .btn-success").html(langu[langsh].JetztLosen);
                $(".card_searchbox .btn-searchbox").show();
                console.log(dataLayer.push({'changeSearchbox': 'Bergbahnen'}));
            }
        };

        $(".card_searchbox .btn-success").click(function (e) {
            e.preventDefault();

            if ($(".card_searchbox #searchbox-dropdown").val() == "hotel" || $(".card_searchbox #searchbox-dropdown").val() == "hôtel") {
                dataLayer.push({'Searchbox': 'Hotel'});
                var persondetail = "";
                i = 0;
                while (i < parseInt($("#hotelerw").val())) {
                    persondetail += "A,";
                    i++;
                }
                i = 0;
                while (i < parseInt($("#hotelkin").val())) {
                    persondetail += "12,";
                    i++;
                }
                console.log(persondetail.slice(0, -1));

                const urlParams = new URLSearchParams(window.location.search);
                dataLayer.push({'event': 'formSearchboxHotel'});
                
                var newUrl = "https://www.simplebooking.it/ibe/hotelbooking/search?hid=7607&lang=" + langsh + "&amp;guests=" +
                    persondetail.slice(0, -1) +
                    "&amp;in=" +
                    $("#hoteldate").val().split("-")[0].trim().split(".")[2] + "-" + $("#hoteldate").val().split("-")[0].trim().split(".")[1] + "-" + $("#hoteldate").val().split("-")[0].trim().split(".")[0] +
                    "&amp;out=" +
                    $("#hoteldate").val().split("-")[1].trim().split(".")[2] + "-" + $("#hoteldate").val().split("-")[1].trim().split(".")[1] + "-" + $("#hoteldate").val().split("-")[1].trim().split(".")[0];
                
                if (getCookie("gclid") != "") {
                    newUrl += "&amp;gclid=" + getCookie("gclid") + "&amp;coupon=&amp;utm_source=" + getCookie("utm_source") + "&amp;utm_medium=" + getCookie("utm_medium");
                } else if (getCookie("fbclid") != "") {
                    newUrl += "&amp;fbclid=" + getCookie("fbclid") + "&amp;coupon=&amp;utm_source=" + getCookie("utm_source") + "&amp;utm_medium=" + getCookie("utm_medium");
                } else {
                    newUrl += "&amp;coupon=&amp;utm_source=" + getCookie("utm_source") + "&amp;utm_medium=" + getCookie("utm_medium")
                }

                document.location = (newUrl).replaceAll("amp;", "");
            } else if ($(".card_searchbox #searchbox-dropdown").val() == "ski") {
                dataLayer.push({'Searchbox': 'Ski- und Bergbahntickets kaufen'});
				if (langsh == "en"){
					var url = " https://www.adelboden-lenk.ch/en/Shop/Ticketoverview?area=48";
				}else if(langsh == "fr"){
					var url = "https://www.adelboden-lenk.ch/fr/Shop/Ticketuebersicht?area=48";
				}else{
					var url = "https://www.adelboden-lenk.ch/de/Shop/Ticketuebersicht?area=48";
				}
                //var url = "https://shop.engstligenalp.ch/" + langsh + "/";

                if (getCookie("gclid") != "") {
                    url += "&gclid=" + getCookie("gclid") + "&amp;utm_source=" + getCookie("utm_source") + "&amp;utm_medium=" + getCookie("utm_medium");
                } else if (getCookie("fbclid") != "") {
                    url += "&fbclid=" + getCookie("fbclid") + "&amp;utm_source=" + getCookie("utm_source") + "&amp;utm_medium=" + getCookie("utm_medium");
                } else {
                    url += "&utm_source=" + getCookie("utm_source") + "&amp;utm_medium=" + getCookie("utm_medium");
                }

                document.location = (url).replaceAll("amp;", "");
            } else if ($(".card_searchbox #searchbox-dropdown").val() == "restaurant") {
                //dataLayer.push({'Searchbox': 'Restaurant'});
                if ($("#chooseRestaurant").val() == "raclett") {
                    var url = "https://mytools.aleno.me/reservations/v2.0/reservations.html?k=eyJrIjoid2l2dTVrM2lsNm15cnBiOWlwdzZ4bmViajhycnVkaWRpZ280bGZwODBsbzlhNGlweTEiLCJyIjoiRUx0TUNMeHk3d3F0ZGJLRGoiLCJzIjoiaHR0cHM6Ly9teXRvb2xzLmFsZW5vLm1lLyJ9&skipFirstSteps=true&paxDef=10&paxMin=10";

                    if (getCookie("gclid") != "") {
                        url += "&amp;gclid=" + getCookie("gclid") + "&amp;utm_source=" + getCookie("utm_source") + "&amp;utm_medium=" + getCookie("utm_medium");
                    } else if (getCookie("fbclid") != "") {
                        url += "&amp;fbclid=" + getCookie("fbclid") + "&amp;utm_source=" + getCookie("utm_source") + "&amp;utm_medium=" + getCookie("utm_medium");
                    } else {
                        url += "&amp;utm_source=" + getCookie("utm_source") + "&amp;utm_medium=" + getCookie("utm_medium");
                    }

                    document.location = (url).replaceAll("amp;", "");
                } else if ($("#chooseRestaurant").val() == "fondue") {
                    var url = "https://mytools.aleno.me/reservations/v2.0/reservations.html?k=eyJrIjoid2l2dTVrM2lsNm15cnBiOWlwdzZ4bmViajhycnVkaWRpZ280bGZwODBsbzlhNGlweTEiLCJyIjoiQVJ4THJ0cllHNXEyMkZ6ZzIiLCJzIjoiaHR0cHM6Ly9teXRvb2xzLmFsZW5vLm1lLyJ9&amp;skipFirstSteps=true";

                    if (getCookie("gclid") != "") {
                        url += "&amp;gclid=" + getCookie("gclid") + "&amp;utm_source=" + getCookie("utm_source") + "&amp;utm_medium=" + getCookie("utm_medium");
                    } else if (getCookie("fbclid") != "") {
                        url += "&amp;fbclid=" + getCookie("fbclid") + "&amp;utm_source=" + getCookie("utm_source") + "&amp;utm_medium=" + getCookie("utm_medium");
                    } else {
                        url += "&amp;utm_source=" + getCookie("utm_source") + "&amp;utm_medium=" + getCookie("utm_medium");
                    }

                    document.location = (url).replaceAll("amp;", "");
                }
                if ($("#chooseRestaurant").val() == "fondue") {
                    var url = "https://mytools.aleno.me/reservations/v2.0/reservations.html?k=eyJrIjoid2l2dTVrM2lsNm15cnBiOWlwdzZ4bmViajhycnVkaWRpZ280bGZwODBsbzlhNGlweTEiLCJyIjoiQVJ4THJ0cllHNXEyMkZ6ZzIiLCJzIjoiaHR0cHM6Ly9teXRvb2xzLmFsZW5vLm1lLyJ9&amp;skipFirstSteps=true";

                    if (getCookie("gclid") != "") {
                        url += "&amp;gclid=" + getCookie("gclid") + "&amp;utm_source=" + getCookie("utm_source") + "&amp;utm_medium=" + getCookie("utm_medium");
                    } else if (getCookie("fbclid") != "") {
                        url += "&amp;fbclid=" + getCookie("fbclid") + "&amp;utm_source=" + getCookie("utm_source") + "&amp;utm_medium=" + getCookie("utm_medium");
                    } else {
                        url += "&amp;utm_source=" + getCookie("utm_source") + "&amp;utm_medium=" + getCookie("utm_medium");
                    }

                    document.location = (url).replaceAll("amp;", "");
                }
            } else if ($(".card_searchbox #searchbox-dropdown").val() == "fondures") {
                dataLayer.push({'Searchbox': 'Restaurant Fondue'});
                var url = "https://mytools.aleno.me/reservations/v2.0/reservations.html?k=eyJrIjoid2l2dTVrM2lsNm15cnBiOWlwdzZ4bmViajhycnVkaWRpZ280bGZwODBsbzlhNGlweTEiLCJyIjoiQVJ4THJ0cllHNXEyMkZ6ZzIiLCJzIjoiaHR0cHM6Ly9teXRvb2xzLmFsZW5vLm1lLyJ9&amp;skipFirstSteps=true";

                if (getCookie("gclid") != "") {
                    url += "&amp;gclid=" + getCookie("gclid") + "&amp;utm_source=" + getCookie("utm_source") + "&amp;utm_medium=" + getCookie("utm_medium");
                } else if (getCookie("fbclid") != "") {
                    url += "&amp;fbclid=" + getCookie("fbclid") + "&amp;utm_source=" + getCookie("utm_source") + "&amp;utm_medium=" + getCookie("utm_medium");
                } else {
                    url += "&amp;utm_source=" + getCookie("utm_source") + "&amp;utm_medium=" + getCookie("utm_medium");
                }

                document.location = (url).replaceAll("amp;", "");
            } else if ($(".card_searchbox #searchbox-dropdown").val() == "raclettres") {
                dataLayer.push({'Searchbox': 'Restaurant Raclett'});
                var url = "https://mytools.aleno.me/reservations/v2.0/reservations.html?k=eyJrIjoid2l2dTVrM2lsNm15cnBiOWlwdzZ4bmViajhycnVkaWRpZ280bGZwODBsbzlhNGlweTEiLCJyIjoiRUx0TUNMeHk3d3F0ZGJLRGoiLCJzIjoiaHR0cHM6Ly9teXRvb2xzLmFsZW5vLm1lLyJ9&skipFirstSteps=true&paxDef=10&paxMin=10";

                if (getCookie("gclid") != "") {
                    url += "&amp;gclid=" + getCookie("gclid") + "&amp;utm_source=" + getCookie("utm_source") + "&amp;utm_medium=" + getCookie("utm_medium");
                } else if (getCookie("fbclid") != "") {
                    url += "&amp;fbclid=" + getCookie("fbclid") + "&amp;utm_source=" + getCookie("utm_source") + "&amp;utm_medium=" + getCookie("utm_medium");
                } else {
                    url += "&amp;utm_source=" + getCookie("utm_source") + "&amp;utm_medium=" + getCookie("utm_medium");
                }

                document.location = (url).replaceAll("amp;", "");
            } else if ($(".card_searchbox #searchbox-dropdown").val() == "kaserei") {
                dataLayer.push({'Searchbox': 'Käserei'});
                var url = "https://mytools.aleno.me/reservations/v2.0/reservations.html?k=eyJrIjoid2l2dTVrM2lsNm15cnBiOWlwdzZ4bmViajhycnVkaWRpZ280bGZwODBsbzlhNGlweTEiLCJyIjoiajhaZm9yWnpleWs4OEtnQ3oiLCJzIjoiaHR0cHM6Ly9teXRvb2xzLmFsZW5vLm1lLyJ9&amp;skipFirstSteps=true";

                if (getCookie("gclid") != "") {
                    url += "&amp;gclid=" + getCookie("gclid") + "&amp;utm_source=" + getCookie("utm_source") + "&amp;utm_medium=" + getCookie("utm_medium");
                } else if (getCookie("fbclid") != "") {
                    url += "&amp;fbclid=" + getCookie("fbclid") + "&amp;utm_source=" + getCookie("utm_source") + "&amp;utm_medium=" + getCookie("utm_medium");
                } else {
                    url += "&amp;utm_source=" + getCookie("utm_source") + "&amp;utm_medium=" + getCookie("utm_medium");
                }

                document.location = (url).replaceAll("amp;", "");
            } else if ($(".card_searchbox #searchbox-dropdown").val() == "gutschein" || $(".card_searchbox #searchbox-dropdown").val() == "bon d'achat") {
                dataLayer.push({'Searchbox': 'Gutscheine'});
                var url = "https://shop.e-guma.ch/engstligenalp/" + langsh + "/gutscheine";

                if (getCookie("gclid") != "") {
                    url += "?gclid=" + getCookie("gclid") + "&amp;utm_source=" + getCookie("utm_source") + "&amp;utm_medium=" + getCookie("utm_medium");
                } else if (getCookie("fbclid") != "") {
                    url += "?fbclid=" + getCookie("fbclid") + "&amp;utm_source=" + getCookie("utm_source") + "&amp;utm_medium=" + getCookie("utm_medium");
                } else {
                    url += "?utm_source=" + getCookie("utm_source") + "&amp;utm_medium=" + getCookie("utm_medium");
                }

                document.location = (url).replaceAll("amp;", "");
            } else if ($(".card_searchbox #searchbox-dropdown").val() == "bahn") {
                dataLayer.push({'Searchbox': 'Bergbahn'});
                var persondetail = "";
                i = 0;
                ii = 0;
                while (i < parseInt($("#bahnerw").val())) {
                    persondetail += "&sk%5B" + ii + "%5D%5Bcc%5D=ADULT";
                    i++;
                    ii++;
                }
                i = 0;
                while (i < parseInt($("#bahnkin").val())) {
                    persondetail += "&sk%5B" + ii + "%5D%5Bcc%5D=CHILD";
                    i++;
                    ii++;
                }
                if ($("#chooseFahrt").val() == "ufe") {
                    var url = ("https://shop.engstligenalp.ch/" + langsh + "/forfait-ski/engstligen-bergfahrt-web/?s=" +
                        $("#bahndatum").val().trim().split(".")[2] + "-" + $("#bahndatum").val().trim().split(".")[1] + "-" + $("#bahndatum").val().trim().split(".")[0] +
                        persondetail +
                        "&amp;dp=0");

                        if (getCookie("gclid") != "") {
                            url += "&amp;gclid=" + getCookie("gclid") + "&amp;utm_source=" + getCookie("utm_source") + "&amp;utm_medium=" + getCookie("utm_medium");
                        } else if (getCookie("fbclid") != "") {
                            url += "&amp;fbclid=" + getCookie("fbclid") + "&amp;utm_source=" + getCookie("utm_source") + "&amp;utm_medium=" + getCookie("utm_medium");
                        } else {
                            url += "&amp;utm_source=" + getCookie("utm_source") + "&amp;utm_medium=" + getCookie("utm_medium");
                        }

                    document.location = (url).replaceAll("amp;", "");
                } else if ($("#chooseFahrt").val() == "abe") {
                    var url = ("https://shop.engstligenalp.ch/" + langsh + "/forfait-ski/engstligen-talfahrt-web/?s=" +
                        $("#bahndatum").val().trim().split(".")[2] + "-" + $("#bahndatum").val().trim().split(".")[1] + "-" + $("#bahndatum").val().trim().split(".")[0] +
                        persondetail +
                        "&amp;dp=0");

                        if (getCookie("gclid") != "") {
                            url += "&amp;gclid=" + getCookie("gclid") + "&amp;utm_source=" + getCookie("utm_source") + "&amp;utm_medium=" + getCookie("utm_medium");
                        } else if (getCookie("fbclid") != "") {
                            url += "&amp;fbclid=" + getCookie("fbclid") + "&amp;utm_source=" + getCookie("utm_source") + "&amp;utm_medium=" + getCookie("utm_medium");
                        } else {
                            url += "&amp;utm_source=" + getCookie("utm_source") + "&amp;utm_medium=" + getCookie("utm_medium");
                        }

                    document.location = (url).replaceAll("amp;", "");
                } else if ($("#chooseFahrt").val() == "retour") {
                    var url = ("https://shop.engstligenalp.ch/" + langsh + "/forfait-ski/engstligen-retourfahrt-web/?s=" +
                        $("#bahndatum").val().trim().split(".")[2] + "-" + $("#bahndatum").val().trim().split(".")[1] + "-" + $("#bahndatum").val().trim().split(".")[0] +
                        persondetail +
                        "&amp;dp=0");

                        if (getCookie("gclid") != "") {
                            url += "&amp;gclid=" + getCookie("gclid") + "&amp;utm_source=" + getCookie("utm_source") + "&amp;utm_medium=" + getCookie("utm_medium");
                        } else if (getCookie("fbclid") != "") {
                            url += "&amp;fbclid=" + getCookie("fbclid") + "&amp;utm_source=" + getCookie("utm_source") + "&amp;utm_medium=" + getCookie("utm_medium");
                        } else {
                            url += "&amp;utm_source=" + getCookie("utm_source") + "&amp;utm_medium=" + getCookie("utm_medium");
                        }

                    document.location = (url).replaceAll("amp;", "");
                }
            }
        });
        searchboxHtml();
		var date = new Date();
        jQuery('.card_searchbox #hoteldate').daterangepicker({
            "showWeekNumbers": true,
            "autoApply": true,
            "locale": {
                "format": "DD.MM.YYYY",
                "separator": " - ",
                "applyLabel": "Apply",
                "cancelLabel": langu[langsh].cancelLabel,
                "fromLabel": langu[langsh].fromLabel,
                "toLabel": langu[langsh].toLabel,
                "customRangeLabel": "Custom",
                "weekLabel": "W",
                "daysOfWeek": langu[langsh].daysOfWeek,
                "monthNames": langu[langsh].monthNames,
                "firstDay": 1
            },
            "minDate": new Date(),
			"endDate": new Date(Date.now() + 86400000)
        });

        jQuery('.card_searchbox #bahndatum').daterangepicker({
            "singleDatePicker": true,
            "showWeekNumbers": true,
            "autoApply": true,
            "locale": {
                "format": "DD.MM.YYYY",
                "separator": " - ",
                "applyLabel": "Apply",
                "cancelLabel": langu[langsh].cancelLabel,
                "fromLabel": langu[langsh].fromLabel,
                "toLabel": langu[langsh].toLabel,
                "customRangeLabel": "Custom",
                "weekLabel": "W",
                "daysOfWeek": langu[langsh].daysOfWeek,
                "monthNames": langu[langsh].monthNames,
                "firstDay": 1
            },
            "minDate": new Date(),
			"endDate": new Date(Date.now() + 86400000)
        });
    })
})();