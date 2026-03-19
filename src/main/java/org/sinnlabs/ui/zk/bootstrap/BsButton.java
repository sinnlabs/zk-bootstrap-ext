/**
 *  {{IS_RIGHT
 *  This program is distributed under LGPL Version 2.1 in the hope that
 *  it will be useful, but WITHOUT ANY WARRANTY.
 *  }}IS_RIGHT
 */
package org.sinnlabs.ui.zk.bootstrap;

import java.io.IOException;

import org.zkoss.lang.Objects;
import org.zkoss.zk.ui.sys.ContentRenderer;
import org.zkoss.zul.Button;

/**
 * @author nsa_a1
 * @since 0.1.3
 */
public class BsButton extends Button {
	
	public BsButton() {
		super();
	}
	
	public BsButton(String label) {
		super(label);
	}
	
	public BsButton(String label, String image) {
		super(label, image);
	}

	/**
	 * 
	 */
	private static final long serialVersionUID = -103134976941580686L;
	
	protected String badge = null;
	
	protected String badgeClass = "";
	
	/**
	 * Gets the button badge text
	 * @return badge text 
	 */
	public String getBadge() {
		return badge;
	}
	
	/**
	 * Sets the button badge
	 * @param val Badge text or null to disable
	 */
	public void setBadge(String val) {
		if (!Objects.equals(badge, val)) {
			badge = val;
			smartUpdate("badge", badge);
		}
	}

	/**
	 * Returns badge class
	 * @return badgeClass value
	 */
	public String getBadgeClass() {
		return badgeClass;
	}
	
	/**
	 * Sets the badge class (eg bd-primary, etc)
	 * @param val Badge class value
	 */
	public void setBadgeClass(String val) {
		if (!Objects.equals(badgeClass, val)) {
			badgeClass = val;
			smartUpdate("badgeClass", badge);
		}
	}
	
	@Override
	public void renderProperties(ContentRenderer renderer) throws IOException {
		super.renderProperties(renderer);
		this.render(renderer, "badge", badge);
		this.render(renderer, "badgeClass", badgeClass);
	}
}
