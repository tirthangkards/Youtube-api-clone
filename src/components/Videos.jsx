import React from 'react'
import { Box, Stack, Typography } from "@mui/material";
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';

const Videos = ({ videos }) => {
    if(videos!=null) {
        return (
            <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
                {
                    videos.map((item, idx) => (
                    <Box key={idx}>
                        {<VideoCard video={item}/>}
                    </Box>
                ))
                }
            </Stack>
        )
    }
}

export default Videos