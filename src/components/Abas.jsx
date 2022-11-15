import React, { useState } from 'react';
import { Box, Tabs, Tab } from '@mui/material'

export function Abas() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
        <Tabs value={value} onChange={handleChange} centered>
            <Tab label="Etapa 1" />
            <Tab label="Etapa 2" />
            <Tab label="Etapa 3" />
        </Tabs>
    </Box>
  )
}

