import React, {useState} from 'react';
import './picker.css';
import {ButtonGroup} from '../../primitives/button-group/button-group.component';

export const Picker = ({title}) => {
  const [data, setData] = useState(null);
  return (
    <div className='picker-root'>
      <div>{title}</div>
      <ButtonGroup array={[{title: 'path 1', onClick: () => setData(1)}, {title: 'path 2', onClick: () => setData(2)}]}/>
      {data === 1 && <div>data 1</div>}
      {data === 2 && <div>data 2</div>}
    </div>
  );
};
