import React from 'react'
import { FormControl } from '../../components/FormControl/FormControl';
import { Link } from 'react-router-dom';
import styles from './Login.module.css'

export const Login = () => {

    const signupFields = [
        {
            label: 'email phone or username',
            inputType: 'text',
            placeholder: 'Enter email, phone, or username'
        }
    ];

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log('clicked button in Login')
    }

    return (
        <div className={styles.container} >
            <FormControl
                titleDesription='Sign in using email, phone, or username'
                buttonLabel='Continue'
                fields={signupFields}
                onSubmit={(e) => handleSubmit(e)}
                title='Login'
                title2={
                    <Link to="/signup" className={styles.link}>
                        Sign up
                    </Link>}
            />
        </div>
    )
}
