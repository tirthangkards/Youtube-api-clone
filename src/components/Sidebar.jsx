import { Stack } from '@mui/material'
import React from 'react'
import { categories } from '../utils/constants'

const selected_category='New'

const Sidebar = ({selected_category, setselected_category}) => {
  return (
    <Stack direction='row' sx={{overflow: 'auto', height: { sx: 'auto', md: '95%' }, flexDirection: {md: 'column'} }} >
        {categories.map((category) => (
            <button onClick={() => setselected_category(category.name)} className='category-btn' style={{background: category.name===selected_category && '#FC1503', color: 'white'}} key={category.name}>
                <span style={{ color: category.name===selected_category ? 'white' : 'red', marginRight: '15px' }} >{category.icon}</span>
                <span style={{ opacity: category.name===selected_category ? '1' : '0.7' }} >{category.name}</span>
            </button>
        ))}
    </Stack>
  )
}

export default Sidebar