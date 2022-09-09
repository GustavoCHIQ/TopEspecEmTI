import styled from "styled-components";

export const CardUserStyled = styled.div`
    width: 700px;
    background-color: #f9f2ff;
    /* box-shadow: #f9f2ff 0px 25px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px; */
    padding: 20px;
    margin: 20px 20px 20px 25px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    gap: 20px
    h3{
        color: #6a14ad;
        font-size: 25px;
        font-weight: bold;
        font-family: 'Roboto', sans-serif;
    }
    img{
        border-radius: 50%;
        border: 4px solid #f52053;
        width: 100px;
    }
    .info{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        color: #000;
        margin-top: 15px;
        font-size: 20px;
        margin-left: 15px;
    }
`