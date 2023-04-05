import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";
import { fetchFromApi } from "../utils/fetchFromApi";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom"; 
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CardMedia from "@mui/material";
import Videos from "./Videos";

const VideoDetail = () => {

  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`).then((data) => setVideoDetail(data.items[0]))
    fetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`).then((data) => setVideos(data.items))
  }, [id])

  console.log(videoDetail)

  return (
    <Box minHeight="95vh" >
      <Stack direction={{ xs: 'column', md: 'row' }} >
        <Box flex={1} >
          <Box sx={{ width: '100%', top: '86px' }} >
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls/>
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2} >
              {videoDetail?.snippet?.title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{ color: '#fff' }} py={1} px={2}>
              <Link to={ `/channel/${videoDetail?.snippet?.channelId}`} >
                <img image={videoDetail?.snippet?.thumbnails?.high?.url} sx={{width: 358, height: 180}}/>
                <Typography variant={{ sm: 'subtitle2', md: 'h6'}} color='#fff' >
                  {videoDetail?.snippet?.channelTitle}
                  <CheckCircleIcon sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
                </Typography>
              </Link>
              <Stack direction='row' gap='20px' alignItems='center'>
                <Typography variant="body1" sx={{ opacity: 0.7 }} >
                  {parseInt(videoDetail?.statistics?.viewCount).toLocaleString()} Views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }} >
                  {parseInt(videoDetail?.statistics?.likeCount).toLocaleString()} Likes
                </Typography>
              </Stack>
            </Stack>
            <hr></hr>
            <Videos videos={videos} direction="column" />
          </Box>
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail