import _ from 'lodash'
import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
//Create a componenet.
//This component will produce some html.

const API_KEY = 'AIzaSyAH9lQc2MAgfCs4bkDOegYk0EK8XiVzEwE';

class App extends React.Component{
	constructor(props){
		super(props);

		this.state={videos:[],
			selectedVideo:null};

		this.videoSearch('surfboards');
	}

	videoSearch(term){

		YTSearch({key:API_KEY,term:term}, (videos) =>{
	       this.setState({videos:videos,
	       selectedVideo : videos[0]}); // we want something to be displayed when the app runs.
           // same as this.setState({videos}) ; ES6.
        });

	}

	render(){
		//debounce
		const videoSearch = _.debounce((term)=> {this.videoSearch(term)},300);
	return (
       <div>
         <SearchBar onSearchTermChange = {videoSearch} />
         <VideoDetail video={this.state.selectedVideo}/>
         <VideoList onVideoSelect = {selectedVideo => this.setState({selectedVideo})} 
         videos={this.state.videos}/>    
       </div>
    );	
	}
	
}
// Take this componenet's generated HTML
// and put on the page
ReactDOM.render(<App/>,document.querySelector('.container'));