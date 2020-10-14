import React from 'react'
import './SignUpSignIn.scss'
import SignIn from '../../components/signin/SignIn'
import SignUp from '../../components/signup/SignUp'

const SignUpSignIn=()=>(
     <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
        </div>
)

export default SignUpSignIn