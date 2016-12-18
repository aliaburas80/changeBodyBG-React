var React = require("react");
var Description = React.createClass({

    render:function(){
        var pStyle={
            fontSize:18,
            color:"#333",
            marginBottom:30,
            marginTop:30
        };

        return <div style={pStyle} className="row col-xs-12 col-sm-12 col-md-12 col-xl-12"><p>{this.props.text}</p></div>
    }
});
module.exports = Description;