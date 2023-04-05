import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";

import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromApi";
import ReactPlayer from "react-player";

function ChannelDetail() {

  return (
    <Box minHeight="95vh" >
      <Stack direction={{ xs: 'column', md: 'row' }} >
        <Box flex={1} >
          <Box sx={{ width: '100%', position: 'sticky', top: '86px' }} >
            <ReactPlayer>
              <Typography>
                
              </Typography>
            </ReactPlayer>
          </Box>
        </Box>
      </Stack>
    </Box>
  )
}

export default ChannelDetail