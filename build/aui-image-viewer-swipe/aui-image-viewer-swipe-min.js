YUI.add("aui-image-viewer-swipe",function(e,t){function n(){}n.prototype={WIDGET_INDEX_ATTRIBUTE:"currentIndex",WIDGET_ITEM_SELECTOR:".image-viewer-base-image-container"},n.ATTRS={swipe:{getter:function(t){return e.merge(t,{boundingBox:this.get("contentBox").one(".image-viewer-base-image-list"),contentBox:this.get("contentBox").one(".image-viewer-base-image-list-inner")})}}},e.Base.mix(e.ImageViewerBase,[e.WidgetSwipe,n])},"3.1.0-deprecated.43",{requires:["event-resize","aui-image-viewer-base","aui-widget-swipe"]});
