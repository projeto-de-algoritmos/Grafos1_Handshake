import React, { useState, useEffect } from 'react';
import {
    Box,
    TextField,
    Button,
    Grid,
    Typography,
    MenuItem,
    Stack
} from '@mui/material'
import HandshakeIcon from '@mui/icons-material/Handshake';
import { getRandomInt } from '../utils/randNames';

export function LinkStep({ individuals, connectionsList, setConnectionsList }) {
    const [firstIndividual, setFirstIndividual] = useState('')
    const [secondIndividual, setSecondIndividual] = useState('')
    const [hasError, setHasError] = useState(false)
    const [buttonEnabled, setButtonEnabled] = useState(true);

    
    function handleClick() {
        let connection = {}
        connection.firstIndividual = firstIndividual;
        connection.secondIndividual = secondIndividual;

        setConnectionsList([...connectionsList, connection]);

        setFirstIndividual('');
        setSecondIndividual('');
    }

    function setRandomConnections() {
        const connectionsNum = getRandomInt(individuals);
        let randConnections = [];
        
        for (let i = 0; i < connectionsNum; i++) {
            let connection = {}
            connection.firstIndividual = individuals[Math.floor(Math.random() * individuals.length)];
            console.log(connection.firstIndividual);
            connection.secondIndividual = individuals[Math.floor(Math.random() * individuals.length)];
            console.log(connection.secondIndividual);


            while (connection.firstIndividual == connection.secondIndividual) {
                connection.secondIndividual = individuals[Math.floor(Math.random() * individuals.length)];
            }

            randConnections.push(connection);
        }
        
        setConnectionsList([...randConnections]);
        console.log('saiu do loop');

        setFirstIndividual('');
        setSecondIndividual('');
    }

    useEffect(() => {
        if ((firstIndividual && secondIndividual) !== '')
            setButtonEnabled(false);
        else
            setButtonEnabled(true);

        if ((firstIndividual == secondIndividual) && (firstIndividual && secondIndividual !== '')) {
            setButtonEnabled(true);
            setHasError(true);
        }
        else
            setHasError(false);
    }, [firstIndividual, secondIndividual])

    return (
        <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={2} />

                <Grid item xs={2}>
                    <TextField
                        select
                        fullWidth
                        id="primeiro-membro"
                        label="Primeiro membro"
                        variant="outlined"
                        value={firstIndividual}
                        onChange={(event) => { setFirstIndividual(event.target.value) }}
                        error={hasError}
                        helperText={hasError ? 'Nome já escolhido, escolha outro nome' : ''}
                    >
                        {individuals.map((item) => (
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
                        value={secondIndividual}
                        onChange={(event) => { setSecondIndividual(event.target.value) }}
                        error={hasError}
                        helperText={hasError ? 'Nome já escolhido, escolha outro nome' : ''}
                    >
                        {individuals.map((item) => (
                            <MenuItem key={item} value={item}>
                                {item}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>

                <Grid item xs={2}>
                    <Button
                        variant="contained"
                        onClick={handleClick}
                        sx={{ height: '3.5rem', width: '100%' }}
                        disabled={buttonEnabled}
                    >
                        Adicionar
                    </Button>
                </Grid>

                <Grid item xs={2}>
                    <Button
                        variant="contained"
                        onClick={setRandomConnections}
                        sx={{ height: '3.5rem', width: '100%' }}
                    >
                        Gerar Conexões Aleatórias
                    </Button>
                </Grid>

                <Grid item xs={3} />
            </Grid>

            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={3} />

                <Grid item xs={4} sx={{
                    my: 2,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    {connectionsList.map((item, index) => {
                        return (
                            <Stack
                                sx={{ mt: 2, justifyContent: 'space-evenly', alignItems: 'center' }}
                                direction="row"
                                spacing={2}
                                key={index}
                            >
                                <Typography>{item.firstIndividual}</Typography>
                                <HandshakeIcon />
                                <Typography>{item.secondIndividual}</Typography>
                            </Stack>
                        )
                    })}
                </Grid>

                <Grid item xs={5} />
            </Grid>
        </Box>
    )
}