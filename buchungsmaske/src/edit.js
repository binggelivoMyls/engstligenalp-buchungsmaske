/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';
import { CheckboxControl } from '@wordpress/components';
import { SelectControl } from '@wordpress/components';
import { useState } from '@wordpress/element';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */


// Hier werden alle Elemente beschrieben, die im Backend eingestellt werden können und wo das die Daten gespeichert werden

// Nach den Checkboxen sind die Select welche elemente standartmässig angezeigt werden sollen.
export default function Edit({ attributes, setAttributes }) {
	return (
		<div {...useBlockProps()}>
			<h3>
				{__('Searchbar einstellen', 'searchbar')}
			</h3>
			<p>
				{__('Searchbar Dropdowns ein und ausstellen', 'searchbar')}
			</p>
			<CheckboxControl
				label={__('Bergbahntickets kaufen', 'searchbar')}
				checked={attributes.bergbhntickets}
				onChange={(val) => setAttributes({ bergbhntickets: val })}
			/>
			<CheckboxControl
				label={__('Skitickets kaufen', 'searchbar')}
				checked={attributes.skiticket}
				onChange={(val) => setAttributes({ skiticket: val })}
			/>
			<CheckboxControl
				label={__('Ski- und Bergbahntickets kaufen', 'searchbar')}
				checked={attributes.skibergticket}
				onChange={(val) => setAttributes({ skibergticket: val })}
			/>
			<CheckboxControl
				label={__('Übernachtung buchen', 'searchbar')}
				checked={attributes.uebernachtungbuchn}
				onChange={(val) => setAttributes({ uebernachtungbuchn: val })}
			/>
			<CheckboxControl
				label={__('Alpkäsereibesuch buchen', 'searchbar')}
				checked={attributes.kaesereibesuch}
				onChange={(val) => setAttributes({ kaesereibesuch: val })}
			/>
			<CheckboxControl
				label={__('Gutscheine bestellen', 'searchbar')}
				checked={attributes.gutschein}
				onChange={(val) => setAttributes({ gutschein: val })}
			/>
			<CheckboxControl
				label={__('Fondue-Iglu reservieren', 'searchbar')}
				checked={attributes.fondures}
				onChange={(val) => setAttributes({ fondures: val })}
			/>
			<CheckboxControl
				label={__('Raclettehütte reservieren', 'searchbar')}
				checked={attributes.raclettres}
				onChange={(val) => setAttributes({ raclettres: val })}
			/>
			<h3>
				{__('Unterkategorien', 'searchbar')}
			</h3>
			<h4>
				{__('Tisch reservieren', 'searchbar')}
			</h4>
			<CheckboxControl
				label={__('Fondue-Iglu reservieren', 'searchbar')}
				checked={attributes.tischres_fondue}
				onChange={(val) => setAttributes({ tischres_fondue: val })}
			/>
			<CheckboxControl
				label={__('Raclettehütte reservieren', 'searchbar')}
				checked={attributes.tischres_raclett}
				onChange={(val) => setAttributes({ tischres_raclett: val })}
			/>
			<h3>
				{__('Vorauswahl', 'searchbar')}
			</h3>
			<SelectControl
				value={attributes.dropdn_firstselected}
				onChange={(val) => setAttributes({ dropdn_firstselected: val })}
				options={[
					{
						label: __('Angebot Auswahl auswählen', 'searchbar'),
						value: ''
					},
					{
						label: __('Bergbahntickets kaufen', 'searchbar'),
						value: 'bahn'
					},
					{
						label: __('Skitickets kaufen', 'searchbar'),
						value: 'ski'
					},
					{
						label: __('Ski- und Bergbahntickets kaufen', 'searchbar'),
						value: 'skiberg'
					},
					{
						label: __('Übernachtung buchen', 'searchbar'),
						value: 'hotel'
					},
					{
						label: __('Tisch reservieren', 'searchbar'),
						value: 'restaurant'
					},
					{
						label: __('Fondue-Iglu reservieren', 'searchbar'),
						value: 'fondures'
					},
					{
						label: __('Raclettehütte reservieren', 'searchbar'),
						value: 'raclettres'
					},
					{
						label: __('Alpkäsereibesuch buchen', 'searchbar'),
						value: 'kaserei'
					},
					{
						label: __('Gutscheine bestellen', 'searchbar'),
						value: 'gutschein'
					}
				]}
			/>
			<SelectControl
				value={attributes.dropdn_restselected}
				onChange={(val) => setAttributes({ dropdn_restselected: val })}
				options={[
					{
						label: __('Wähle Auswahl Tisch reservieren aus', 'searchbar'),
						value: ''
					},
					{
						label: __('Raclettehütte', 'searchbar'),
						value: 'raclett'
					},
					{
						label: __('Fondue-Iglu', 'searchbar'),
						value: 'fondue'
					}
				]}
			/>
		</div>
	);
}
