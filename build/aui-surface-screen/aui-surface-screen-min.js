YUI.add("aui-surface-screen",function(e,t){e.ScreenBase=function(){},e.ScreenBase.NAME="screen",e.ScreenBase._uniqueIdCounter=e.Lang.now(),e.ScreenBase.prototype={activate:function(){e.log("Screen ["+this+"] activate","info")},beforeDeactivate:function(){e.log("Screen ["+this+"] beforeDeactivate","info")},flip:function(t){var n=this,r=[];return e.log("Screen ["+this+"] flip","info"),e.each(t,function(e){r.push(e.show(n.get("id")))}),e.CancellablePromise.all(r)},deactivate:function(){e.log("Screen ["+this+"] deactivate","info")},destructor:function(){e.log("Screen ["+this+"] destructor","info")},getSurfaceContent:function(){e.log("Screen ["+this+"] getSurfaceContent","info")},load:function(){e.log("Screen ["+this+"] getSurfacesContent","info")},toString:function(){return this.get("id")},_setId:function(e){return this.constructor.NAME+"_"+e},_valueId:function(){return String(e.ScreenBase._uniqueIdCounter++)}},e.ScreenBase.ATTRS={id:{setter:"_setId",validator:e.Lang.isString,valueFn:"_valueId",writeOnce:!0},title:{validator:e.Lang.isString}},e.ScreenCacheable=function(){},e.ScreenCacheable.prototype={cache:null,addCache:function(t){this.get("cacheable")?this.cache=t:e.log("Screen ["+this+"] is not cacheable","info")},clearCache:function(){this.cache=null},destructor:function(){this.clearCache()},getCache:function(){return this.cache},_setCacheable:function(e){return e||this.clearCache(),e}},e.ScreenCacheable.ATTRS={cacheable:{setter:"_setCacheable",validator:e.Lang.isBoolean,value:!1}},e.Screen=e.Base.create(e.ScreenBase.NAME,e.Base,[e.ScreenBase,e.ScreenCacheable],{},{})},"3.0.3-deprecated.38",{requires:["base-build"]});
