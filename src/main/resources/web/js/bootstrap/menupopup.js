zk.afterLoad('zul.menu', function () {
	var _menupopup = {}
		_menupopupMolds = {};

zk.override(zul.menu.Menupopup.molds, _menupopupMolds, {
	'default' : zul.menu.Menupopup.molds['default'],
	'bootstrap': zul.menu.Menupopup.molds['default']
});
	
zk.override(zul.menu.Menupopup.prototype, _menupopup, {
	_inBSMold: function () {
		return this._mold == 'bootstrap';
	},
	getZclass: function () {
		if (this._inBSMold()) {
			return this._zclass ? this._zclass : '';
		} else
			return _menupopup.getZclass.apply(this, arguments);
	},
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
			return _menupopup.$s.apply(this, arguments);
	},
	open: function () {
		if (this._inBSMold()) {
			this.forcerender();
			jq(this.$n('cave')).css({position: 'relative', display: 'block'});
			_menupopup.open.apply(this, arguments);
		} else 
			return _menupopup.open.apply(this, arguments);
	}
});

var _menuseparator = {};

zk.override(zul.menu.Menuseparator.prototype, _menuseparator, {
	_inBSMold: function () {
		return this.parent && this.parent._inBSMold && this.parent._inBSMold();
	},
	getZclass: function () {
		if (this._inBSMold())
			return this._zclass != null ? this._zclass : 'dropdown-divider';
		return _menuseparator.getZclass.apply(this, arguments);
	}
});

var _menuitem= {};

zk.override(zul.menu.Menuitem.prototype, _menuitem, {
	_inBSMold: function () {
		return this.parent && this.parent._inBSMold && this.parent._inBSMold();
	},
	getZclass: function () {
		if (this._inBSMold())
			return this._zclass != null ? this._zclass : 'dropdown';
		return _menuitem.getZclass.apply(this, arguments);
	},
	$s: function (subclass) {
		if (this._inBSMold()) {
			switch (subclass) {
			case 'content':
				return 'dropdown-item';
			}
			return '';
		} else
			return _menuitem.$s.apply(this, arguments);
	}
});

});