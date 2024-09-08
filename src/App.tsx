import React from 'react';
import './App.css';
import styled from "styled-components";

function App() {
    return (
        <div className="App">
            <StyledDtn>Hello</StyledDtn>
        </div>
    );
}


const StyledDtn = styled.button `

    border: none;
    background-color: blanchedalmond;
    padding: 10px 20px;
    border-radius: 10px;
    color: black;
    font-size: 14px;
    height: 40px;
    width: 100px;
`

export default App;
