/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save( {attributes} ) {
    var bergbhntickets;
    var uebernachtungbuchn;
    var skiticket;
    var tischres;
    var kaesereibesuch;
    var gutschein;
    var fondures;
    var raclettres;
    var tischres_fondue;
    var tischres_raclett;
    if (attributes.bergbhntickets){
        if (attributes.dropdn_firstselected == "bahn"){
            bergbhntickets = <option value="bahn" selected>{'Bergbahntickets kaufen'}</option>;
        }else{
            bergbhntickets = <option value="bahn">{'Bergbahntickets kaufen'}</option>;
        }
    }
    if (attributes.skiticket){
        if (attributes.dropdn_firstselected == "ski"){
            skiticket = <option value="ski" selected>{'Ski- und Bergbahntickets kaufen'}</option>;
        }else{
            skiticket = <option value="ski">{'Ski- und Bergbahntickets kaufen'}</option>;
        }
    }
    if (attributes.uebernachtungbuchn){
        if (attributes.dropdn_firstselected == "hotel"){
            uebernachtungbuchn = <option value="hotel" selected>{'Übernachtung buchen'}</option>;
        }else{
            uebernachtungbuchn = <option value="hotel">{'Übernachtung buchen'}</option>;
        }
    }
    if (attributes.tischres_raclett || attributes.tischres_fondue){
        if (attributes.dropdn_firstselected == "restaurant"){
            tischres = <option value="restaurant" selected>{'Tisch reservieren'}</option>;
        }else{
            tischres = <option value="restaurant">{'Tisch reservieren'}</option>;
        }
    }
    if (attributes.kaesereibesuch){
        if (attributes.dropdn_firstselected == "kaserei"){
            kaesereibesuch = <option value="kaserei" selected>{'Alpkäsereibesuch buchen'}</option>;
        }else{
            kaesereibesuch = <option value="kaserei">{'Alpkäsereibesuch buchen'}</option>;
        }
    }
    if (attributes.gutschein){
        if (attributes.dropdn_firstselected == "gutschein"){
            gutschein = <option value="gutschein" selected>{'Gutscheine bestellen'}</option>;
        }else{
            gutschein = <option value="gutschein">{'Gutscheine bestellen'}</option>;
        }
    }
    if (attributes.fondures){
        if (attributes.dropdn_firstselected == "fondures"){
            fondures = <option value="fondures" selected>{'Fondue-Iglu reservieren'}</option>;
        }else{
            fondures = <option value="fondures">{'Fondue-Iglu reservieren'}</option>;
        }
    }
    if (attributes.raclettres){
        if (attributes.dropdn_firstselected == "raclettres"){
            raclettres = <option value="raclettres" selected>{'Raclettehütte reservieren'}</option>;
        }else{
            raclettres = <option value="raclettres">{'Raclettehütte reservieren'}</option>;
        }
    }
    if (attributes.tischres_raclett){
        if (attributes.dropdn_restselected == "raclett"){
            tischres_fondue = <option value="raclett" selected>{'Raclettehütte'}</option>;
        }else{
            tischres_fondue = <option value="raclett">{'Raclettehütte'}</option>;
        }
    }
    if (attributes.tischres_fondue){
        if (attributes.dropdn_restselected == "fondue"){
            tischres_raclett = <option value="fondue" selected>{'Fondue-Iglu'}</option>;
        }else{
            tischres_raclett = <option value="fondue">{'Fondue-Iglu'}</option>;
        }
    }





	return (
		<section id="searchBox" class="searchBox">
            <div dangerouslySetInnerHTML={{__html: `<style>
                .form-label {
                    color: #f8f9fa !important;
                }

                .displaynone{
                    display: none;
                }

                .btn-searchbox {
                    display: none;
                }
                
                .form-control:focus {
                	color: unset;
                }

                .searchBox input, .searchBox select{
					background-color: unset;
				}
            </style>
            <script type="text/javascript" src="https://cdn.jsdelivr.net/momentjs/latest/moment.min.js"></script>
            <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.min.js"></script>
            <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css" />`}} />
			<div class="triagles_effects ondesktop" style="top:0; z-index: -1;">
                <div class="right_top_blue right_bottom_green aos-init aos-animate" data-aos="flip-right" data-aos-delay="600"></div>
                <div class="left_top_blue aos-init aos-animate" data-aos="flip-right" data-aos-delay="700"></div>
                <div class="left_top_blue aos-init aos-animate" data-aos="flip-right" data-aos-delay="800"></div>
                <div class="right_top_lightblue aos-init aos-animate" data-aos="flip-right" data-aos-delay="900"></div>
                <div class="aos-init aos-animate" data-aos="flip-right"></div>
                <div class="aos-init aos-animate" data-aos="flip-right"></div>
                <div class="aos-init" data-aos="flip-right"></div>
            </div>
            <div class="triagles_effects onmobile" style="top:0">
                <div class="left_top_green right_bottom_blue"></div>
                <div class="left_top_green right_bottom_grey"></div>
                <div class="left_top_green"></div>
                <div class=""></div>
                <div class="left_top_blue right_bottom_grey"></div>
                <div class="left_top_grey"></div>
                <div class=""></div>
                <div class=""></div>
                <div class="left_top_blue"></div>
            </div>
            <div class="max_90_d">
                <div class="row">
                    <div class="col-lg-12 ">
                        <form class="row card card_searchbox">
                            <div class="col-12 ">
                                <h2 class="mb-4 heading text-light">{'Buchen & Reservieren'}</h2>
                            </div>
                            <div class="col-sm-12 col-md-3">
                                <label for="searchbox-dropdown" class="form-label">{'Angebot'}</label>
                                <select id="searchbox-dropdown" class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                    <option disabled selected>{'Angebot auswählen'}</option>
                                    {bergbhntickets}
                                    {skiticket}
                                    {uebernachtungbuchn}
                                    {tischres}
                                    {fondures}
                                    {raclettres}
                                    {kaesereibesuch}
                                    {gutschein}
                                </select>
                            </div>
                            <div class="col-sm-12 col-md-7 row searchbox-changes searchbox-hotel displaynone">
                                <div class="col-md-5"><label for="hoteldate" class="form-label">{'Zeitraum'}</label>
                                    <div class="input-group mb-3" dangerouslySetInnerHTML={{__html: '<input type="text" id="hoteldate" name="range" class="datepicker_range form-control form-control-lg"><i onclick="document.getElementById(\'hoteldate\').focus()" class="bi bi-calendar-date input-group-text"></i>'}} />
                                </div>
                                <div class="col-md-2" dangerouslySetInnerHTML={{__html: '<label for="hotelerw" class="form-label">Erwachsene</label><input id="hotelerw" type="number" class="form-control form-control-lg mb-3" value="2" min="0" max="4" required>'}} />
                                <div class="col-md-2" dangerouslySetInnerHTML={{__html: '<label for="hotelkin" class="form-label">Kinder</label><input id="hotelkin" type="number" class="form-control form-control-lg mb-3" value="0" min="0" max="8" required>'}} />
                            </div>
                            <div class="col-sm-12 col-md-7 row searchbox-changes searchbox-reservieren displaynone">
                                <div class="col-md-6"><label for="chooseRestaurant" class="form-label">{'Restaurant wählen'}</label>
                                    <div class="input-group">
                                        <select class="form-select form-select-lg mb-3" id="chooseRestaurant" required>
                                        {tischres_fondue}
                                        {tischres_raclett}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-7 row searchbox-changes searchbox-ticket displaynone">
                                <div class="col-md-4">
                                    <label for="chooseFahrt" class="form-label">Ticket wählen</label>
                                    <div class="input-group">
                                        <select class="form-select form-select-lg mb-3" id="chooseFahrt" required>
                                            <option value="ufe" selected>Bergfahrt</option>
                                            <option value="abe">Talfahrt</option>
                                            <option value="retour">Retour</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <label for="bahndatum" class="form-label">{'Datum'}</label>
                                    <div class="input-group mb-3" dangerouslySetInnerHTML={{__html: '<input id="bahndatum" type="text" class="datepicker_input form-control form-control-lg " required><i onclick="document.getElementById(\'bahndatum\').focus()" class="bi bi-calendar-date input-group-text"></i></div>'}} />
                                
                                <div class="col-md-2" dangerouslySetInnerHTML={{__html: '<label for="bahnerw" class="form-label">Erwachsene</label><input id="bahnerw" type="number" class="form-control form-control-lg mb-3" value="2" min="0" required>'}} />
                                <div class="col-md-2" dangerouslySetInnerHTML={{__html: `<label for="bahnkin" class="form-label">Kinder</label><input id="bahnkin" type="number" class="form-control form-control-lg mb-3" value="0" min="0" required>`}} />
                                </div>

                            <div class="col-sm-12 col-md-7 row searchbox-changes searchbox-leer displaynone">

                            </div>

                            <div class="col-sm-12 col-md-2 text-end">
                                <button type="button" class="btn btn-success btn-rounded btn-searchbox" style="margin-top: 27px;"></button>
                            </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div dangerouslySetInnerHTML={{__html: `
            <script src="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.min.js"></script><script>
            //document.querySelectorAll("html.skrollr.skrollr-mobile").removeEventListener("touchend", function (a){})
            jQuery(document).ready(function ($) {

                $(".card_searchbox #searchbox-dropdown").change(function () {
                    searchboxHtml();
                })

                function searchboxHtml() {
                    if ($(".card_searchbox #searchbox-dropdown").val() == "hotel") {
                        $(".card_searchbox .searchbox-changes").addClass("displaynone");
                        $(".card_searchbox .searchbox-hotel").removeClass("displaynone");
                        $(".card_searchbox .btn-success").html('Jetzt buchen');
                        $(".card_searchbox .btn-searchbox").show();
                        console.log(dataLayer.push({'changeSearchbox': 'Hotel'}));
                    } else if ($(".card_searchbox #searchbox-dropdown").val() == "ski") {
                        $(".card_searchbox .searchbox-changes").addClass("displaynone");
                        $(".card_searchbox .searchbox-leer").removeClass("displaynone");
                        $(".card_searchbox .btn-success").html('Ticket bestellen');
                        $(".card_searchbox .btn-searchbox").show();
                        console.log(dataLayer.push({'changeSearchbox': 'Ski- und Bergbahntickets kaufen'}));
                    } else if ($(".card_searchbox #searchbox-dropdown").val() == "restaurant") {
                        $(".card_searchbox .searchbox-changes").addClass("displaynone");
                        $(".card_searchbox .searchbox-reservieren").removeClass("displaynone");
                        $(".card_searchbox .btn-success").html('Jetzt reservieren');
                        $(".card_searchbox .btn-searchbox").show();
                        console.log(dataLayer.push({'changeSearchbox': 'Restaurant'}));
                    } else if ($(".card_searchbox #searchbox-dropdown").val() == "fondures") {
                        $(".card_searchbox .searchbox-changes").addClass("displaynone");
                        $(".card_searchbox .searchbox-leer").removeClass("displaynone");
                        $(".card_searchbox .btn-success").html('Jetzt reservieren');
                        $(".card_searchbox .btn-searchbox").show();
                        console.log(dataLayer.push({'changeSearchbox': 'Fondue Reservieren'}));
                    } else if ($(".card_searchbox #searchbox-dropdown").val() == "raclettres") {
                        $(".card_searchbox .searchbox-changes").addClass("displaynone");
                        $(".card_searchbox .searchbox-leer").removeClass("displaynone");
                        $(".card_searchbox .btn-success").html('Jetzt reservieren');
                        $(".card_searchbox .btn-searchbox").show();
                        console.log(dataLayer.push({'changeSearchbox': 'Raclett reservieren'}));
                    } else if ($(".card_searchbox #searchbox-dropdown").val() == "kaserei") {
                        $(".card_searchbox .searchbox-changes").addClass("displaynone");
                        $(".card_searchbox .searchbox-leer").removeClass("displaynone");
                        $(".card_searchbox .btn-success").html('Jetzt buchen');
                        $(".card_searchbox .btn-searchbox").show();
                        console.log(dataLayer.push({'changeSearchbox': 'Käserei'}));
                    } else if ($(".card_searchbox #searchbox-dropdown").val() == "gutschein") {
                        $(".card_searchbox .searchbox-changes").addClass("displaynone");
                        $(".card_searchbox .searchbox-leer").removeClass("displaynone");
                        $(".card_searchbox .btn-success").html('Jetzt bestellen');
                        $(".card_searchbox .btn-searchbox").show();
                        console.log(dataLayer.push({'changeSearchbox': 'Gutscheine'}));
                    } else if ($(".card_searchbox #searchbox-dropdown").val() == "bahn") {
                        $(".card_searchbox .searchbox-changes").addClass("displaynone");
                        $(".card_searchbox .searchbox-ticket").removeClass("displaynone");
                        $(".card_searchbox .btn-success").html('Jetzt lösen');
                        $(".card_searchbox .btn-searchbox").show();
                        console.log(dataLayer.push({'changeSearchbox': 'Bergbahnen'}));
                    }
                };

                $(".card_searchbox .btn-success").click(function (e) {
                    e.preventDefault();
                    if ($(".card_searchbox #searchbox-dropdown").val() == "hotel") {
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
                        window.open(("https://www.simplebooking.it/ibe/hotelbooking/search?hid=7607&amp;lang=de&amp;guests=" +
                            persondetail.slice(0, -1) +
                            "&amp;in=" +
                            $("#hoteldate").val().split("-")[0].trim().split(".")[2] + "-" + $("#hoteldate").val().split("-")[0].trim().split(".")[1] + "-" + $("#hoteldate").val().split("-")[0].trim().split(".")[0] +
                            "&amp;out=" +
                            $("#hoteldate").val().split("-")[1].trim().split(".")[2] + "-" + $("#hoteldate").val().split("-")[1].trim().split(".")[1] + "-" + $("#hoteldate").val().split("-")[1].trim().split(".")[0] +
                            "&amp;coupon=").replaceAll("amp;", ""))
                    } else if ($(".card_searchbox #searchbox-dropdown").val() == "ski") {
                        dataLayer.push({'Searchbox': 'Ski- und Bergbahntickets kaufen'});
                        window.open("https://shop.engstligenalp.ch/de/");
                    } else if ($(".card_searchbox #searchbox-dropdown").val() == "restaurant") {
                        dataLayer.push({'Searchbox': 'Restaurant'});
                        if ($("#chooseRestaurant").val() == "raclett") {
                            window.open("https://mytools.aleno.me/reservations/v2.0/reservations.html?k=eyJrIjoid2l2dTVrM2lsNm15cnBiOWlwdzZ4bmViajhycnVkaWRpZ280bGZwODBsbzlhNGlweTEiLCJyIjoiRUx0TUNMeHk3d3F0ZGJLRGoiLCJzIjoiaHR0cHM6Ly9teXRvb2xzLmFsZW5vLm1lLyJ9")
                        } else if ($("#chooseRestaurant").val() == "fondue") {
                            window.open("https://mytools.aleno.me/reservations/v2.0/reservations.html?k=eyJrIjoid2l2dTVrM2lsNm15cnBiOWlwdzZ4bmViajhycnVkaWRpZ280bGZwODBsbzlhNGlweTEiLCJyIjoiQVJ4THJ0cllHNXEyMkZ6ZzIiLCJzIjoiaHR0cHM6Ly9teXRvb2xzLmFsZW5vLm1lLyJ9")
                        }
                        if ($("#chooseRestaurant").val() == "fondue") {
                            window.open("https://mytools.aleno.me/reservations/v2.0/reservations.html?k=eyJrIjoid2l2dTVrM2lsNm15cnBiOWlwdzZ4bmViajhycnVkaWRpZ280bGZwODBsbzlhNGlweTEiLCJyIjoiQVJ4THJ0cllHNXEyMkZ6ZzIiLCJzIjoiaHR0cHM6Ly9teXRvb2xzLmFsZW5vLm1lLyJ9")
                        }
                    } else if ($(".card_searchbox #searchbox-dropdown").val() == "fondures") {
                        dataLayer.push({'Searchbox': 'Restaurant Fondue'});
                        window.open("https://mytools.aleno.me/reservations/v2.0/reservations.html?k=eyJrIjoid2l2dTVrM2lsNm15cnBiOWlwdzZ4bmViajhycnVkaWRpZ280bGZwODBsbzlhNGlweTEiLCJyIjoiQVJ4THJ0cllHNXEyMkZ6ZzIiLCJzIjoiaHR0cHM6Ly9teXRvb2xzLmFsZW5vLm1lLyJ9")
                    } else if ($(".card_searchbox #searchbox-dropdown").val() == "raclettres") {
                        dataLayer.push({'Searchbox': 'Restaurant Raclett'});
                        window.open("https://mytools.aleno.me/reservations/v2.0/reservations.html?k=eyJrIjoid2l2dTVrM2lsNm15cnBiOWlwdzZ4bmViajhycnVkaWRpZ280bGZwODBsbzlhNGlweTEiLCJyIjoiRUx0TUNMeHk3d3F0ZGJLRGoiLCJzIjoiaHR0cHM6Ly9teXRvb2xzLmFsZW5vLm1lLyJ9")
                    } else if ($(".card_searchbox #searchbox-dropdown").val() == "kaserei") {
                        dataLayer.push({'Searchbox': 'Käserei'});
                        window.open("https://mytools.aleno.me/reservations/v2.0/reservations.html?k=eyJrIjoid2l2dTVrM2lsNm15cnBiOWlwdzZ4bmViajhycnVkaWRpZ280bGZwODBsbzlhNGlweTEiLCJyIjoiajhaZm9yWnpleWs4OEtnQ3oiLCJzIjoiaHR0cHM6Ly9teXRvb2xzLmFsZW5vLm1lLyJ9");
                    } else if ($(".card_searchbox #searchbox-dropdown").val() == "gutschein") {
                        dataLayer.push({'Searchbox': 'Gutscheine'});
                        window.open("https://shop.e-guma.ch/engstligenalp/de/gutscheine");
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
                            window.open(("https://shop.engstligenalp.ch/de/forfait-ski/engstligen-bergfahrt-web/?s=" +
                                $("#bahndatum").val().trim().split(".")[2] + "-" + $("#bahndatum").val().trim().split(".")[1] + "-" + $("#bahndatum").val().trim().split(".")[0] +
                                persondetail +
                                "&amp;dp=0").replaceAll("amp;", ""));
                        } else if ($("#chooseFahrt").val() == "abe") {
                            window.open(("https://shop.engstligenalp.ch/de/forfait-ski/engstligen-talfahrt-web/?s=" +
                                $("#bahndatum").val().trim().split(".")[2] + "-" + $("#bahndatum").val().trim().split(".")[1] + "-" + $("#bahndatum").val().trim().split(".")[0] +
                                persondetail +
                                "&amp;dp=0").replaceAll("amp;", ""));
                        } else if ($("#chooseFahrt").val() == "retour") {
                            window.open(("https://shop.engstligenalp.ch/de/forfait-ski/engstligen-retourfahrt-web/?s=" +
                                $("#bahndatum").val().trim().split(".")[2] + "-" + $("#bahndatum").val().trim().split(".")[1] + "-" + $("#bahndatum").val().trim().split(".")[0] +
                                persondetail +
                                "&amp;dp=0").replaceAll("amp;", ""));
                        }
                    }
                })
                searchboxHtml();
                jQuery('.card_searchbox #hoteldate').daterangepicker({
                    "showWeekNumbers": true,
                    "autoApply": true,
                    "locale": {
                        "format": "DD.MM.YYYY",
                        "separator": " - ",
                        "applyLabel": "Apply",
                        "cancelLabel": "Abbrechen",
                        "fromLabel": "Von",
                        "toLabel": "Bis",
                        "customRangeLabel": "Custom",
                        "weekLabel": "W",
                        "daysOfWeek": [
                            "So",
                            "Mo",
                            "Di",
                            "Mi",
                            "Do",
                            "Fr",
                            "Sa"
                        ],
                        "monthNames": [
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
                        ],
                        "firstDay": 1
                    },
                    "minDate": new Date()
                });

                jQuery('.card_searchbox #bahndatum').daterangepicker({
                    "singleDatePicker": true,
                    "showWeekNumbers": true,
                    "autoApply": true,
                    "locale": {
                        "format": "DD.MM.YYYY",
                        "separator": " - ",
                        "applyLabel": "Apply",
                        "cancelLabel": "Abbrechen",
                        "fromLabel": "Von",
                        "toLabel": "Bis",
                        "customRangeLabel": "Custom",
                        "weekLabel": "W",
                        "daysOfWeek": [
                            "So",
                            "Mo",
                            "Di",
                            "Mi",
                            "Do",
                            "Fr",
                            "Sa"
                        ],
                        "monthNames": [
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
                        ],
                        "firstDay": 1
                    },
                    "minDate": new Date()
                });
            })
        </script>`}} />
		</section>
	);
};
