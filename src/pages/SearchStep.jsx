import React, { useState, useEffect } from 'react';
import {
    Box,
    TextField,
    Button,
    Grid,
    MenuItem,
    Typography
} from '@mui/material'
import HandshakeIcon from '@mui/icons-material/Handshake';
import Graph from '../utils/graph';


export function SearchStep({ individuals, connectionsList }) {
    const [firstIndividual, setFirstIndividual] = useState('')
    const [secondIndividual, setSecondIndividual] = useState('')
    const [hasError, setHasError] = useState(false)
    const [list, setList] = useState([])
    const [buttonEnabled, setButtonEnabled] = useState(true);


    function handleBFS() {
        const graph = new Graph(individuals.length);

        for (var i = 0; i < individuals.length; i++) {
            graph.addVertex(individuals[i]);
        }

        for (var i = 0; i < connectionsList.length; i++) {
            graph.addEdge(connectionsList[i].firstIndividual, connectionsList[i].secondIndividual)
        }

        setList(graph.bfs(firstIndividual, secondIndividual))
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
                <Grid item xs={3} />

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
                        onClick={handleBFS}
                        sx={{ height: '3.5rem', width: '100%' }}
                        disabled={buttonEnabled}
                    >
                        Procurar
                    </Button>
                </Grid>

                <Grid item xs={3} />
            </Grid>

            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={3} />

                <Grid item xs={6} sx={{
                    mt: 8,
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'center'
                }}
                >
                    {list.map((item, index) => {
                        return (
                            <>
                                <Typography key={index}>{item}</Typography>

                                {index < (list.length - 1) && <HandshakeIcon sx={{ mr: 2, ml: 2 }} />}
                            </>
                        )
                    })}
                </Grid>

                <Grid item xs={3} />
            </Grid>
        </Box>
    )
}


// - refatoração de nomenclaturas [X]
// - code smells []
// - adicionar descrições/instruções [X]
// - tornar utils funcional [x]
// - CLICK DE BOTAO NO ENTER []
// - data setter automatico []
// - limpar dados sem F5 []
// - implementar parada no algoritmo?? [X]