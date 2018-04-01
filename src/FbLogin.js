import React,{Component} from "react";
import axios from "axios";

import Side from "./Side";

export default class FbLogin extends Component{
    constructor(props)
    {
        super(props);
        this.login=this.login.bind(this);
        this.state={name:""}
    }

    login(){
        let that=this;
        window.FB.login(function (response) {
            if(response.authResponse)
            {
                  console.log("token",response.authResponse.accessToken);
                  let url=`https://graph.facebook.com/v2.12/me?oauth_token=${response.authResponse.accessToken}`;
                  axios.get(url).then(function (response) {
                      console.log(response.data.name);
                      that.setState({name:response.data.name});
                  })
            }
        })
    }

    render() {
        if(this.state.name==="") {
            return (
                <div>
                    <button className="btn btn-primary" onClick={this.login}>FB Login</button>
                </div>
            )
        }
        else
        {
            return(
                <Side data={this.state.name}/>
            )
        }
    }
}