/* global module */

import React from 'react';
import WordCountPage from './WordCountPage';
import data from './WordCountPage.data';

const WordCountPageStory = {
    title: 'Containers/WordCountPage',
    component: WordCountPage,
};
export default WordCountPageStory;

export const WordCountPageWithData = () => <WordCountPage {...data} />;
export const WordCountPageWithoutData = () => <WordCountPage />;
