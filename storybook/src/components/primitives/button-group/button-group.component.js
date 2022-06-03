import React from 'react';
import './button-group.css';
import {ButtonGroup as MuiButtonGroup, Button} from '@material-ui/core';

export const ButtonGroup = ({array}) => {
  console.log('-', array)
  return (
    <MuiButtonGroup className='button-group-root' variant="contained">
      {array.map(it => (<Button onClick={it.onClick}>{it.title}</Button>))}
    </MuiButtonGroup>
  );
};
