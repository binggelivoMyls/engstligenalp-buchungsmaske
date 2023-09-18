/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

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
            bergbhntickets = <option value="1" selected>{__('Bergbahntickets kaufen', 'searchbar')}</option>;
        }else{
            bergbhntickets = <option value="1">{__('Bergbahntickets kaufen', 'searchbar')}</option>;
        }
    }
    if (attributes.skiticket){
        if (attributes.dropdn_firstselected == "ski"){
            skiticket = <option value="2" selected>{__('Ski- und Bergbahntickets kaufen', 'searchbar')}</option>;
        }else{
            skiticket = <option value="2">{__('Ski- und Bergbahntickets kaufen', 'searchbar')}</option>;
        }
    }
    if (attributes.uebernachtungbuchn){
        if (attributes.dropdn_firstselected == "hotel"){
            uebernachtungbuchn = <option value="3" selected>{__('Übernachtung buchen', 'searchbar')}</option>;
        }else{
            uebernachtungbuchn = <option value="3">{__('Übernachtung buchen', 'searchbar')}</option>;
        }
    }
    if (attributes.tischres_raclett || attributes.tischres_fondue){
        if (attributes.dropdn_firstselected == "restaurant"){
            tischres = <option value="4" selected>{__('Tisch reservieren', 'searchbar')}</option>;
        }else{
            tischres = <option value="4">{__('Tisch reservieren', 'searchbar')}</option>;
        }
    }
    if (attributes.kaesereibesuch){
        if (attributes.dropdn_firstselected == "kaserei"){
            kaesereibesuch = <option value="5" selected>{__('Alpkäsereibesuch buchen', 'searchbar')}</option>;
        }else{
            kaesereibesuch = <option value="5">{__('Alpkäsereibesuch buchen', 'searchbar')}</option>;
        }
    }
    if (attributes.gutschein){
        if (attributes.dropdn_firstselected == "gutschein"){
            gutschein = <option value="6" selected>{__('Gutscheine bestellen', 'searchbar')}</option>;
        }else{
            gutschein = <option value="6">{__('Gutscheine bestellen', 'searchbar')}</option>;
        }
    }
    if (attributes.fondures){
        if (attributes.dropdn_firstselected == "fondures"){
            fondures = <option value="7" selected>{__('Fondue-Iglu reservieren', 'searchbar')}</option>;
        }else{
            fondures = <option value="7">{__('Fondue-Iglu reservieren', 'searchbar')}</option>;
        }
    }
    if (attributes.raclettres){
        if (attributes.dropdn_firstselected == "raclettres"){
            raclettres = <option value="8" selected>{__('Raclettehütte reservieren', 'searchbar')}</option>;
        }else{
            raclettres = <option value="8">{__('Raclettehütte reservieren', 'searchbar')}</option>;
        }
    }
    if (attributes.tischres_raclett){
        if (attributes.dropdn_restselected == "raclett"){
            tischres_fondue = <option value="raclett" selected>{__('Raclettehütte', 'searchbar')}</option>;
        }else{
            tischres_fondue = <option value="raclett">{__('Raclettehütte', 'searchbar')}</option>;
        }
    }
    if (attributes.tischres_fondue){
        if (attributes.dropdn_restselected == "fondue"){
            tischres_raclett = <option value="fondue" selected>{__('Fondue-Iglu', 'searchbar')}</option>;
        }else{
            tischres_raclett = <option value="fondue">{__('Fondue-Iglu', 'searchbar')}</option>;
        }
    }





	return (
		<section id="searchBox" class="searchBox">
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
                                <h2 class="mb-4 heading text-light">{__('Buchen & Reservieren', 'searchbar')}</h2>
                            </div>
                            <div class="col-sm-12 col-md-3">
                                <label for="searchbox-dropdown" class="form-label">{__('Angebot', 'searchbar')}</label>
                                <select id="searchbox-dropdown" class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                    <option disabled selected>{__('Angebot auswählen', 'searchbar')}</option>
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
                                <div class="col-md-5"><label for="hoteldate" class="form-label">{__('Zeitraum', 'searchbar')}</label>
                                    <div class="input-group mb-3">
                                        <input type="text" id="hoteldate" name="range" className="datepicker_range form-control form-control-lg"/>
                                        <i onclick="document.getElementById(\'hoteldate\').focus()" className="bi bi-calendar-date input-group-text"/>
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <label htmlFor="hotelerw" className="form-label">{__('Erwachsene', 'searchbar')}</label>
                                    <input id="hotelerw" type="number" className="form-control form-control-lg mb-3" value={2} min={0} max={4} required=""/>
                                </div>
                                <div class="col-md-2">
                                    <label htmlFor="hotelkin" className="form-label">{__('Kinder', 'searchbar')}</label>
                                    <input id="hotelkin" type="number" className="form-control form-control-lg mb-3" value={0} min={0} max={8} required=""/>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-7 row searchbox-changes searchbox-reservieren displaynone">
                                <div class="col-md-6"><label for="chooseRestaurant" class="form-label">{__('Restaurant wählen', 'searchbar')}</label>
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
                                    <label for="chooseFahrt" class="form-label">{__('Ticket wählen', 'searchbar')}</label>
                                    <div class="input-group">
                                        <select class="form-select form-select-lg mb-3" id="chooseFahrt" required>
                                            <option value="ufe" selected>{__('Bergfahrt', 'searchbar')}</option>
                                            <option value="abe">{__('Talfahrt', 'searchbar')}</option>
                                            <option value="retour">{__('Retour', 'searchbar')}</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <label for="bahndatum" class="form-label">{__('Datum', 'searchbar')}</label>
                                    <div class="input-group mb-3">
                                        <input id="bahndatum" type="text" className="datepicker_input form-control form-control-lg"/>
                                        <i onclick="document.getElementById(\'bahndatum\').focus()" className="bi bi-calendar-date input-group-text"/>
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <label htmlFor="bahnerw" className="form-label">{__('Erwachsene', 'searchbar')}</label>
                                    <input id="bahnerw" type="number" className="form-control form-control-lg mb-3" value={2} min={0} required=""/>
                                </div>
                                <div class="col-md-2">
                                    <label htmlFor="bahnkin" className="form-label">{__('Kinder', 'searchbar')}</label>
                                    <input id="bahnkin" type="number" className="form-control form-control-lg mb-3" value={0} min={0} required=""/>
                                </div>
                            </div>

                            <div class="col-sm-12 col-md-7 row searchbox-changes searchbox-leer displaynone">

                            </div>

                            <div class="col-sm-12 col-md-2 text-end">
                                <button type="button" class="btn btn-success btn-rounded btn-searchbox" style="margin-top: 27px;"></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
		</section>
	);
};
