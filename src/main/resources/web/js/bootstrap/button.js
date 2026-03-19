
zk.afterLoad('zul.wgt', function () {
	var _button = {},
		_buttonMolds = {};

zk.override(zul.wgt.Button.molds, _buttonMolds, {
	'default' : zul.wgt.Button.molds['default'],
	'trendy' : zul.wgt.Button.molds['trendy'],
	'os' : zul.wgt.Button.molds['os'],
	'bootstrap': zul.wgt.Button.molds['default']
});

zk.override(zul.wgt.Button.prototype, _button, {
	_badge: null,
	_badgeClass: '',
	
	getBadge: function() {
		return this._badge;
	},
	
	setBadge: function(v) {
		this._badge = v;
		if (this.desktop) {
			if (this.$n('badge')) {
				this.$n('badge').innerText = zUtl.encodeXML(this._badge);
			}
		}
	},
	
	getBadgeClass: function() {
		return this._badgeClass;
	},
	
	setBadgeClass: function(v) {
		this._badgeClass = v;
	},
	
	_inBSMold: function () {
		return this._mold == 'bootstrap';
	},
	getSclass: function () {
		if (this._inBSMold()) {
			return this._sclass ? this._sclass : 'btn-outline-secondary';
		} else
			return _button.getSclass.apply(this, arguments);
	},
	getZclass: function () {
		if (this._inBSMold())
			return this._zclass != null ? this._zclass : 'btn';
		return _button.getZclass.apply(this, arguments);
	},
	
	domContent_: function() {
		var content = _button.domContent_.apply(this, arguments);
		var badgeHTML = '';
		if (this._badge) {
			badgeHTML = '<span id="' + this.uuid + '-badge" class="badge ' +
			zUtl.encodeXML(this.getBadgeClass()) + '">' + zUtl.encodeXML(this._badge) + '</span>';
		}
		return content + badgeHTML;
	}
});

});