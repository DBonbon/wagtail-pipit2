/* global module */

import React from 'react';
import AtestPage from './AtestPage';
import data from './AtestPage.data';

const AtestPageStory = {
    title: 'Containers/AtestPage',
    component: AtestPage,
};
export default AtestPageStory;

export const AtestPageWithData = () => <AtestPage {...data} />;
export const AtestPageWithoutData = () => <AtestPage />;
