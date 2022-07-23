import { configure } from '@storybook/react';
import interopRequireDefault from 'babel-runtime/helpers/interopRequireWildcard';
const { addDecorator } = require('@storybook/react');
const { jsxDecorator } = require('storybook-addon-jsx');

import '../src/sass/materialize.scss';

function loadStories(){
    //stroy파일을 생성시 자동으로 추가하는 방법
    const context = require.context('../src/stories',true,/Story\.jsx$/);
    context.keys().forEach((srcFile) => {
        interopRequireDefault(context(srcFile));
    })

    // require('../src/stories/InputStory');
    // require('../src/stories/NewCounterStory');
}

addDecorator(jsxDecorator);
configure(loadStories, module);