import React, { useState } from 'react';
import { Header } from './components/Header';
import { Abas } from './components/Abas';
import { Etapa1 } from './pages/Etapa1';
import { Etapa2 } from './pages/Etapa2';
import { Etapa3 } from './pages/Etapa3';

export function Handshake() {
    const [pagina, setPagina] = useState(0);
    const [ membros, setMembros ] = useState([''])

    return (
        <>
            <Header />
            <Abas 
                pagina={pagina} 
                setPagina={setPagina}
            />
            {pagina == 0 ?  
                <Etapa1 
                    membros={membros}
                    setMembros={setMembros}
                /> : 
            pagina == 1 ? 
                <Etapa2 membros={membros}/> : 
                <Etapa3 />
            }
           
        </>
    )
}