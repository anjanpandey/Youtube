import React from 'react';


class SearchBar extends React.Component {

    // initialize the term
    state = {term:''};

    onInputChange = event =>  {
        this.setState({term: event.target.value})
    };

    onFormSubmit = event => {
        event.preventDefault();
        // call props from parent and pass the current search term
        this.props.onFormSubmit(this.state.term);
    };


    render() {
        return (
            <div className="search-bar ui segment" style={{backgroundColor:"#dae5e3"}}>
            <form className="ui form" onSubmit={this.onFormSubmit}>
                <div className="field">
                    <input type="text" placeholder="Search..." 
                           value={this.state.term} 
                           onChange={this.onInputChange}
                     />
                </div>
            </form>
            </div>
        );
    }
}


export default SearchBar;