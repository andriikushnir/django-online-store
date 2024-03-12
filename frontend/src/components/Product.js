import React from "react";
import styled from "styled-components";
import { FaUser, FaShoppingCart, FaHeart } from 'react-icons/fa';


const ProductDiv = styled.div`
    background-color: #f5f5f5;
    border-radius: 20px;
    padding: 10px 10px 20px 10px;

`;
ProductDiv.Head = styled.div`

`;
ProductDiv.Body = styled.div`
    padding-top: 10px;
    padding-bottom: 10px;
`;
ProductDiv.Footer = styled.div`
    display: inline;
`;

ProductDiv.Control = styled.div`

`
ProductDiv.Info = styled.div`

`
ProductDiv.Image = styled.img`
    width: 100%;
    height: 200px;
    border-radius: 20px;
    background-color: #9956e1;

`


const ButtonBy = styled.button`
    background-color: #9956e1;
    border: none;
    border-radius: 16px;
    color: white;
    font-size: 18px;
    margin-right: 5px;
    padding: 7px 27px 7px 27px;
`;

const ButtonLike = styled.button`
    background-color: #e1565c;
    border: none;
    height: 40px;
    width: 40px;
    color: white;
    margin-right: 5px;
    border-radius: 30px;

`
const ButtonAdd = styled.button`
    background-color: #9956e1;
    border: none;
    height: 40px;
    width: 40px;
    color: white;
    margin-right: 5px;
    border-radius: 30px;

`



const Product = () => {
    return(
        <div className="col">
            <ProductDiv>
                <ProductDiv.Head>
                    <ProductDiv.Image>

                    </ProductDiv.Image>
                </ProductDiv.Head>
                <ProductDiv.Body>
                    <spam>Test</spam>                    
                </ProductDiv.Body>
                <ProductDiv.Footer>
                    <ProductDiv.Control>
                        <ButtonBy>Купить</ButtonBy>
                        <ButtonLike><FaHeart /></ButtonLike>
                        <ButtonAdd><FaShoppingCart /></ButtonAdd>
                    </ProductDiv.Control>
                    <ProductDiv.Info>
                        <span>0 отзывов</span>
                        <span>2400 UAH</span>
                    </ProductDiv.Info>
                </ProductDiv.Footer>
            </ProductDiv>
        </div>
    )
}


export default Product