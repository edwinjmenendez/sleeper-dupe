import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FormControl } from '../../components/FormControl/FormControl';
// import { FormField } from '../../components/formField/FormField'
import styles from './Signup.module.css'

export const Signup = () => {

  const signupFields = [
    {
      name: 'username',
      label: 'Username',
      inputType: 'text',
      placeholder: 'Enter new username'
    },
    {
      name: 'email',
      label: 'Email',
      inputType: 'text',
      placeholder: 'Enter email'
    },
    {
      name: 'password',
      label: 'Password',
      inputType: 'password',
      placeholder: 'Set a password'
    }
  ];

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  })

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('clicked button in signup, data:', formData);
  }

  return (
    <div className={styles.container} >
      <FormControl
        titleDesription="Let's get started by creating an account"
        buttonLabel='Continue'
        fields={signupFields}
        onSubmit={(e) => handleSubmit(e)}
        title='Sign up'
        title2={
          <Link to="/login" className={styles.link}>
            Login
          </Link>}
        // setUserName={setUsername}
        formData={formData}
        setFormData={setFormData}
      />
    </div>
  )
}
