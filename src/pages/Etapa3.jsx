import React, { useState } from 'react';
import { Box, TextField, Button, Grid, MenuItem, Typography, Stack } from '@mui/material'
import HandshakeIcon from '@mui/icons-material/Handshake';
import Graph from '../utils/graph';


export function Etapa3({membros, listaConexoesMembros}) {
    const [ primeiroNome, setPrimeiroNome ] = useState('')
    const [ segundoNome, setSegundoNome ] = useState('')
    const [ toggle, setToggle ] = useState(false)
    const [ resultadoBFS, setResultadoBFS ] = useState([])
    

    function handleBFS() {
        const g = new Graph(membros.length);
        
        for(var i = 0; i < membros.length; i++) {
            g.addVertex(membros[i]);
        }
    
        for(var i = 0; i < listaConexoesMembros.length; i++) {
            g.addEdge(listaConexoesMembros[i].primeiroNome, listaConexoesMembros[i].segundoNome)
        }

        setResultadoBFS(g.bfs(primeiroNome))
    }


    return (
        <>
            <Box sx={{ width: '100%', mt: '5rem' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={3} />
        
                    <Grid item xs={2}>
                        <TextField 
                            select
                            fullWidth 
                            id="primeiro-membro" 
                            label="Primeiro membro" 
                            variant="outlined"
                            value={primeiroNome}
                            onChange={(event) => {setPrimeiroNome(event.target.value)}}
                            error={toggle}
                            helperText={toggle ? 'Nomes iguais, escolha outro nome': ''}
                        >
                            {membros.map((item) => (
                                <MenuItem key={item} value={item}>
                                    {item}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item xs={2}>
                        <TextField 
                            select
                            fullWidth 
                            id="segundo-membro" 
                            label="Segundo membro" 
                            variant="outlined"
                            value={segundoNome}
                            onChange={(event) => {setSegundoNome(event.target.value)}}
                            error={toggle}
                            helperText={toggle ? 'Nomes iguais, escolha outro nome': ''}
                        >
                            {membros.map((item) => (
                                <MenuItem key={item} value={item}>
                                    {item}
                                </MenuItem>
                            ))}
                        </TextField> 
                    </Grid>

                    <Grid item xs={2}>
                        <Button 
                            variant="contained" 
                            onClick={handleBFS}
                            sx={{height: '3.5rem', width: '100%' }}
                        >
                            Procurar
                        </Button>
                    </Grid>

                    <Grid item xs={3} />
                </Grid>

                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={3} />
    
                    <Grid item xs={6} sx={{
                        mt: 2,  
                        alignItems: 'center',
                        display: 'flex',
                        justifyContent: 'center'}}
                    >
                        {resultadoBFS.map((item, index) => {
                            return (
                                <>
                                    <Typography>{item}</Typography>

                                    {index < (membros.length - 2) ? 
                                        <HandshakeIcon sx={{mr: 2, ml: 2}}/> : 
                                    ''}
                                </>
                            )
                        })}
                    </Grid>

                    <Grid item xs={3} />
                </Grid>
            </Box>
        </>
    )
}