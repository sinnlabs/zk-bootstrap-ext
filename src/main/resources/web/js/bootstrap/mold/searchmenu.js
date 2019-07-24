/*
	Copyright (c) 2019 Sinnlabs LTD, All Rights Reserved.
	
	This program is distributed under LGPL Version 2.1 in the hope that
	it will be useful, but WITHOUT ANY WARRANTY.
	
	author: nsa_a1
*/

function(out) {
	var uuid = this.uuid;
	
	tags = zk.ie < 11 || zk.gecko ? 'a' : 'button';
	out.push('<div', this.domAttrs_(), '><', tags, ' id="', uuid,
			'-a" tabindex="-1" onclick="return false;" href="javascript:;"',
			' class="z-focus-a"></',
			tags, '><div class="', this.$s('separator') ,'"></div><ul class="', 
			this.$s('content'), '" id="', uuid, '-cave">');
	
	var child = 0;
	for (var w = this.firstChild; w; w = w.nextSibling)
		child = child + 1;
	
	
	//Render searchfilter
	if (child >= this._minItemCount) {
		out.push('<li >', '<div class="form-group">', '<div class="input-group z-searchmenu-input-group" style="margin-top: -6px;">')
		out.push('<input id="', uuid, '-filter" type="text"' ,
				' class="form-control z-searchmenu-form-control z-searchmenu-filter"', 
				' style="background-color:white; border:0; border-radius:0" placeholder="', this._placeHolder, '"/>');

		out.push('<label class="input-group-addon z-searchmenu-input-group-addon" style="width:auto;border:0; border-radius:0">', 
				'<span class="glyphicon glyphicon-search"/>',
		'</label>');
		out.push('</div></div></li>');
	}
	
	for (var w = this.firstChild; w; w = w.nextSibling)
		w.redraw(out);

	out.push('</div></div>');
}