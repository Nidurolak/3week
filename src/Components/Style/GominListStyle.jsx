import styled from "styled-components";

const GominContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const GominListContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
    flex-wrap: wrap;
    gap: 12px;
    width: 100%;
`

const GominBox = styled.div`
width: 300px;
padding: 10px 10px 10px 10px;
color: gold;
border: 4px solid gold;
border-radius: 15px;
background-color: rgb(80, 45, 0);
word-break: break-all;
`
const GominBoxTop = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: row;
padding-left: 10px;
padding-right: 10px;
`
const GominBoxMiddle = styled.div`
display: flex;
align-items: flex-start;
justify-content: space-between;
flex-direction: row;
padding-left: 10px;
padding-right: 10px;
width: 90%;
`

export { GominContainer, GominListContainer,GominBox, GominBoxTop, GominBoxMiddle}