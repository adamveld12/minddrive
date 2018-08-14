import React, { PureComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import styles from './SearchInput.less';

const { icon, search } = styles;
class SearchInput extends PureComponent {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
    }

    constructor() {
        super();
        this.state = { searchTerm: '' };
    }

    handleKey = ({ key }) => {
        const { onSubmit } = this.props;
        const { searchTerm } = this.state;

        if (key === 'Enter' && onSubmit) {
            onSubmit(searchTerm);
        }
    }

    update = ({ target }) => this.setState({ searchTerm: target.value })

    render() {
        return (
            <div className={search}>
                <FontAwesomeIcon className={icon} icon={['fas', 'search']} />
                <input type="text" onChange={this.update} onKeyPress={this.handleKey} />
            </div>
        );
    }
}

export default SearchInput;
