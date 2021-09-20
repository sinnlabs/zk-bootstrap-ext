zk.afterLoad('zul.tab', function () {
	var _tabs = {},
		_tab = {},
		_tabboxMolds = {},
		_tabbox = {},
		_tabpanel = {};
	
	
	/** Override zk default molds */
	zk.override(zul.tab.Tabbox.molds, _tabboxMolds, {
		'default' : zul.tab.Tabbox.molds['default'],
		'accordion' : zul.tab.Tabbox.molds['accordion'],
		'bootstrap': zul.tab.Tabbox.molds['default']
	});
	
	
	
	/**Override ZK Tabbox default classes */
	zk.override(zul.tab.Tabbox.prototype, _tabbox, {
		bind_: function (desktop, skipper, after) {
			this.$supers(zul.tab.Tabbox, 'bind_', arguments);
			//For some reason tab._sel does not called with attribute true, when component render first time
			//Set the selected tab after component mount
			zk.afterMount(this.proxy(function () {
				var tabs = this.tabs,
					seltab = this._selTab;
				if (seltab && tabs) {
					// Call _sel manually
					seltab._sel(true, false);
				}
			}));
		},
		
		_inBSMold: function () {
			return this._mold == 'bootstrap';
		},
		
		$s: function (subclass) {
			if (this._inBSMold()) {
				switch (subclass) {
				case 'top':
					return 'z-bs-tabbox-top';
				default:
					return _tabbox.$s.apply(this, arguments);
				}
			}
			return _tabbox.$s.apply(this, arguments);
		}
		
	});
	
	zk.override(zul.tab.Tabpanel.prototype, _tabpanel, {
		_inBSMold: function () {
			// We check mold for tabbox only
			return this.getTabbox()._mold == 'bootstrap';
		},
		getSclass: function () {
			if (this._inBSMold()) {
				return this._sclass ? this._sclass : 'z-bs-tabpanel';
			} else
				return _tabpanel.getSclass.apply(this, arguments);
		}
	});
	
	zk.override(zul.tab.Tabs.prototype, _tabs, {
		_inBSMold: function () {
			// We check mold for tabbox only
			return this.getTabbox()._mold == 'bootstrap';
		},
		getSclass: function () {
			if (this._inBSMold()) {
				return this._sclass ? this._sclass : '';
			} else
				return _tabs.getSclass.apply(this, arguments);
		},
		getZclass: function () {
			//if (this._inBSMold())
			//	return this._zclass != null ? this._zclass : 'z-tabs';
			return _tabs.getZclass.apply(this, arguments);
		},
		$s: function (subclass) {
			if (this._inBSMold()) {
				var tabbox = this.getTabbox();
				var _taborient = '';
				switch (subclass) {
				case 'content':
					if (tabbox._orient) {
						switch(tabbox._orient) {
						case 'left':
							_taborient = 'left-tabs';
							break;
						case 'right':
							_taborient = 'right-tabs';
							break;
						}
					}
						
					return 'z-tabs-content nav nav-tabs ' + _taborient;
				default:
					return _tabs.$s.apply(this, arguments);
				}
			}
			return _tabs.$s.apply(this, arguments);
		}
	});
	
	zk.override(zul.tab.Tab.prototype, _tab, {
		_inBSMold: function () {
			if (this.getTabbox())
				return this.getTabbox()._mold == 'bootstrap';
			else
				return false;
		},
		getSclass: function () {
			if (this._inBSMold()) {
				return this._sclass ? this._sclass : '';
			} else
				return _tab.getSclass.apply(this, arguments);
		},
		getZclass: function () {
			if (this._inBSMold())
				return this._zclass != null ? this._zclass : 'nav-item';
			return _tab.getZclass.apply(this, arguments);
		},
		$s: function (subclass) {
			if (this._inBSMold()) {
				switch (subclass) {
				case 'content':
					return 'nav-link z-tab-a';
				case 'selected':
					return '';
				case 'text':
					return 'bs-text';
				case 'active':
					return 'active';
				default:
					return _tab.$s.apply(this, arguments);
				}
			}
			return _tab.$s.apply(this, arguments);
		},
		_sel: function (toSel, notify) {
			if (!this.desktop) return;
			if (this._inBSMold()) {
				var tabbox = this.getTabbox();
				if (toSel) {
					jq(this.$n('cave')).addClass('active');
					// _sel with argument false never called. Remove selected class from old tab manually
					if (tabbox._selTab && tabbox._selTab != this)
						jq(tabbox._selTab.$n('cave')).removeClass('active'); 
				}
				else {
					jq(this.$n('cave')).removeClass('active');
				}
			}
			// Call default behaivor
			_tab._sel.apply(this, arguments);
		}
	});
	
}); //afterLoad