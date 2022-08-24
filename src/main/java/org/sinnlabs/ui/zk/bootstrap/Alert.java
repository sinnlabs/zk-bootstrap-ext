/**
 *  {{IS_RIGHT
 *  This program is distributed under LGPL Version 2.1 in the hope that
 *  it will be useful, but WITHOUT ANY WARRANTY.
 *  }}IS_RIGHT
 */
package org.sinnlabs.ui.zk.bootstrap;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;

import org.zkoss.zk.ui.Executions;
import org.zkoss.zk.ui.IdSpace;
import org.zkoss.zk.ui.select.Selectors;
import org.zkoss.zk.ui.select.annotation.Wire;
import org.zkoss.zul.Div;
import org.zkoss.zul.Label;

/**
 * 
 * @author nsa_a1
 * @since 0.1.2
 */
public class Alert extends Div implements IdSpace {

	/**
	 * 
	 */
	private static final long serialVersionUID = -5978453858508548235L;

	@Wire
	Label msg;
	
	String type = "alert";
	
	public Alert() throws IOException {
		//InputStream a = getClass().getClassLoader().getResourceAsStream("alert.zul");
		//1. Render the template
        Executions.createComponentsDirectly(readTextContent(getClass().getResourceAsStream("alert.zul"), 10*1024), null, this, null);

        //2. Wire variables, components and event listeners (optional)
        Selectors.wireVariables(this, this, null);
        Selectors.wireComponents(this, this, false);
        Selectors.wireEventListeners(this, this);
        setType("primary");
	}
	
	private String readTextContent(InputStream in, int chunkSize) throws IOException{
		ByteArrayOutputStream bout = new ByteArrayOutputStream();
		try {
			byte[] chunk = new byte[chunkSize];
			int readLen = -1;
			while( (readLen = in.read(chunk)) != -1){
				bout.write(chunk, 0, readLen);
			}
			return new String(bout.toByteArray(), "UTF-8");
			
		}finally{
			if(in !=null)in.close();
		}
	}
	
	/**
	 * Returns current alert type
	 * @see #setType(String)
	 * @return alert type
	 */
	public String getType() {
		return type;
	}
	
	/**
	 * Sets the alert type
	 * <p> Supported types: primary, secondary, success, danger, warning, info, 
	 * light, dark
	 * <p> Default: primary
	 * @param type type name
	 */
	public void setType(String type) {
		this.type = type;
		updateType();
	}
	
	private void updateType() {
		setZclass("alert alert-" + type);
	}
	
	/**
	 * Returns message text
	 * @return msg text
	 */
	public String getMessage() {
		return msg.getValue();
	}
	
	/**
	 * Sets the alert message
	 * @param message Message text
	 */
	public void setMessage(String message) {
		msg.setValue(message);
	}
}
