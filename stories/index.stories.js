import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
import '../src/main.less';
import '../src/fa';


import Logo from '../src/components/Logo/Logo';
import SearchInput from '../src/components/SearchInput/SearchInput';
import BackCrumb from '../src/components/BackCrumb/BackCrumb';
import Tags from '../src/components/Tags/Tags';
import Card from '../src/components/Card/Card';
import BigButton from '../src/components/BigButton/BigButton';

addDecorator(story => (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '25px' }}>
        {story()}
    </div>
));


storiesOf('Small Components', module)
    .add('Logo', () => (
        <div style={{ backgroundColor: 'orange' }}> <Logo /> </div>
    ))
    .add('Search Input', () => (
        <SearchInput onSubmit={action('searching')} />
    ))
    .add('Back Crumb', () => (
        <BackCrumb title="Journal" goBack={action('going backward')} />
    ))
    .add('Tags', () => (
        <Tags tags={['One', 'Two', 'Three']} editable onDelete={action('deleting tag')} onAddTag={action('added tag')} />
    ))
    .add('Tags (a lot)', () => {
        const tags = [];
        for (let i = 0; i < 25; i += 1) {
            tags.push(i * 10);
        }
        return <Tags tags={tags} editable onDelete={action('deleting tag')} onAddTag={action('added tag')} />;
    })
    .add('Big Button', () => (
        <BigButton onClick={action('clicked')} />
    ));


const pages = [
    {
        content: 'some interesting page content',
        type: 'text',
    },
    {
        content: 'https://images.unsplash.com/photo-1516692935701-4f35bff8b9f6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5e8b07db9ad1b8626288bbbf77471558&auto=format&fit=crop&w=1950&q=80',
        type: 'image',
    },
];
const cardStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%',
};
storiesOf('Large Components', module)
    .add('Card', () => (
        <div style={cardStyle}>
            <Card
                onDelete={action('deleting card')}
                onEdit={action('editing card')}
                onShare={action('sharing card')}
                title="A really neat card"
                pages={[pages[0]]}
                tags={['neat', 'cool', 'not t-bag']}
            />
            <Card
                onDelete={action('deleting card')}
                onEdit={action('editing card')}
                onShare={action('sharing card')}
                title="A second really neat card"
                pages={[pages[1]]}
                tags={['neat', 'cool', 'not t-bag']}
            />
        </div>
    ));
