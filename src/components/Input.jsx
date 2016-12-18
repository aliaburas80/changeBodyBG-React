var React = require("react");
var Input = React.createClass({
   getInitialState: function () {
    return { input: '' };
    },
    onChangeMethod : function(e){
        if(this.state.input.length <= 7){
           this.setState({ input:"#"+e.target.value });
        }
    },
    render:function(){
        var inputStyle= {
            width: "300px",
            textAlign: "center",
            margin:" 0 auto",
            marginBottom:30
        };
        var dispalyDiv ={
            display:"inline-block"
        };
        return <div style={dispalyDiv}>
            <input id="textInput" ref="inputValue" className="form-control" onChange={this.onChangeMethod} type="text" placeholder="hexadecimal color to change BG" maxLength="7" width="300px" style={inputStyle}></input>
        </div>
    }
});

module.exports = Input;