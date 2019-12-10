/**
 * @license
 * Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-ajax/iron-ajax.js';
import '@polymer/paper-dialog/paper-dialog.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/paper-progress/paper-progress.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';
import './style-element.js';

class specificationAdd extends PolymerElement {
	static get template() {
		return html`
			<style include="style-element">
			</style>
		<paper-dialog class="dialog" id="specificationAddModal" modal>
			<app-toolbar>
				<div main-title>Add Specification</div>
			</app-toolbar>
			<paper-progress
					indeterminate
					class="slow red"
					disabled="{{!loading}}">
			</paper-progress>
				<paper-input
					label="Name"
					value="{{specificationName}}">
				</paper-input>
				<paper-input
					label="Description"
					value="{{specificationDescription}}">
				</paper-input>
				<div class="buttons">
					<paper-button
							raised
							class="submit-button"
							on-tap="_add">
						Add
					</paper-button>
					<paper-button
							class="cancel-button"
							on-tap="_cancel">
						Cancel
					</paper-button>
				</div>
		</paper-dialog>
		<iron-ajax
				id="specificationAddAjax"
				content-type="application/json"
				loading="{{loading}}"
				on-response="_response"
				on-error="_error">
		</iron-ajax>
		`;
	}

	static get properties() {
		return {
			loading: {
				type: Boolean,
				value: false
			},
			specificationName: {
				type: String
			},
			specificationDescription: {
				type: String
			},
			specificationType: {
				type: String
			},
			specificationStatus: {
				type: String
			},
			specificationType: {
				type: String
			},
			specificationChars: {
				type: Array
			}
		}
	}

	ready() {
		super.ready()
	}

	_add() {
		var ajax = this.$.specificationAddAjax;
		ajax.method = "POST";
		ajax.url = "/usageManagement/v4/usageSpecification";
		var spec = new Object();
		spec.name = this.specificationName;
		spec.description = this.specificationDescription;
		spec['@type'] = this.specificationType;
		ajax.body = spec;
		ajax.generateRequest();
	}

	_cancel() {
		this.$.specificationAddModal.close();
		this.specificationName = null;
		this.specificationDescription = null;
		this.specificationType = null;
		this.specificationStatus = null;
		this.specificationChars = [];
	}

	_response() {
		this.$.specificationAddModal.close();
		this.specificationName = null;
		this.specificationDescription = null;
		this.specificationType = null;
		this.specificationStatus = null;
		this.specificationChars = [];
		document.body.querySelector('usekeeper-shell').shadowRoot.getElementById('specificationList').shadowRoot.getElementById('specificationGrid').clearCache();
	}
}

window.customElements.define('usekeeper-spec-add', specificationAdd);
