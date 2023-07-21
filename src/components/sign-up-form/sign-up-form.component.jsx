import React, { useState } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocFromAuth } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import "./sign-up-form.style.scss"
import Button from '../button/button.component';
import { UserContext } from '../../context/user.context';

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
}


export default function SignupForm() {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;


    const restForm = () => {
        setFormFields(defaultFormFields)
    }

    const handelSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Password Don't Match ")
            return
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password)
            await createUserDocFromAuth(user, { displayName })


        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                alert("user alerady exist with this email")
            } else {
                console.log("Something went Wrong " + error)
            }
        }

        restForm()
    }

    const handleChange = (event) => {

        const { name, value } = event.target

        setFormFields({ ...formFields, [name]: value })

    }


    return (
        <div className='sign-up-container'>
            <h2>Don't have an account?</h2>
            <span>Sign up with Email and Password</span>
            <form onSubmit={handelSubmit}>
                <FormInput label="Display Name" type='text' required name='displayName' onChange={handleChange} value={displayName} />
                <FormInput label="Email" type='email' required name='email' onChange={handleChange} value={email} />
                <FormInput label="Password" type='password' required name='password' onChange={handleChange} value={password} />
                <FormInput label="Confirm Password" type='password' required name='confirmPassword' onChange={handleChange} value={confirmPassword} />

                <Button type='submit'>Sign Up</Button>
            </form>
        </div>
    )
}
