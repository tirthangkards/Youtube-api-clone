import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Sidebar from './Sidebar'
import { fetchFromApi } from '../utils/fetchFromApi'
import { useEffect, useState } from 'react'
import Videos from './Videos'

const Feed = () => {

  const [selected_category, setselected_category] = useState('New')
  const [videos, set_videos] = useState(null)

  useEffect(() => {
    set_videos(null)

    fetchFromApi(`search/?part=snippet&q=${selected_category}`)
    .then((data) => set_videos(data.items))
  }, [selected_category]);

  return (
    <Stack sx={{ flexDirection: {sx: 'column', md: 'row' }}}>
        <Box sx={{ height: {sx: 'auto', md: '92vh'}, borderRight: '1px solid #3d3d3d', px: {sx: 0, md: 2} }} >
          <Sidebar selected_category={selected_category} setselected_category={setselected_category} />
          <Typography className='copyright' variant='body2' sx={{ mt: 1.5, color: '#fff'}}  >Copyright Tirthangkar Das</Typography>
        </Box>

        <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
          <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white'}}>
            {selected_category}&nbsp;
            <span style={{ color: '#F31503' }}>Videos</span>
            <hr></hr>
            <Videos videos={videos}/>
          </Typography>
        </Box>
    </Stack>
  )
}

export default Feed