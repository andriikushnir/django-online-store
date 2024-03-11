import React from "react";
import styled from "styled-components";


const InfoBlock = styled.div`
    background-color: #f5f5f5;
    border-radius: 20px;
    padding: 20px 15px 20px 15px;
    margin-bottom: 10px;
`;

const Info = () =>{
    return(
        <div className="container-xl">
            <div className="text-center mb-3 mt-3">
                <h5>ЧАСТІ ПИТАННЯ (FAQ)</h5>
            </div>
            <InfoBlock>
                <h5>Вибираємо взуття правильно</h5>
                <p>
                Взуття не просто доповнює кожен образ, а й стає завершальною нотою вашого стилю. З цієї причини до вибору взуття на кожен сезон ставляться з особливою відповідальністю – актуальне, стильне та зручне взуття потрібне на будь-який випадок, чи це урочистий захід чи прогулянка з друзями.

                Хороше взуття слугує не один сезон. Вибираючи відповідну модель в інтернет-магазині Sezon, ви вибираєте не тільки босоніжки або кеди у своєму стилі, але і їхню високу якість, що забезпечує довге життя взуття.

                Недорого купити якісне чоловіче і жіноче взуття просто ‒ для цього достатньо замовити пряму доставку від виробника на сайті магазину Sezon. Ми надсилаємо фірмове взуття в будь-яке відділення Нової Пошти або Укрпошти. Зробіть замовлення онлайн у нашому інтернет-магазині, виберіть зручний спосіб оплати, і зовсім скоро ви будете розношувати нову стильну пару взуття.
                </p>
            </InfoBlock>
            <InfoBlock>
                <h5>Вибираємо взуття правильно</h5>
                <p>
                Взуття не просто доповнює кожен образ, а й стає завершальною нотою вашого стилю. З цієї причини до вибору взуття на кожен сезон ставляться з особливою відповідальністю – актуальне, стильне та зручне взуття потрібне на будь-який випадок, чи це урочистий захід чи прогулянка з друзями.

                Хороше взуття слугує не один сезон. Вибираючи відповідну модель в інтернет-магазині Sezon, ви вибираєте не тільки босоніжки або кеди у своєму стилі, але і їхню високу якість, що забезпечує довге життя взуття.

                Недорого купити якісне чоловіче і жіноче взуття просто ‒ для цього достатньо замовити пряму доставку від виробника на сайті магазину Sezon. Ми надсилаємо фірмове взуття в будь-яке відділення Нової Пошти або Укрпошти. Зробіть замовлення онлайн у нашому інтернет-магазині, виберіть зручний спосіб оплати, і зовсім скоро ви будете розношувати нову стильну пару взуття.
                </p>
            </InfoBlock>
        </div>
    )
}

export default Info;