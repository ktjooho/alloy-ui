YUI.add("aui-diagram-node-task",function(e,t){var n=e.Component.create({NAME:"diagram-node",ATTRS:{height:{value:70},type:{value:"task"},width:{value:70}},EXTENDS:e.DiagramNodeState,prototype:{hotPoints:e.DiagramNode.SQUARE_POINTS,renderShapeBoundary:function(){var e=this,t=e.boundary=e.get("graphic").addShape(e.get("shapeBoundary"));return t.translate(8,8),t},_valueShapeBoundary:function(){return{height:55,type:"rect",stroke:{weight:7,color:"transparent",opacity:0},width:55}}}});e.DiagramNodeTask=n},"3.1.0-deprecated.56",{requires:["aui-diagram-node-state"]});
