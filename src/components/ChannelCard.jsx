import React from 'react';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';

const ChannelCard = ({channelDetail}) => {
  return (
    <Box sx={{boxShadow: 'none', borderRadius: '20px'}}>
        <Link to={`/channel/${channelDetail?.snippet?.channelId}`}>
            <CardContent 
            sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff'}}>
                <CardMedia image={channelDetail?.snippet?.thumbnails?.high?.url} sx={{ borderRadius: '50%', height: '180px', width: '180px' }}  />
            </CardContent>
        </Link>
    </Box>
  )
}

export default ChannelCard