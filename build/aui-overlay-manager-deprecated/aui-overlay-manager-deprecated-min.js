YUI.add("aui-overlay-manager-deprecated",function(e,t){var n=e.Lang,r=n.isArray,i=n.isBoolean,s=n.isNumber,o=n.isString,u="boundingBox",a="default",f="host",l="OverlayManager",c="group",h="zIndex",p="zIndexBase",d=e.Component.create({NAME:l.toLowerCase(),ATTRS:{zIndexBase:{value:1e3,validator:s,setter:n.toInt}},EXTENDS:e.Base,prototype:{initializer:function(){var e=this;e._overlays=[]},bringToTop:function(e){var t=this,n=t._overlays.sort(t.sortByZIndexDesc),r=n[0];if(r!==e){var i=e.get(h),s=r.get(h);e.set(h,s+1),e.set("focused",!0)}},destructor:function(){var e=this;e._overlays=[]},register:function(t){var n=this,i=n._overlays;if(r(t))e.Array.each(t,function(e){n.register(e)});else{var s=n.get(p),o=n._registered(t);if(!o&&t&&(t instanceof e.Overlay||e.Component&&t instanceof e.Component)){var a=t.get(u);i.push(t);var f=t.get(h)||0,l=i.length+f+s;t.set(h,l),t.on("focusedChange",n._onFocusedChange,n),a.on("mousedown",n._onMouseDown,n)}}return i},remove:function(t){var n=this,r=n._overlays;return r.length?e.Array.removeItem(r,t):null},each:function(t){var n=this,r=n._overlays;e.Array.each(r,t)},showAll:function(){this.each(function(e){e.show()})},hideAll:function(){this.each(function(e){e.hide()})},sortByZIndexDesc:function(t,n){if(!t||!n||!t.hasImpl(e.WidgetStack)||!n.hasImpl(e.WidgetStack))return 0;var r=t.get(h),i=n.get(h);return r>i?-1:r<i?1:0},_registered:function(t){var n=this;return e.Array.indexOf(n._overlays,t)!=-1},_onMouseDown:function(t){var n=this,r=e.Widget.getByNode(t.currentTarget||t.target),i=n._registered(r);r&&i&&n.bringToTop(r)},_onFocusedChange:function(e){var t=this;if(e.newVal){var n=e.currentTarget||e.target,r=t._registered(n);n&&r&&t.bringToTop(n)}}}});e.OverlayManager=d},"3.0.3-deprecated.38",{requires:["overlay","plugin","aui-base-deprecated","aui-overlay-base-deprecated"]});
