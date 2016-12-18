var React = require("react");
var Input = require("./Input.jsx");
var Button = React.createClass({
    
    
    changeBG:function(e){
        console.log("#"+this.refs.input.refs.inputValue.value);
        if(this.props.color){
            document.body.style.background      = "#"+this.refs.input.refs.inputValue.value;
            document.body.style.backgroundColor = "#"+this.refs.input.refs.inputValue.value;
        }else{
            alert("Please enter color in input box!");
        }
    },
    
    render:function(){
        var btnStyle={marginLeft: 0 };
        var dispalyDiv ={
            display:"inline-block",
            marginLeft:10
        };
        return  <div style={btnStyle} className="row col-xs-12 col-sm-12 col-md-12 col-xl-12"> 
        <Input ref="input"/>
        <button  style={dispalyDiv} className="btn btn-primary" name={this.props.btnName} onClick={this.changeBG}>{this.props.btnName}</button>  
        </div>
    }
   
});
module.exports = Button;