import _ from 'lodash';
import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {term: ''};
    }
    //every class must have a render method
    render() {
        return (
            <div className="search-bar" >
                <input 
                value={this.state.term}
                placeholder={'Search'}
                onChange={event => this.onInputChange(event.target.value)} />
           </div>
        );
    }
    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;

//state is a plain javascript object that is used to record and react user events
//Each class based component has its own state object. once its changed it re-renders along with its children