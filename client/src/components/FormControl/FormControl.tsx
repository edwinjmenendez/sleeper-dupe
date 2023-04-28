import React from 'react'
import { TextInput } from '../textInput/TextInput'
import styles from './FormControl.module.css'
import Button from '../button/Button'
import { FormEvent } from 'react';

interface FormField {
  name: string;
  label: string;
  inputType: string;
  placeholder: string;
}

interface FormProps {
  title: string;
  title2: any;
  buttonLabel: string;
  fields: FormField[];
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  titleDesription: string;
  setFormData?: (formData: any) => void;
  formData?: any;
}

export const FormControl = ({ title, titleDesription, title2, buttonLabel, fields, onSubmit, setFormData, formData }: FormProps) => {

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (setFormData) {
        setFormData({
            ...formData,
           [event.target.name]: event.target.value
        });
    }
  }

  return (
    <form className={styles.container} onSubmit={onSubmit}>
      <div className={styles.header}>
        <h2 className={styles.subtitle}>{title}</h2>
        <h5 className={styles.subtitle}>{title2}</h5>
      </div>
      <label className={styles['header-label']} htmlFor={title}>{titleDesription}</label>
      {fields.map(({ label, inputType, placeholder, name }, index) => (
        <TextInput
          key={index}
          label={label}
          inputType={inputType}
          name={name}
          placeholder={placeholder}
          onChange={handleInputChange} // added onChange here
        />
      ))}
      <div className={styles.buttonContainer} >
        <Button children={buttonLabel} type='submit' />
        {title2?.props.children === 'Login' && <span>Forgot password?</span>}
      </div>
    </form>
  )
}
