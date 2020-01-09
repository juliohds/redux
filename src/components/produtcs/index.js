import React, {useState} from 'react';

// import { Container } from './styles';

export default function Produtcs() {

    function addProduct(){
        let newProducts = [];
        newProducts.push({name: "camisa tommy"},{name: "tenis lacoste"},{name: "tenis addidas"});
        
        setProducts(newProducts)
    }

    const [products, setProducts] = useState([{name: "camisa tommy"}, {name: "tenis lacoste"}]);
    
    return (
        <div>
        <label>Carrinho ({products.length})</label>
            {products.map(v => <p>{v.name}</p>)}
            <button type="button" onClick={addProduct}>ADD</button>
        </div>        
    );
}
