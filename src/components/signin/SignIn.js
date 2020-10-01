import React, {Component} from 'react'
import './SignIn.css'

class SignIn extends Component {

    constructor(){
        super();

        this.state={
            email: '',
            password: ''
        }

    }
handleChange=(event)=>{
    const{value,name}=event.target;
    this.setState({[name]:value})
}

handleSubmit=event=>{
    event.preventDefault();

    this.setState({email:'', password:''})
    

}

render(){
    return(
        <div className='signin'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={this.handleSubmit}>
                <input name="email" type="email" value={this.state.email} onChange={this.handleChange} required />
                <label>Email</label>
                <input name="password" type="password" value={this.state.password} onChange={this.handleChange} required />
                <label>Password</label>

                <input type='submit' value='Submit Form'></input>
            </form>
        </div>
    )
}
}

export default SignIn