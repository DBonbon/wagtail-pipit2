/* global module */

import React from 'react';
import Hometest from './Hometest';
import data from './Hometest.data';

const HometestStory = {
    title: 'Components/Hometest',
    component: Hometest,
};
export default HometestStory;

export const HometestWithData = () => <Hometest {...data} />;
export const HometestWithoutData = () => <Hometest />;
