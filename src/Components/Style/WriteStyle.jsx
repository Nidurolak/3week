import styled from "styled-components";

const Buttoncontainer = styled.div`
display: flex;
justify-content: flex-end;
padding-right: 10px;
padding-top:  10px;
`

const WriteBoxContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
min-height: 50vh;
`

const WriteBox = styled.div`
max-width: 1500px;
width: 70%;
padding: 10px 10px 10px 10px;
color: gold;
border: 4px solid gold;
border-radius: 15px;
background-color: rgb(80, 45, 0);
align-items: center;
display: flex;
justify-content: space-between;
flex-direction: column;
`

const WriteBoxTop = styled.div`
width: 70%;
display: flex;
justify-content: space-between;
`
const WriteBoxTopInputBox = styled.div`
width: 90%;
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: column;
text-align: center;
`
const WriteBoxTopInput = styled.input`
    width: 80%;
    background-color: wheat;
    height: 40px;
`
const WriteBoxMiddleInput = styled.textarea`
width: 100%;
background-color: wheat;
height: 150px;
max-width: 100%;
`

export { WriteBoxMiddleInput, Buttoncontainer, WriteBox,WriteBoxContainer,WriteBoxTop, WriteBoxTopInput,WriteBoxTopInputBox }