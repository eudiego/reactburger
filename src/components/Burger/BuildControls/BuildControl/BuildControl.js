import React from 'react';
import classes from './BuildControl.css';
import { classExpression } from '@babel/types';

const buildControl = (props) => (
    <div className={classes.BuldControl}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Less} onClick={props.removed} disabled={props.disabled} >Less</button>
        <button className={classes.More} onClick={props.added}  >More</button>
    </div>
);

export default buildControl;