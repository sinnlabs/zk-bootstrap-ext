
function (out) {
	var forId = this._forId;
	var attrs = '';
	if (forId) {
		var wgt = zk.Widget.$(jq('$' + forId));
		if (wgt)
			attrs = ' for="' + wgt.uuid + '" ';
	}
	out.push('<label ', this.domAttrs_(), attrs, '>', this.getEncodedText(), '</label>');
	
}