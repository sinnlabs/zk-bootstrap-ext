# zk-bootstrap-ext
Integration of twitter bootstrap for ZK CE 7 framework or higher.

Tested ZK CE Framework versions: 7*, 8.0.2.2, 8.6.0.1, 9.0.0, 9.6.0.1

This project is a ZK addon to provide a set of molds for [Twitter bootstrap v3](https://getbootstrap.com/docs/3.3/) or [Twitter bootstrap v5](https://getbootstrap.com/docs/5.1/getting-started/introduction/) and developer can apply this addon to combine ZK with Bootstrap styling seamlessly.</br>

For bootstrap v3 use zk-bootstrap-ext version 0.0.5
If you use bootstrap v5 use zk-bootstrap-ext version 0.1.1



## Component mapping

#### Bootstrap v3.3.7
ZK Component | Bootstrap component | Mold name
------------ | ------------------- | ----------
Button       | Button              | bootstrap
Menupopup    | Dropdown Menu       | bootstrap
Panel        | Panel               | bootstrap
Paging       | Pagination          | bootstrap
Window       | Panel               | bootstrap

#### Bootstrap v5.1.0
ZK Component | Bootstrap component | Mold name
------------ | ------------------- | ----------
Button       | Button              | bootstrap
Menupopup    | Dropdown Menu       | bootstrap
Panel        | card                | bootstrap
Paging       | Pagination          | bootstrap
Window       | card                | bootstrap
Datebox      | Input group         | bootstrap

##### Additional styles
Added bs-text class for bootstrap v5 to decorate text in bootstrap v5 style. This class may be useful for zk labels combines with alerts, example

```xml
	<div class="alert alert-primary">
       <label sclass="bs-text" value="A simple primary alert with"/> <a href="#" class="bs-text alert-link">an example link</a>
       <label sclass="bs-text" value=". Give it a click if you like."/>
	</div>
```

## Usage

### Installation

Download the jar file from the Github, or use the maven instalation

### Button

#### Bootstrap v3.3.7
```xml
<button mold="bootstrap">Default</button>
<button mold="bootstrap" sclass="btn-primary">Primary</button>
<button mold="bootstrap" sclass="btn-success">Success</button>
<button mold="bootstrap" sclass="btn-info">Info</button>
<button mold="bootstrap" sclass="btn-warning">Warning</button>
<button mold="bootstrap" sclass="btn-danger">Danger</button>
```

####Bootstrap v5.1.0
For bootstrp v5 default sclass is ``btn-outline-secondary``

```xml
<button mold="bootstrap">Default</button>
<button mold="bootstrap" sclass="btn-primary">Primary</button>
<button mold="bootstrap" sclass="btn-success">Success</button>
<button mold="bootstrap" sclass="btn-info">Info</button>
<button mold="bootstrap" sclass="btn-warning">Warning</button>
<button mold="bootstrap" sclass="btn-danger">Danger</button>
```

### Input groups

#### Bootstrap v3.3.7
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

#### Bootstrap v5.1.0
```xml
<div class="input-group">
	<span class="input-group-text">@</span>
	<textbox class="form-control" placeholder="Username" />
</div>
```

### Pagination

```xml
<paging mold="bootstrap" totalSize="100" activePage="3"/>
```

### Panels

#### Bootstrap v3.3.7

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

#### Bootstrap v5

```xml
<panel mold="bootstrap" title="Panel Default">
	<panelchildren>Panel content</panelchildren>
</panel>

<panel mold="bootstrap" title="Panel Primary" sclass="text-white bg-primary">
	<panelchildren>Panel content</panelchildren>
</panel>

<panel mold="bootstrap" title="Panel Success" sclass="text-white bg-success">
	<panelchildren>Panel content</panelchildren>
</panel>

<panel mold="bootstrap" title="Panel Info" sclass="text-dark bg-info">
	<panelchildren>Panel content</panelchildren>
</panel>

<panel mold="bootstrap" title="Panel Warning" sclass="text-dark bg-warning">
	<panelchildren>Panel content</panelchildren>
</panel>

<panel mold="bootstrap" title="Panel Danger" sclass="text-white bg-danger">
	<panelchildren>Panel content</panelchildren>
</panel>
```

### Windows

```xml
<window mold="bootstrap" title="BS Window" />
```

## Maven

Add the following block to the dependencies

#### Bootsrap v3.3.7

```xml
<dependency>
	<groupId>org.sinnlabs.ui</groupId>
	<artifactId>zk-bootstrap-ext</artifactId>
	<version>0.0.5</version>
</dependency>
```

#### Bootstrap v5.1.0

```xml
<dependency>
	<groupId>org.sinnlabs.ui</groupId>
	<artifactId>zk-bootstrap-ext</artifactId>
	<version>0.1.1</version>
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

## Menu component
Provides ability to add Drop down menu to Searchmenu component
```xml
<searchmenu id="menu" >
    <menuitem /> 
    <menu label="DropDownLabel">
        <searchmenu mold="bootstrap">
            <menuitem />
            <menuitem />
        </searchmenu>
    </menu>
    <menuitem />
</searchmenu>
```
Example:
![](https://github.com/MaggiDog/zk-bootstrap-ext/blob/master/zkdoc/Menu.png?raw=true)
