import styled from "styled-components";

const Input = styled.input`
    border:1px solid #ccc;
    line-height:1.5;
    padding: 8px 12px;
    font-size:16px;
    border-radius:3em 0em 0em 3em;
    outline:none;
    box-shadow:0px 0px 5px 2px rgb(245, 245, 245)
`; 

const Button = styled.button`
    background: rgb(2, 95, 202);
    cursor:pointer;
    color:#fff;
    border:1px solid rgb(2, 95, 202);
    padding: 8px 12px;
    line-height:1.5;
    font-size:16px;
    font-weight:600;
    border-radius:0em 3em 3em 0em;
    transition:.3s all ease;

    &:hover{
        background:rgb(66, 104, 211);
        border:1px solid rgb(66, 104, 211);
    }
`;

const ContenedorFiltros = styled.div`
    display: flex;
    gap: 20px;
    justify-content: flex-end;
    align-items: center;
`;

const ContenedorHead = styled.div`
    display: flex;
    gap: 20px;
    justify-content: space-between;
    
`;

const ContenedorApp = styled.div`
    max-width:1200px;
    width:100%;
    margin:auto;
`;

export { Input, Button, ContenedorFiltros, ContenedorApp, ContenedorHead};