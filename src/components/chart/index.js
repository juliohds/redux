import React from 'react';
import { useSelector } from 'react-redux'
// import { Container } from './styles';

export default function Chart(props) {      
    const { quantify } = useSelector(state => state.productReducer);

    return (
        <div>
            <h1>Char | {quantify} products</h1>
        </div>
    );
}
