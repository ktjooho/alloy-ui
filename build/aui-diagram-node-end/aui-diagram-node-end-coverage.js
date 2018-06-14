if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/aui-diagram-node-end/aui-diagram-node-end.js']) {
   __coverage__['build/aui-diagram-node-end/aui-diagram-node-end.js'] = {"path":"build/aui-diagram-node-end/aui-diagram-node-end.js","s":{"1":0,"2":0,"3":0},"b":{},"f":{"1":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":32},"end":{"line":1,"column":51}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":58,"column":68}},"2":{"start":{"line":12,"column":0},"end":{"line":53,"column":3}},"3":{"start":{"line":55,"column":0},"end":{"line":55,"column":34}}},"branchMap":{},"code":["(function () { YUI.add('aui-diagram-node-end', function (A, NAME) {","","/**"," * A base class for DiagramNodeEnd."," *"," * @class A.DiagramNodeEnd"," * @extends A.DiagramNodeState"," * @param {Object} config Object literal specifying widget configuration"," *     properties."," * @constructor"," */","var DiagramNodeEnd = A.Component.create({","","    /**","     * Static property provides a string to identify the class.","     *","     * @property NAME","     * @type String","     * @static","     */","    NAME: 'diagram-node',","","    /**","     * Static property used to define the default attribute","     * configuration for the `A.DiagramNodeEnd`.","     *","     * @property ATTRS","     * @type Object","     * @static","     */","    ATTRS: {","","        /**","         * The type of the node.","         *","         * @attribute type","         * @default 'end'","         * @type String","         */","        type: {","            value: 'end'","        }","    },","","    /**","     * Static property used to define which component it extends.","     *","     * @property EXTENDS","     * @type String","     * @static","     */","    EXTENDS: A.DiagramNodeState","});","","A.DiagramNodeEnd = DiagramNodeEnd;","","","}, '3.1.0-deprecated.43', {\"requires\": [\"aui-diagram-node-state\"]});","","}());"]};
}
var __cov_5SFXe3CQs78bIx1Wt$8pDQ = __coverage__['build/aui-diagram-node-end/aui-diagram-node-end.js'];
__cov_5SFXe3CQs78bIx1Wt$8pDQ.s['1']++;YUI.add('aui-diagram-node-end',function(A,NAME){__cov_5SFXe3CQs78bIx1Wt$8pDQ.f['1']++;__cov_5SFXe3CQs78bIx1Wt$8pDQ.s['2']++;var DiagramNodeEnd=A.Component.create({NAME:'diagram-node',ATTRS:{type:{value:'end'}},EXTENDS:A.DiagramNodeState});__cov_5SFXe3CQs78bIx1Wt$8pDQ.s['3']++;A.DiagramNodeEnd=DiagramNodeEnd;},'3.1.0-deprecated.43',{'requires':['aui-diagram-node-state']});
