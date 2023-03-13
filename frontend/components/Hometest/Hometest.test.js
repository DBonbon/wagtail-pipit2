import React from 'react';
import s from './Hometest.module.css';

const Hometest = ({onClick, text}) => (
    <button className={s.Hometest} onClick={onClick}>
        {text}
    </button>
);

Button.propTypes = {};

Button.defaultProps = {};

export default Hometest;
