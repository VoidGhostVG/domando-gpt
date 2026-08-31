import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'


export default function NotFound() {
    return (
        <main className="notfound">
            <div className="notfound__content">
                <p className="notfound__eyebrow">Erro 404</p>

                <h1 className="notfound__title">Essa página saiu do mapa.</h1>

                <p className="notfound__text">
                    O endereço que você tentou acessar não existe ou foi movido.
                    Confira o link ou volte para um ponto conhecido.
                </p>

                <svg
                    className="notfound__route"
                    viewBox="0 0 400 40"
                    width="400"
                    height="40"
                    role="presentation"
                    aria-hidden="true"
                >
                    <line
                        x1="0"
                        y1="20"
                        x2="160"
                        y2="20"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeDasharray="6 8"
                        strokeLinecap="round"
                    />
                    <circle cx="180" cy="20" r="4" fill="currentColor" />
                    <circle cx="222" cy="20" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
                    <line
                        x1="242"
                        y1="20"
                        x2="400"
                        y2="20"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeDasharray="6 8"
                        strokeLinecap="round"
                        opacity="0.35"
                    />
                </svg>

                <div className="notfound__actions">
                    <Link to="/" className="notfound__button notfound__button--primary">
                        Voltar para o início
                    </Link>
                    <a href="/contato" className="notfound__button">
                        Falar com a gente
                    </a>
                </div>
            </div>
        </main>
    );
}