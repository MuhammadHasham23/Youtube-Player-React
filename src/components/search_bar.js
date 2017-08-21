import React from 'react';
// ES6 : import React,{Component} from 'react'
// which is same as Component = React.Component
// extend now from 'Component' instead of React.Component

class SearchBar extends React.Component {
	constructor(props){
		super(props);

		this.state = {term: ''};
	}

	render() {
		return (
		<div className="search-bar"> 
		<input 
		value={this.state.term}  //controlled components has value given by state.
		onChange={event => this.onInputChange(event.target.value)}/>
		</div>
		);
	}

	onInputChange(term){
      this.setState({term:event.target.value});
      this.props.onSearchTermChange(term);
	}
}

export default SearchBar;