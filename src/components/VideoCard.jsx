import React from 'react'
import { Link } from "react-router-dom"; 
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";

const VideoCard = ({ video }) => {
    console.log(video)
    const videoId=video.id.videoId

    return (
        <Card sx={{ width: { md: '314px', xs: '100%' }, boxShadow: 'none', borderRadius: 2 }} >
            <Link to={videoId?`/video/${videoId}` : `/video/cV2gBU6hKfY` } >
                <CardMedia image={video?.snippet?.thumbnails?.high?.url || demoThumbnailUrl } alt={video?.video?.title} sx={{width: 358, height: 180}}></CardMedia>
            </Link>
            <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px' }} >
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl } >
                    <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
                        {video?.snippet?.title.slice(0,60) || demoVideoTitle.slice(0, 60)}
                    </Typography>
                </Link>
                <Link to={video?.author?.channelId? `/channel/${video?.author?.channelId}` : demoChannelUrl} >
                    <Typography variant="subtitle2" fontWeight="bold" color="gray">
                        {video?.snippet?.channelTitle || demoChannelTitle }
                        <CheckCircleIcon sx={{ fontSize: 12, color: '#17e7e8', ml: '5px'}} />
                    </Typography>
                </Link>
                <Typography variant="subtitle2" fontWeight="100" color="#e2e2dd">
                    {video?.snippet?.description.slice(0,50) || demoChannelTitle }
                </Typography>
            </CardContent>
        </Card>
    ) 
}

export default VideoCard