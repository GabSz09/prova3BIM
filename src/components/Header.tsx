/* CONTROLE DE VISITAS, CONDOMÍNIO PARQUE DAS ACÁCIAS */

import React from 'react';
// obs: export serv p tornar o componente disponivel. Import é p importar a biblioteca do react
// React.FC: avisa o typescript que a const Header é um componente. E se você errar um valor, por exemplo, o erro vai ser apontado no vs code
 export const Header: React.FC = () => {
    return(
        <header style= {{
            padding: '1.2rem',
            backgroundColor: '#1e293b',
            color: '#ffffff',
            borderRadius: '8px',
            marginBottom: '1.5rem',
            textAlign: 'center',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',


        }}>
            <h1 style= {{margin: 0, fontSize: '1.6rem'}}>
                Controle de Visitas, condimínio Parque das Acácias
            </h1>

            <p style={{margin: 0, fontSize: '1.6rem', color: '#94a3b8'}}>
                Código Individual: <strong>PP-1RPY2UN-0IOU2Q2</strong> | Operador: Porteiero
            </p>
         </header>
    );
 };
