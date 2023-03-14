import React from 'react';
import PropTypes from 'prop-types';
import { basePageWrap } from '../BasePage';
import Hero from '../../components/Hero';
import RawHtml from '../../components/RawHtml';
import s from './ArticlePage.module.css';

const ArticlePage = ({ title, richText, lastPublishedAt, body }) => {
    return (
        <div className={s.Container}>
            <Hero title={title} />
            <RawHtml html={richText} />
            <p>{lastPublishedAt}</p>
            <p>{body}</p>
        </div>
    );
};

ArticlePage.defaultProps = {
    title: '',
    richText: '',
    lastPublishedAt: '',
    body:'',
};

ArticlePage.propTypes = {
    title: PropTypes.string.isRequired,
    richText: PropTypes.string,
    body: PropTypes.array,
}

export default basePageWrap(ArticlePage);
