/**
 *  {{IS_RIGHT
 *  This program is distributed under LGPL Version 2.1 in the hope that
 *  it will be useful, but WITHOUT ANY WARRANTY.
 *  }}IS_RIGHT
 */
package org.sinnlabs.ui.zk.bootstrap;

import java.util.Objects;

import org.zkoss.zul.Label;

/**
 * @author nsa_a1
 *
 */
public class Bslabel extends Label {

	/**
	 * 
	 */
	private static final long serialVersionUID = -5367553954219631657L;

	private String for_;

	public void setForId(String id) {
		if (!Objects.equals(id, for_)) {
			for_ = id;
			smartUpdate("forId", for_);
		}
	}

	public String getForId() {
		return for_;
	}

	@Override
	protected void renderProperties(org.zkoss.zk.ui.sys.ContentRenderer renderer)
			throws java.io.IOException {
		super.renderProperties(renderer);

		render(renderer, "forId", for_);
	}
}
