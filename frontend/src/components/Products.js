import React from "react";
import { render } from "react-dom";
import styled from "styled-components";
import Product from "./Product";


const ProductsDiv = styled.div`
    position: relative;
    padding: 20px 10px 20px 10px;
`;

ProductsDiv.Head = styled.div`

`;
ProductsDiv.Body = styled.div`

`;

const Products = () =>{
    return(
        <ProductsDiv>
            <ProductsDiv.Head>
                <h3>Shop</h3>
            </ProductsDiv.Head>
            <ProductsDiv.Body className = 'row cols-row-1 cols-row-sm-1 g-1'>
                <Product />
                <Product />
                <Product />
            </ProductsDiv.Body>
        </ProductsDiv>
    )
}

export default Products