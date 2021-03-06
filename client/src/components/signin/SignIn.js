import React, {Component} from 'react'
import './SignIn.scss'
import FormInput from '../form-input/FormInput'
import CustomButton from '../custom-button/CustomButton'
import {auth, signInWithGoogle} from '../../firebase/firebase.utils'

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

handleSubmit= async event=>{
    event.preventDefault();

    const {email, password } = this.state;

    try{
        await auth.signInWithEmailAndPassword(email, password);
        this.setState({email:'', password:''})
    }catch(error){
        console.log(error)
    }
    
}

render(){
    return(
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={this.handleSubmit}>
                <FormInput name="email" type="email" value={this.state.email} handleChange={this.handleChange} label='email' required />
                
                <FormInput name="password" type="password" value={this.state.password} handleChange={this.handleChange} label='password' required />
                
                <div className='buttons'>
                <CustomButton type='submit'>SIGN IN</CustomButton>
                <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
                </div>
                
            </form>
        </div>
    )
}
}

export default SignIn