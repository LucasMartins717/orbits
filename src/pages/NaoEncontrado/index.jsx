import styled from "styled-components";

const DivEstilo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    
    .titulo{
        font-size: 4em;
        padding: 0.3em;
    }

    .apontar{
        transform: rotateZ(50deg);
    }
`

const NaoEncontrado = () => {
    return (
        <DivEstilo>
            <h1 className="titulo">;-;</h1>
            <h2 className="titulo apontar">☝️</h2>
        </DivEstilo>
    );
};

export default NaoEncontrado;