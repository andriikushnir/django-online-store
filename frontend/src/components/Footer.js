import React from "react";
import styled from "styled-components";


const FooterDiv = styled.div`
    background-color: black;
    padding: 25px 10px 25px 10px;
`

const Footer = () =>{
    return(
        <FooterDiv>
            <div className="pt-5 pb-5 row row-cols-1 row-cols-sm-2 row-cols-md-3">
                <div className="col">
                    <div>
                        <div className="text-left">
                            <h6>ІНФОРМАЦІЯ</h6>
                        </div>
                        <ul className="list-unstyled">
                            <li>Ми у ЗМІ</li>
                            <li>Обмін та повернення</li>
                            <li>Як оформити замовлення</li>
                            <li>Гарантія</li>
                        </ul>
                    </div>
                </div>
                <div className="col">
                    <div>
                        <div className="text-left">
                            <h6>ІНФОРМАЦІЯ</h6>
                        </div>
                        <ul className="list-unstyled">
                            <li>Ми у ЗМІ</li>
                            <li>Обмін та повернення</li>
                            <li>Як оформити замовлення</li>
                            <li>Гарантія</li>
                        </ul>
                    </div>
                </div>
                <div className="col">
                    <div>
                        <div className="text-left">
                            <h6>ІНФОРМАЦІЯ</h6>
                        </div>
                        <ul className="list-unstyled">
                            <li>Ми у ЗМІ</li>
                            <li>Обмін та повернення</li>
                            <li>Як оформити замовлення</li>
                            <li>Гарантія</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="text-center mt-4">
                <span>made by andriikushnir.net</span>
            </div>
        </FooterDiv>
    )
}


export default Footer