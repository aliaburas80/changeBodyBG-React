var React = require("react");
var Title= React.createClass({
    render:function(){
        var titleStyle = {color:"#999"};
        return <h1 style={titleStyle}>{this.props.titleTxt}</h1>
    }
});

module.exports = Title;