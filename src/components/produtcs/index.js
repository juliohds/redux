import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setAllProducts, setQuantify } from '../../redux/product/actions'
// import { Container } from './styles';

export default function Produtcs() {

    const { products, quantify } = useSelector(state => state.productReducer);
    const dispatch = useDispatch();

    function addProduct(){
        let newProducts = [];
        newProducts.push({name: "camisa tommy"},{name: "tenis lacoste"},{name: "tenis addidas"});        
        dispatch(setAllProducts(newProducts))
        dispatch(setQuantify(newProducts.length))        
    }
    
    return (
        <div>
        <label>Carrinho ({quantify})</label>
            {products.map((v,i) => <p key={`prod${i}`}>{v.name}</p>)}
            <button type="button" onClick={addProduct}>ADD</button>
        </div>        
    );
}
