import React, { useState } from 'react';
import { Header } from './components/Header';
import { StepTabs } from './components/StepTabs';
import { StepMessage } from './components/StepMessage';
import { RegisterStep } from './pages/RegisterStep';
import { LinkStep } from './pages/LinkStep';
import { SearchStep } from './pages/SearchStep';


export function Handshake() {
    const [pagina, setPagina] = useState(0);
    const [membros, setMembros] = useState([''])
    const [listaConexoesMembros, setListaConexoesMembros] = useState([])


    return (
        <>
            <Header />
            <StepTabs
                pagina={pagina}
                setPagina={setPagina}
            />
            <StepMessage page={pagina} />

            {pagina == 0 &&
                <RegisterStep
                    membros={membros}
                    setMembros={setMembros}
                />
            }
            {pagina == 1 &&
                <LinkStep
                    membros={membros}
                    listaConexoesMembros={listaConexoesMembros}
                    setListaConexoesMembros={setListaConexoesMembros}
                />
            }
            {pagina == 2 &&
                <SearchStep
                    membros={membros}
                    listaConexoesMembros={listaConexoesMembros}
                />
            }
        </>
    )
}