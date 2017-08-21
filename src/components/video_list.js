import React from 'react';
import ReactDOM from 'react-dom';
import VideoListItem from './video_list_item'
const VideoList = (props)=> {
	const VideoItems = props.videos.map((video)=>{
		return (<VideoListItem 
			onVideoSelect={props.onVideoSelect}
			key={video.etag} 
			video={video}/>);
	});
  return(
    <ul className = "col-md-4 list-group">
     {VideoItems}
    </ul>
  );
}

export default VideoList