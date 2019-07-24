/**
 *  {{IS_RIGHT
 *  This program is distributed under LGPL Version 2.1 in the hope that
 *  it will be useful, but WITHOUT ANY WARRANTY.
 *  }}IS_RIGHT
 */
package org.sinnlabs.ui.zk.bootstrap;

import java.util.Objects;

import org.zkoss.zk.ui.Component;
import org.zkoss.zk.ui.UiException;
import org.zkoss.zul.Menu;
import org.zkoss.zul.Menuitem;
import org.zkoss.zul.Menupopup;
import org.zkoss.zul.Menuseparator;
import org.zkoss.zul.Textbox;

/**
 * Represents popup menu with filtering
 * @author nsa_a1
 * @since 0.0.3
 */
public class Searchmenu extends Menupopup {

	/**
	 * 
	 */
	private static final long serialVersionUID = -6834729886288546928L;
	
	/**
	 * Minimum count of items to display filter
	 */
	protected int minItemCount_ = 10;
	
	protected String placeHolder_ = "Search...";
	
	public Searchmenu() {
		super();
	}
	
	/**
	 * Minimum count of items to display filter
	 * <strong>Default:</strong> 10
	 * @return
	 */
	public int getMinItemCount() {
		return minItemCount_;
	}
	
	/**
	 * Sets minium item count to display filter
	 * @param count
	 */
	public void setMinItemCount(int count) {
		if (minItemCount_ != count) {
			minItemCount_ = count;
			smartUpdate("minItemCount", minItemCount_);
		}
	}
	
	/**
	 * Returns search bar place holder text
	 * <strong>Default</strong> Search...
	 * @return
	 */
	public String getPlaceHolder() {
		return placeHolder_;
	}
	
	/**
	 * Sets search bar placeholder
	 * @param val placeholder text
	 */
	public void setPlaceHolder(String val) {
		if (!Objects.equals(val, placeHolder_)) {
			placeHolder_ = val;
			smartUpdate("placeHolder", placeHolder_);
		}
	}
	
	@Override
	protected void renderProperties(org.zkoss.zk.ui.sys.ContentRenderer renderer)
			throws java.io.IOException {
		super.renderProperties(renderer);

		render(renderer, "minItemCount", minItemCount_);
		render(renderer, "placeHolder", placeHolder_);
	}

}
