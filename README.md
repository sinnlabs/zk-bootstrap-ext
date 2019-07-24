# zk-bootstrap-ext
Integration of twitter bootstrap for ZK CE 7 framework

This project is a ZK addon to provide a set of molds for [Twitter bootstrap v3](http://getbootstrap.com/) and developer can apply this addon to combine ZK with Bootstrap styling seamlessly.</br>



## Component mapping

ZK Component | Bootstrap component | Mold name
------------ | ------------------- | ----------
Button       | Button              | bootstrap
Menupopup    | Dropdown Menu       | bootstrap
Panel        | Panel               | bootstrap
Paging       | Pagination          | bootstrap
Window       | Panel               | bootstrap

## Usage

### Installation

Download the jar file from the Github, or use the maven instalation

### Button
```xml
<button mold="bootstrap">Default</button>
<button mold="bootstrap" sclass="btn-primary">Primary</button>
<button mold="bootstrap" sclass="btn-success">Success</button>
<button mold="bootstrap" sclass="btn-info">Info</button>
<button mold="bootstrap" sclass="btn-warning">Warning</button>
<button mold="bootstrap" sclass="btn-danger">Danger</button>
```

### Input groups

```xml
<div class="input-group">
	<span class="input-group-addon">@</span>
	<textbox class="form-control" placeholder="Username" />
</div>

<div class="input-group">
	<textbox class="form-control" />
	<span class="input-group-addon">.00</span>
</div>

<div class="input-group">
	<span class="input-group-addon">$</span>
	<textbox class="form-control" />
	<span class="input-group-addon">.00</span>
</div>
```

### Pagination

```xml
<paging mold="bootstrap" totalSize="100" activePage="3"/>
```

### Panels

```xml
<panel mold="bootstrap" title="Panel Default">
	<panelchildren>Panel content</panelchildren>
</panel>

<panel mold="bootstrap" title="Panel Primary" sclass="panel-primary">
	<panelchildren>Panel content</panelchildren>
</panel>

<panel mold="bootstrap" title="Panel Success" sclass="panel-success">
	<panelchildren>Panel content</panelchildren>
</panel>

<panel mold="bootstrap" title="Panel Info" sclass="panel-info">
	<panelchildren>Panel content</panelchildren>
</panel>

<panel mold="bootstrap" title="Panel Warning" sclass="panel-warning">
	<panelchildren>Panel content</panelchildren>
</panel>

<panel mold="bootstrap" title="Panel Danger" sclass="panel-danger">
	<panelchildren>Panel content</panelchildren>
</panel>
```

### Windows

```xml
<window mold="bootstrap" title="BS Window" />
```

## Maven

Add the following block to the dependencies

```xml
<dependency>
	<groupId>org.sinnlabs.ui</groupId>
	<artifactId>zk-bootstrap-ext</artifactId>
	<version>0.0.4</version>
</dependency>
```

## Searchmenu component

Bootstrap extension provides filtered bootstrap popup menu

```xml
<searchmenu id="menu" placeHolder="Search..." minCountItems="10" ><menuitem /> <menuitem /></searchmenu>
```
#### Properties
minCountItems - Minimum count of items to display filter. Default 10
placeHolder - Search bar placeholder. Default: Search...

Example:
![alt search menu example](https://github.com/sinnlabs/zk-bootstrap-ext/blob/master/zkdoc/Searchmenu.PNG?raw=true)
