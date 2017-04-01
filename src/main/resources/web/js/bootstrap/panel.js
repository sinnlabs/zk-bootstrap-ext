zk.afterLoad('zul.wnd', function () {
	var _panel = {},
		_panelMolds = {};

zk.override(zul.wnd.Panel.molds, _panelMolds, {
	'default' : zul.wnd.Panel.molds['default'],
	'bootstrap': zul.wnd.Panel.molds['default']
});

zk.override(zul.wnd.Panel.prototype, _panel, {
	_inBSMold: function () {
		return this._mold == 'bootstrap';
	},
	getSclass: function () {
		if (this._inBSMold()) {
			return this._sclass ? this._sclass : 'panel-default';
		} else
			return _panel.getSclass.apply(this, arguments);
	},
	getZclass: function () {
		if (this._inBSMold())
			return this._zclass != null ? this._zclass : 'panel';
		return _panel.getZclass.apply(this, arguments);
	},
	$s: function (subclass) {
		if (this._inBSMold()) {
			switch (subclass) {
			case 'head':
				subclass = 'heading';
				break;
			case 'header':
				return '';
			}
		}
		return _panel.$s.apply(this, arguments);
	}
});

var _panelchildren = {};

zk.override(zul.wnd.Panelchildren.prototype, _panelchildren, {
	_inBSMold: function () {
		return this.parent && this.parent._inBSMold();
	},
	getZclass: function () {
		if (this._inBSMold())
			return this._zclass != null ? this._zclass : '';
		return _panelchildren.getZclass.apply(this, arguments);
	},
	$s: function (subclass) {
		if (this._inBSMold())
			return '';
		return _panelchildren.$s.apply(this, arguments);
	}
});

});