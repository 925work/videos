import React from 'react';

class SearchBar extends React.Component {

    state = {
        searchValue:''
    }

    onInputChange = (e) => {
        this.setState({searchValue: e.target.value});
    }

    submitTerm = (e) => {
        e.preventDefault();
        this.props.onFormSubmit(this.state.searchValue);
        //TO DO: make sure to call callback from parent component
    }

    render (){
        return(
            <div className='ui segment search-bar'>
                <form onSubmit={this.submitTerm} className='ui form'>
                    <div className='field'>
                        <label>
                            Videos
                        </label>
                        <input type='text' value={this.state.searchValue} onChange={this.onInputChange}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;