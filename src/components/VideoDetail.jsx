import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Videos } from "./";
import { fetchFromApi } from "../utils/fetchFromApi";

import React from 'react'

const VideoDetail = () => {

  const {id}=useParams()
  useEffect(() => {
    fetchFromApi(`videos?part=snippetid=${id}`)
  }, [id]);
  
  const { snippet: {title, channelTitle, channelId } } = VideoDetail();

  return (
    <Box minHeight='95vh'>
      <Stack>
        <Box flex={1} >
          <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
            <Typography color='#fff' variant="h5" fontWeight="bold">
              {snippet.title}
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail