import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link } from "react-router-dom"; 
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";
import { fetchFromApi } from '../utils/fetchFromApi';

const VideoCard = ({ video }) => {
    const videoId=video.id.videoId
    const [first, setfirst] = useState(null)

    useEffect(() => {
        fetchFromApi(`videos?part=statistics&id=${videoId}`).then((data) => setfirst(data.items[0]))
    }, [videoId])

    console.log(first?.statistics)
    

    return (
        <Card sx={{ width: { md: '314px', xs: '100%' }, boxShadow: 'none'}} >
            <Link to={videoId?`/video/${videoId}` : `/video/cV2gBU6hKfY` } >
                <CardMedia image={ video?.snippet?.thumbnails?.high?.url } alt={video?.video?.title} sx={{width: 358, height: 180}}></CardMedia>
            </Link>
            <CardContent sx={{ backgroundColor: 'black', height: '106px' }} >
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl } >
                    <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
                        {video?.snippet?.title.slice(0,60)}
                    </Typography>
                </Link>
                <Link to={video?.author?.channelId? `/channel/${video?.author?.channelId}` : demoChannelUrl} >
                    <Typography variant="subtitle2" fontWeight="bold" color="gray">
                        {video?.snippet?.channelTitle}
                        <CheckCircleIcon sx={{ fontSize: 12, color: '#17e7e8', ml: '5px'}} />
                    </Typography>
                </Link>
                <Typography variant="subtitle2" fontWeight="100" color="#e2e2dd">
                    {parseInt(first?.statistics?.viewCount).toLocaleString()} Views --- {first?.statistics?.likeCount} Likes
                </Typography>
            </CardContent>
        </Card>
    ) 
}

export default VideoCard