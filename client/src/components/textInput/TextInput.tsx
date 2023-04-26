import React from 'react';
import styles from './TextInput.module.css';

interface TextInputProps {
    label: string;
    inputType: string;
    placeholder: string;
}

export const TextInput = ({ label, inputType, placeholder }: TextInputProps) => {
  return (
    <div className={styles.container} >
        <label htmlFor={label}>{label}:</label>
        <input type={inputType} placeholder={placeholder} />
    </div>
  )
}
