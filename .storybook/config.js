import { configure } from '@storybook/react';

// automatically import all files ending in *.stories.js
function loadStories() {
    const req = require.context('../stories', true, /.stories.js$/);
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
