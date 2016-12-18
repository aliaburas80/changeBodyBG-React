var React = require("react");
var Button      = require("./Button.jsx");
var Input       = require("./Input.jsx");
var Description = require("./Description.jsx");
var Title       = require("./Title.jsx");

var Manager = React.createClass({
    
    getColor:function(e){
        console.log(this.refs.input.refs.inputValue);
        return this.refs.input.refs.inputValue;
    },
    
    render : function(){
        var pageGeneral={
          margin:"0 auto"  ,
          textAlign:"center"
        };
        return <div className="container" style={pageGeneral}>
            <div className="row">
                <Title titleTxt={"React Change page background"}/>
                <Description text={"In mathematics and computing, hexadecimal (also base 16, or hex) is a positional numeral system with a radix, or base, of 16. It uses sixteen distinct symbols, most often the symbols 0–9 to represent values zero to nine, and A, B, C, D, E, F (or alternatively a, b, c, d, e, f) to represent values ten to fifteen."}/>
                <div className="row col-ms-12 col-xs-12 col-xl-12 col-md-12">
                    <Button onClick={this.changeBGColor} btnName={this.props.btnname} color={this.getColor}/>
                </div>
            </div>
        </div>
    }
    
    
    
});

module.exports = Manager;