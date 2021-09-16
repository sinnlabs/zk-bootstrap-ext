
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
	}
});

});