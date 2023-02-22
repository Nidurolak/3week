import React from "react";
import { Button } from "./Style/ButtonStyle";

function CustomButton(props){
    const handleClick = () => {
      console.log('zzzzzzzzzzzzzzzz');
    };
  
    return(<>
    {/*버튼 스타일드 컴포넌트에 props.bg 전달*/}
    <Button bg={props.bg} size = {props.size} onClick={handleClick}> asdasd</Button>
    </>)
}

export default CustomButton;