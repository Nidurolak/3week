import styled from "styled-components";

const Header = styled.div`
display:flex;
align-items: center;
justify-content: space-between;
flex-direction: row;
height: 60px;
background-color: rgb(80, 45, 0);
border: 2px solid gold;
border-radius: 3px;
line-height: 15px;
padding: 10px;
`

const Headertitle = styled.div`
max-width: 250px;
height: 25px;
color: ${props => props.textcolor};
text-align: center;
margin-left: 10px;
margin-right: 10px;
font-size: 25px;
`


export {Header, Headertitle}