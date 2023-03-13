import React from 'react';
import PropTypes from 'prop-types';
import { basePageWrap } from '../BasePage';
import Hero from '../../components/Hero';
import RawHtml from '../../components/RawHtml';
import s from './AtestPage.module.css';

const AtestPage = ({ title, testText }) => {
    return (
        <div className={s.Container}>
            <Hero title={title} />
            <RawHtml html={testText} />
        </div>
    );
};

AtestPage.defaultProps = {
    title: '',
    testText: '',
};

AtestPage.propTypes = {
    title: PropTypes.string.isRequired,
    testText: PropTypes.string,
};

export default basePageWrap(AtestPage);
