import React, {Component} from 'react'
import './SignIn.scss'
import FormInput from '../form-input/FormInput'
import CustomButton from '../custom-button/CustomButton'

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
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={this.handleSubmit}>
                <FormInput name="email" type="email" value={this.state.email} handleChange={this.handleChange} label='email' required />
                
                <FormInput name="password" type="password" value={this.state.password} handleChange={this.handleChange} label='password' required />
                

                <CustomButton type='submit'>SIGN IN</CustomButton>
            </form>
        </div>
    )
}
}

export default SignIn