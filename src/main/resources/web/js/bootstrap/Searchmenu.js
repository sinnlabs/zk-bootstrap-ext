/*

	Copyright (c) 2019 Sinnlabs LTD, All Rights Reserved.

	This program is distributed under LGPL Version 2.1 in the hope that
	it will be useful, but WITHOUT ANY WARRANTY.

	author: nsa_a1
 */

bootstrap.Searchmenu = zk.$extends(zul.menu.Menupopup, {
	_minItemCount : 10,  /* represents minimum items count to show search bar */
	
	_placeHolder : 'Search...',

	$define: {
		minItemCount : function(val) {
			if (val<0)
				val = 0;
			this._minItemCount = val;
		},
		placeHolder : function(val) {
			this._placeholder = val;
		}
	},

	// override some default functions
	_inBSMold: function () {
		return this._mold == 'bootstrap';
	},
	// Replace zclass
	getZclass: function () {
		if (this._inBSMold()) {
			return this._zclass ? this._zclass : '';
		} else
			return this.$super('getZclass', arguments);
	},
	// Replace classes
	$s: function (subclass) {
		if (this._inBSMold()) {
			switch (subclass) {
			case 'separator':
				return '';
			case 'content':
				return 'dropdown-menu';
			}
			return '';
		} else
			return this.$super('$s', arguments);
	},
	// Override open to support bootstrap
	open: function (ref, offset, position, opts) {
		if (this._inBSMold()) {
			this.forcerender();
			jq(this.$n('cave')).css({position: 'relative', display: 'block'});
			this.$super('open', ref, offset, position, opts);
			if (this.$n('filter')) {
				jq(this.$n('filter')).focus();
			}
		} else 
			return this.$super('open', ref, offset, position, opts);
	},
	
	doKeyDown_ : function(evt) {
		if (this.desktop) {
			jq(this.$n('filter')).trigger({type: 'keypress', which: evt.keyCode, keyCode: evt.keyCode});
		}
	},
	
	doKeyUp_: function (evt) {
		if (this.desktop && this.$n('filter')) {
			var value = jq(this.$n('filter')).val().toLowerCase();
			jq('#' + this.uuid + '-cave li:not(:first-child)' ).filter(function() {
			      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
		    });;
		}
	}
})