import React, { ChangeEvent } from 'react'
import styles from './TextInput.module.css'

interface TextInputProps {
  name: string;
  label: string;
  inputType: string;
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const TextInput = ({ label, inputType, placeholder, onChange, name }: TextInputProps) => {
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={label}>{label}</label>
      <input
        name={name}
        className={styles.input}
        type={inputType}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  )
}
