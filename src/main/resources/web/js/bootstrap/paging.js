zk.afterLoad('zul.mesh', function () {
	var _paging = {},
	_pagingMolds = {};

zk.override(zul.mesh.Paging.molds, _pagingMolds, {
	'default' : zul.mesh.Paging.molds['default'],
	'os' : zul.mesh.Paging.molds['os'],
	'bootstrap': function (out) {
		out.push('<div', this.domAttrs_(), '>', this._innerTags(), '</div>');
	}
});
		

zk.override(zul.mesh.Paging.prototype, _paging, {
	_inBSMold: function () {
		return this._mold == 'bootstrap';
	},
	getZclass: function () {
		if (this._inBSMold()) {
			return this._zclass ? this._zclass : '';
		} else
			return _paging.getZclass.apply(this, arguments);
	},
	bind_: function () {
		_paging.bind_.apply(this, arguments);
		if (this._inBSMold())
			jq(this.$n().firstChild).addClass('pagination ' + this.getSclass());
	},
	appendAnchor: function (out, label, val, seld) {
		if (this._inBSMold()) {
			var cls = 'page-item';
			
			if (seld)
				cls += ' ' + this.$s('selected');
			
			out.push('<li class="', cls,'"><a class="page-link" href="javascript:;" onclick="zul.mesh.Paging.go(this,', val,
					')">', label, '</a></li>');
		} else {
			return _paging.appendAnchor.apply(this, arguments);
		}
	},
	$s: function (subclass) {
		if (this._inBSMold()) {
			if (subclass == 'selected')
				return 'active';
		}
		return _paging.$s.apply(this, arguments);
	},
	_updatePageNum: function () { //FIX ZK Framework not update OS mold on totalSize changed
		_paging._updatePageNum.apply(this, arguments);
		console.log('PAGENUM Updated');
		if (this._inBSMold()) // Update inner HTML Manually
			if (this.desktop) this.$n().innerHTML = this._innerTags();
	}
});
});