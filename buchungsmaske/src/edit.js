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
				label="Bergbahntickets kaufen"
				checked={attributes.bergbhntickets}
				onChange={(val) => setAttributes({ bergbhntickets: val })}
			/>
			<CheckboxControl
				label="Ski- und Bergbahntickets kaufen"
				checked={attributes.skiticket}
				onChange={(val) => setAttributes({ skiticket: val })}
			/>
			<CheckboxControl
				label="Übernachtung buchen"
				checked={attributes.uebernachtungbuchn}
				onChange={(val) => setAttributes({ uebernachtungbuchn: val })}
			/>
			<CheckboxControl
				label="Alpkäsereibesuch buchen"
				checked={attributes.kaesereibesuch}
				onChange={(val) => setAttributes({ kaesereibesuch: val })}
			/>
			<CheckboxControl
				label="Gutscheine bestellen"
				checked={attributes.gutschein}
				onChange={(val) => setAttributes({ gutschein: val })}
			/>
			<CheckboxControl
				label="Fondue-Iglu reservieren"
				checked={attributes.fondures}
				onChange={(val) => setAttributes({ fondures: val })}
			/>
			<CheckboxControl
				label="Raclettehütte reservieren"
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
				label="Fondue-Iglu reservieren"
				checked={attributes.tischres_fondue}
				onChange={(val) => setAttributes({ tischres_fondue: val })}
			/>
			<CheckboxControl
				label="Raclettehütte reservieren"
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
						label: 'Angebot Auswahl auswählen',
						value: ''
					},
					{
						label: 'Bergbahntickets kaufen',
						value: 'bahn'
					},
					{
						label: 'Ski- und Bergbahntickets kaufen',
						value: 'ski'
					},
					{
						label: 'Übernachtung buchen',
						value: 'hotel'
					},
					{
						label: 'Tisch reservieren',
						value: 'restaurant'
					},
					{
						label: 'Fondue-Iglu reservieren',
						value: 'fondures'
					},
					{
						label: 'Raclettehütte reservieren',
						value: 'raclettres'
					},
					{
						label: 'Alpkäsereibesuch buchen',
						value: 'kaserei'
					},
					{
						label: 'Gutscheine bestellen',
						value: 'gutschein'
					}
				]}
			/>
			<SelectControl
				value={attributes.dropdn_restselected}
				onChange={(val) => setAttributes({ dropdn_restselected: val })}
				options={[
					{
						label: 'Wähle Auswahl Tisch reservieren aus',
						value: ''
					},
					{
						label: 'Raclettehütte',
						value: 'raclett'
					},
					{
						label: 'Fondue-Iglu',
						value: 'fondue'
					}
				]}
			/>
		</div>
	);
}
