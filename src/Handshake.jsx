import React, { useState } from 'react';
import { Header } from './components/Header';
import { Abas } from './components/Abas';
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
            <Abas
                pagina={pagina}
                setPagina={setPagina}
            />
            {pagina == 0 ?
                <RegisterStep
                    membros={membros}
                    setMembros={setMembros}
                /> :
                pagina == 1 ?
                    <LinkStep
                        membros={membros}
                        listaConexoesMembros={listaConexoesMembros}
                        setListaConexoesMembros={setListaConexoesMembros}
                    /> :
                    <SearchStep
                        membros={membros}
                        listaConexoesMembros={listaConexoesMembros}
                    />
            }

        </>
    )
}