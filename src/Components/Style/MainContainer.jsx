import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  flex-direction: column;
  text-align: center;
  gap: 20px;
`

const MainTitle = styled.div`
display: flex;
align-items: center;
justify-content: center;
max-width: 650px;
height: 35px;
color: ${props => props.textcolor};
text-align: center;
font-size: 35px;
`

const GominBox = styled.button`
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: row;
padding: 25px;
width: 90%;
height: 200px;
background-color: rgb(80, 45, 0);
border: 3px solid gold;
border-radius: 5px;
line-height: 15px;
`

export { MainContainer, MainTitle,GominBox };