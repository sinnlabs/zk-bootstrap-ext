/**
 * 
 */

zk.afterLoad('zul.wnd', function () {
	var _window = {},
	_windowMolds = {};
	
	
	var render = function renderBootstrap(out, skipper) {
		var uuid = this.uuid,
		title = this.getTitle(),
		caption = this.caption,
		contentStyle = this.getContentStyle(),
		contentSclass = this.getContentSclass(),
		tabi = this._tabindex;

		// Render main panel
		out.push('<div', this.domAttrs_({tabindex: 1}), '>');
		
		if (title || caption) {
			out.push('<div id="', uuid, '-cap" class="panel-deading">');
			if (caption) {
				caption.redraw(out);
			} else{
				var icon = this.$s('icon');
				if (this._closable) {
					out.push('<div id="', uuid , '-close" class="', icon, ' ', this.$s('close'), '"');
					if (tabi != undefined) out.push(' tabindex="', tabi, '"');
					out.push(' title="', msgzul.PANEL_CLOSE, '"><i class="', this.getClosableIconClass_(), '"></i></div>');
				}
				if (this._maximizable) {
					var maxd = this._maximized;
					out.push('<div id="', uuid , '-max" class="', icon, ' ',
							this.$s('maximize'));
					if (maxd)
						out.push(' ', this.$s('maximized'));
					var maxIcon = maxd ? this.getMaximizedIconClass_() : this.getMaximizableIconClass_();
					if (tabi != undefined) out.push('" tabindex="', tabi);
					out.push('" title="', msgzul.PANEL_MAXIMIZE, '"><i class="', maxIcon, '"></i></div>');
				}
				if (this._minimizable) {
					out.push('<div id="', uuid , '-min" class="', icon, ' ', this.$s('minimize'), '"');
					if (tabi != undefined) out.push(' tabindex="', tabi, '"');
					out.push(' title="', msgzul.PANEL_MINIMIZE, '"><i class="', this.getMinimizableIconClass_(), '"></i></div>');
				}
				out.push(zUtl.encodeXML(title));
			}
			out.push('</div>');
		}
		
		// render content
		out.push('<div id="', uuid, '-cave" class="card-body ');
		
		if (contentSclass)
			out.push(contentSclass, ' ');
		out.push('" ');
		
		if (contentStyle)
			out.push(' style="', contentStyle, '"');
		out.push('>');

		if (!skipper)
			for (var w = this.firstChild; w; w = w.nextSibling)
				if (w != caption)
					w.redraw(out);
		out.push('</div></div>');
		
	};
	
	
	zk.override(zul.wnd.Window.molds, _windowMolds, {
		'bootstrap': zul.wnd.Window.molds['default']
	});
	
	zk.override(zul.wnd.Window.prototype, _window, {
		_inBSMold: function () {
			return this._mold == 'bootstrap';
		},
		getSclass: function () {
			if (this._inBSMold()) {
				return this._sclass ? this._sclass : '';
			} else
				return _window.getSclass.apply(this, arguments);
		},
		$s : function (zsub) {
			if (this._inBSMold()) {
				if (zsub == "header")
					return "card-header";
				else if (zsub == "content")
					return "card-body";
				else
					return _window.$s.apply(this, arguments);
			} else
				return _window.$s.apply(this, arguments);
		},
		domClass_ : function(no) {
			if (this._inBSMold()) {
				var cls = "card";
				cls += ' ' + this.getSclass();
				cls += ' ' + this.$s(this._mode);
				return cls;
			} else {
				return _window.domClass_.apply(this, arguments);
			}
		}
	});
	
});