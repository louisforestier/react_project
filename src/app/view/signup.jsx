import React from "react";


class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            username: "",
            password: "",
            cpassword: ""
        }
    }


    add = (e) => {
        e.preventDefault();
        let bodyLocal = JSON.stringify({firstname:firstname,lastname:lastname,
            username:username,password:password,cpassword:cpassword});
        fetch('/api/client',{
            method:"POST",
            body:bodyLocal,
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        })
            .then((res)=>{return res.json()})
            .then((reponse)=>{})
    }

    render() {
        return (
            <div>
                <h1>Sign Up</h1>
                <form onSubmit={this.add}>
                    <label> User name </label>
                    <input type="text" value={this.state.username} onChange={(e) => this.setState({username:e.currentTarget.value})}/>
                    <label> Password </label>
                    <input type="password" value={this.state.password} onChange={(e) => this.setState({password:e.currentTarget.value})}/>
                    <label> Confirm password </label>
                    <input type="password" value={this.state.cpassword} onChange={(e) => this.setState({cpassword:e.currentTarget.value})}/>
                    <br/>
                    <label> First name </label>
                    <input type="text" value={this.state.firstname} onChange={(e) => this.setState({firstname:e.currentTarget.value})}/>
                    <label> Last name </label>
                    <input type="text" value={this.state.lastname} onChange={(e) => this.setState({lastname:e.currentTarget.value})}/>
                    <button>+</button>
                </form>
            </div>
        )
    }
}

export default Signup;