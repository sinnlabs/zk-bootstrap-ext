zk.afterLoad('zul.db', function () {
	var _datebox = {},
		_dateboxMolds = {};
	
	
	/** Override zk default molds */
		
	zk.override(zul.db.Datebox.molds, _dateboxMolds, {
		'default' : zul.db.Datebox.molds['default'],
		'rounded' : zul.db.Datebox.molds['rounded'],
		'bootstrap': zul.db.Datebox.molds['default']
	});
	
	/**Override ZK Datebox default classes */
	zk.override(zul.db.Datebox.prototype, _datebox, {
		_inBSMold: function () {
			return this._mold == 'bootstrap';
		},
		getSclass: function () {
			if (this._inBSMold()) {
				return this._sclass ? this._sclass : '';
			} else
				return _datebox.getSclass.apply(this, arguments);
		},
		getZclass: function () {
			if (this._inBSMold())
				return this._zclass != null ? this._zclass : 'input-group';
			return _datebox.getZclass.apply(this, arguments);
		},
		$s: function (subclass) {
			if (this._inBSMold()) {
				switch (subclass) {
				case 'input':
					return 'form-control';
				case 'button':
					var cls = 'btn btn-outline-secondary';
					if (this._disabled)
						cls += ' disabled';
					return cls;
				case 'popup':
					return 'z-datebox-popup';
				case 'open':
					return 'z-datebox-open';
				case 'shadow':
					return 'z-datebox-shadow';
				default:
					return _datebox.$s.apply(this, arguments);
				}
			}
			return _datebox.$s.apply(this, arguments);
		}
	});
});