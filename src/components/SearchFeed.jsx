import { Box, Stack ,Typography } from '@mui/material'
import React from 'react'
import { fetchFromApi } from '../utils/fetchFromApi'
import { useEffect, useState } from 'react'
import Videos from './Videos'
import { useParams } from 'react-router-dom'

const SearchFeed = () => {

  const [videos, set_videos] = useState(null)
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromApi(`search/?part=snippet&q=${searchTerm}`)
    .then((data) => set_videos(data.items))

  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
    <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white'}}>
      {searchTerm}&nbsp;
      <span style={{ color: '#F31503' }}>Videos</span>
      <br></br>
      <Videos videos={videos}/>
    </Typography>
  </Box>
  )
}

export default SearchFeed