import React,{Component} from "react";
import Chatbot from "./Chatbot";
var ReactGridLayout = require('react-grid-layout');
var Router = require('react-router');
var Link=Router.Link;


export default class Side extends Component{

    constructor(props)
    {
        super(props);
        this.logout=this.logout.bind(this);
        this.state={
            aj:this.props.data,YOYO:"aman"
        };
    }


    logout(){

        window.FB.logout(function (response) {
            console.log("user is logged out");
        });
        this.setState({aj:""});
    }


    render(){

         console.log(this.state.aj);
             if(this.state.aj!="")
             {
                 return(
                     <ReactGridLayout className="layout" cols={12} rowHeight={30} width={1200}>
                         <div key="a" data-grid={{x: 0, y: 0, w: 3, h: 13}} style={{backgroundColor: "#766aff"}}>
                             <div className="card">
                                 <img className="card-img-top" src="data:image/jpeg;base64,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" alt="Card image cap" />
                                     <div className="card-body">
                                         <h className="card-title">{this.state.aj}</h>
                                     </div>
                             </div>
                             <button className="btn btn-danger " onClick={this.logout}>FB Logout</button>
                         </div>
                         <div key="b" data-grid={{x: 3, y: 0, w: 4, h: 8}}>
                             <Chatbot data={this.state.aj}/>
                         </div>

                     </ReactGridLayout>
                 )
             }
             else
             {
                 return (
                    <p>Refresh to return to home page</p>
                 )
             }
    }
}