import React from 'react';
import './button.css';
import {Button as MuiButton} from '@material-ui/core';

export const Button = ({title, onClick}) => {
  return (
    <MuiButton className='button-root' variant="contained" color="primary" onClick={onClick}>{title}</MuiButton>
  );
};
