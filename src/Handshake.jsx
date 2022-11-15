import React from 'react';
import { Header } from './components/Header'
import { Abas } from './components/Abas'
import { Etapa1 } from './pages/Etapa1'

export function Handshake() {
    return (
        <>
            <Header />
            <Abas />
            <Etapa1 />
        </>
    )
}