

bootstrap.Bslabel = zk.$extends(zul.wgt.Label, {
	_forId : '',
	
	$define: {
		forId: function (val) {
			if(this.desktop) {
				var n = this.$n();
				if (n) {
					var wgt = zk.$(jq('$'+_forId));
					if (wgt) {
						n.setAttribute("for") = wgt.uuid;
					}
				}
			}
		}
	}
});