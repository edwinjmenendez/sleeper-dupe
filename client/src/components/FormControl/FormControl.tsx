import React, { ReactNode } from 'react'
import { TextInput } from '../textInput/TextInput'
import styles from './FormControl.module.css'
import Button from '../button/Button'
import { FormEvent } from 'react';

interface FormField {
    label: string;
    inputType: string;
    placeholder: string;
  }
  
  interface FormProps {
    title: string;
    title2: ReactNode | any;
    buttonLabel: string;
    fields: FormField[];
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    titleDesription: string;
  }

export const FormControl = ({ title, titleDesription, title2,buttonLabel, fields, onSubmit }: FormProps) => {

    const handleClick = (event: any) => {
        event.preventDefault();
        console.log(event)
    }

    return (
      <form className={styles.container} onSubmit={onSubmit}>
        <div className={styles.header}>
          <h2 className={styles.subtitle}>{title}</h2>
          <h5 className={styles.subtitle}>{title2}</h5>
        </div>
        <label className={styles['header-label']} htmlFor={title}>{titleDesription}</label>
        {fields.map(({ label, inputType, placeholder }, index) => (
          <TextInput
            key={index}
            label={label}
            inputType={inputType}
            placeholder={placeholder}
          />
        ))}
        <div className={styles.buttonContainer} >
            <Button children={buttonLabel} type='submit' />
            {title2?.props.children === 'Login' ? 
                <span>Forgot password?</span>
                : 
                <div></div>
            }
        </div>
      </form>
    );
  }
