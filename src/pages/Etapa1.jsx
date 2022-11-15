import React, { useState } from 'react'
import { Box, TextField, Button, Grid, Typography } from '@mui/material'

export function Etapa1() {
    const [ membros, setMembros ] = useState([''])
    const [ nomeMembro, setNomeMembro ] = useState('')
    const [ toggle, setToggle ] = useState(0);

    function handleClick() {
        if(membros.includes(nomeMembro))
            setToggle(1)
        else {
            setToggle(0);
            setMembros([...membros, nomeMembro]);
            setNomeMembro('')
        }

    }

    return (
        <>
            <Box sx={{ width: '100%', mt: '5rem' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={3} />
    
                    <Grid item xs={4}>
                        <TextField 
                            fullWidth 
                            id="nome-membro" 
                            autoComplete='off'
                            label="Membro" 
                            variant="outlined"
                            value={nomeMembro}
                            onChange={(event) => {setNomeMembro(event.target.value)}}
                            error={toggle ? true : false}
                            helperText={toggle ? 'Nome já existe na lista de membros': ''}
                        />
                    </Grid>

                    <Grid item xs={2}>
                        <Button 
                            variant="contained" 
                            onClick={handleClick}
                            sx={{height: '3.5rem', width: '100%' }}
                        >
                            Adicionar
                        </Button>
                    </Grid>

                    <Grid item xs={3} />
                </Grid>

                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={3} />
                    
                    <Grid item xs={4} sx={{
                        mt: '1rem',  
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        {membros.map((item, index) => {
                            return (<Typography sx={{textAlign: 'center'}} mt={1} key={index}>{item}</Typography>)
                        })}
                    </Grid>

                    <Grid item xs={3} />
                </Grid>
            </Box>
        </>
    )
}