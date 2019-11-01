import React from 'react';
import Classes from './Modal.css';
import Auxi from '../../../hoc/Auxi';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => (
    <Auxi>
        <Backdrop show={props.show} clicked={props.modalClosed} />
        <div style={{
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)', opacity: props.show ? '1': '0'
        }} 
            className={Classes.Modal} >
            {props.children}
        </div>
    </Auxi>
);

export default modal;