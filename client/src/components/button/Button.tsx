import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  // onClick: () => void;
  
  children: React.ReactNode;
  type: 'submit' | 'text';
}

const Button = ({ children }: ButtonProps) => {
  return (
    <button className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
