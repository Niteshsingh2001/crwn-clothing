import React, { useState } from 'react'
import {
    createAuthUserWithEmailAndPassword, createUserDocFromAuth, signInWithGooglePopup, signInAuthUserWithEmailAndPassword
} from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import "./sign-in-form.style.scss"
import Button, { BUTTON_TYPE_CLASS } from '../button/button.component';
import { UserContext, UserProvider } from '../../context/user.context';

const defaultFormFields = {

    email: "",
    password: "",

}




export default function SignInForm() {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;


    const restForm = () => {
        setFormFields(defaultFormFields)
    }


    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup()
        await createUserDocFromAuth(user)
    }


    const handelSubmit = async (event) => {
        event.preventDefault();
        try {
            const { user } = await signInAuthUserWithEmailAndPassword(email, password)
        }
        catch (Error) {

            switch (Error.code) {
                case "auth/wrong-password":
                    alert("Incorrect password")

                    break;
                case "auth/user-not-found":
                    alert("Incorrect password")

                    break;

                default:
                    console.log(Error)
                    break;
            }
        }
        restForm()
    }

    const handleChange = (event) => {

        const { name, value } = event.target

        setFormFields({ ...formFields, [name]: value })

    }


    return (
        <div className='sign-in-container'>
            <h2>Already have an account?</h2>
            <span>Sign In with Email and Password</span>
            <form onSubmit={handelSubmit}>
                <FormInput label="Email" type='email' required name='email' onChange={handleChange} value={email} />
                <FormInput label="Password" type='password' required name='password' onChange={handleChange} value={password} />

                <div className='buttons-container'>
                    <Button type='submit'>Sign In</Button>
                    <Button type="button" buttonType={BUTTON_TYPE_CLASS.google} onClick={signInWithGoogle}>Sign Up in with Google</Button>
                </div>

            </form>
        </div>
    )
}
