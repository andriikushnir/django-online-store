import React from "react";
import styled from "styled-components";
import Catalog from "./Catalog";


const CatalogsBlock = styled.div`

`;

const Catalogs = () => {
    return(
        <CatalogsBlock>
            <h3>Catalogs</h3>
            <div className="row cols-row-3">
                <Catalog />
            </div>
        </CatalogsBlock>
    )
}


export default Catalogs;