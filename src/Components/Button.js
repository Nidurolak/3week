import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Style/ButtonStyle";

function CustomButton(props){
    return(<>
    {/*버튼 스타일드 컴포넌트에 props.bg 전달*/}
    <Button bg={props.bg} size = {props.size} image = {props.image}> {props.children}</Button>
    </>)
}

export default CustomButton;