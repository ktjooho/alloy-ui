YUI.add("aui-menu-item",function(e,t){var n=25,r=e.getClassName("disabled"),i=e.getClassName("divider"),s=e.getClassName("menu","content"),o=e.getClassName("menu","item"),u=e.getClassName("menu","item","content"),a=e.getClassName("menu","item","has","shortcut"),f=e.getClassName("menu","item","shortcut"),l=e.getClassName("menu","item","submenu"),c=e.getClassName("menu","item","submenu","arrow"),h=e.getClassName("menu","item","submenu","open"),p="submenuItemSelected",d='<li class="'+o+' clearfix" tabindex="1">'+'<div class="'+u+'"></div></li>',v='<div class="'+f+'"></div>',m='<div class="'+l+'"></div>',g='<div class="'+c+'">'+'<span class="glyphicon glyphicon-play"></span><span class="caret"></span></div>';e.MenuItem=e.Base.create("menu-item",e.Base,[e.WidgetShortcut],{initializer:function(){this._eventHandles=[this.after({contentChange:this._afterContentChange,disabledChange:this._afterDisabledChange,submenuChange:this._afterSubmenuChange}),e.after(this._afterUISetShortcut,this,"_uiSetShortcut")],this._render(),this._bindSubmenu()},destructor:function(){(new e.EventHandle(this._eventHandles)).detach(),this._submenuEvent&&this._submenuEvent.detach(),this.get("node").remove()},alignSubmenu:function(){var t=this.get("node"),r=t.get("region"),i=[e.WidgetPositionAlign.TL,e.WidgetPositionAlign.TR],s=this.get("submenu"),o=e.DOM.viewportRegion();s&&(r.right+n>=o.right&&(i=[e.WidgetPositionAlign.TR,e.WidgetPositionAlign.TL]),s.set("align",{node:t,points:i}))},hideSubmenu:function(){var e=this.get("submenu");e&&(e.set("open",!1),this.get("node").removeClass(h))},isSelectable:function(){return!this.get("disabled")&&!this.get("divider")&&!this.get("submenu")},isSubmenuOpen:function(){var e=this.get("submenu");return e?e.get("open"):!1},showSubmenu:function(e,t){var n=this.get("submenu");n&&!this.get("disabled")&&!this.isSubmenuOpen()&&(this._renderSubmenu(),n.set("open",!0),this.get("node").addClass(h),e&&(this.alignSubmenu(),n.set("zIndex",t)))},_afterContentChange:function(){this._uiSetContent(this.get("content"))},_afterDisabledChange:function(){this._uiSetDisabled(this.get("disabled"))},_afterSubmenuChange:function(){var e=this.get("node"),t=this.get("submenu"),n=e.one("."+l);n&&n.empty(),t||e.removeClass(h),e.hasClass(h)&&(this._renderSubmenu(),t.set("open",!0)),this._renderSubmenuArrow(),this._bindSubmenu()},_afterSubmenuItemSelected:function(e){this.fire(p,{item:e.item})},_afterUISetShortcut:function(t){var n=this.get("node"),r=n.one("."+f);this.get("node").toggleClass(a,t),t?(r||(r=e.Node.create(v),this.get("node").prepend(r)),r.set("text",t.text)):r&&r.remove()},_bindSubmenu:function(){var t=this.get("submenu");this._submenuEvent&&this._submenuEvent.detach(),t&&(this._submenuEvent=t.after("itemSelected",e.bind(this._afterSubmenuItemSelected,this)))},_render:function(){var e=this.get("node");this._renderSubmenuArrow(),this._uiSetContent(this.get("content")),this._uiSetDisabled(this.get("disabled")),this._uiSetDivider(this.get("divider")),e.setData("menu-item",this),e.setAttribute("role","presentation")},_renderSubmenu:function(){var t=this.get("node"),n=this.get("submenu"),r=t.one("."+l);if(!n)return;r||(r=e.Node.create(m),this.get("node").append(r)),n.render(r)},_renderSubmenuArrow:function(){var t=this.get("node"),n=t.one("."+c);this.get("submenu")?n||this.get("node").append(e.Node.create(g)):n&&n.remove()},_setSubmenu:function(t){var n=this.get("node").one("."+l+" > ."+s);if(!t||e.instanceOf(t,e.Menu))return;return n&&(t.contentBox=n),t=new e.Menu(e.merge({constrain:!0},t)),t},_uiSetContent:function(e){var t=this.get("node").one("."+u);t&&(t.setHTML(e),t.setAttribute("role","menuitem"))},_uiSetDisabled:function(e){this.get("node").toggleClass(r,e)},_uiSetDivider:function(e){this.get("node").toggleClass(i,e)}},{ATTRS:{content:{validator:e.Lang.isString,value:""},disabled:{validator:e.Lang.isBoolean,value:!1},divider:{validator:e.Lang.isBoolean,value:!1,writeOnce:"initOnly"},node:{validator:e.Lang.isNode,valueFn:function(){return e.Node.create(d)},writeOnce:"initOnly"},submenu:{lazyAdd:!1,setter:"_setSubmenu",validator:function(t){return t===!1||e.Lang.isObject(t)},value:!1}},createFromNode:function(t){var n,s;return t.hasClass(i)?n={divider:!0}:(s=t.one("."+u),n={content:s?s.getHTML():"",disabled:t.hasClass(r),submenu:t.one("."+l)?{}:!1}),n.node=t,new e.MenuItem(n)}})},"3.1.0-deprecated.56",{requires:["base-build","node-base","aui-classnamemanager","aui-node","aui-widget-shortcut"]});
