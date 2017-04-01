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