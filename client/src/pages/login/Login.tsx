import React, { useState } from 'react'
import { FormControl } from '../../components/FormControl/FormControl';
import { Link } from 'react-router-dom';
import styles from './Login.module.css'

export const Login = () => {

    const loginFields = [
        {
            name: 'email',
            label: 'Email or username',
            inputType: 'email',
            placeholder: 'Enter email'
        },
        {
            name: 'password',
            label: 'password',
            inputType: 'password',
            placeholder: 'Enter password'
        }
    ];

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (formData.password.length < 8) {
            
        }
        console.log('clicked button in Login, formData:', formData)
    }

    return (
        <div className={styles.container} >
            <FormControl
                titleDesription='Sign in using email, phone, or username'
                buttonLabel='Login'
                fields={loginFields}
                onSubmit={(e) => handleSubmit(e)}
                formData={formData}
                setFormData={setFormData}
                title='Login'
                title2={
                    <Link to="/signup" className={styles.link}>
                        Sign up
                    </Link>}
            />
        </div>
    )
}
