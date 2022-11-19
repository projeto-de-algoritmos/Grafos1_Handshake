import React from 'react';
import { Box, Tabs, Tab } from '@mui/material'

export function StepTabs({ page, setPage }) {

  const handleChange = (event, newValue) => {
    setPage(newValue)
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={page} onChange={handleChange} centered>
        <Tab label="Etapa 1" />
        <Tab label="Etapa 2" />
        <Tab label="Etapa 3" />
      </Tabs>
    </Box>
  )
}

