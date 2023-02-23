import styled, { css } from "styled-components";

const Button = styled.button`
${props => {
        let width, height, image, justfy;
        switch (props.size) {
            case 'big':
                width = '1300px';
                height = '200px';
                justfy = 'space-between'
                break;
            case 'middle':
                width = '200px';
                height = '200px';
                justfy = 'center'
                break;
            case 'small':
                width = '150px';
                height = '60px';
                justfy = 'center'
                break;

            case 'icon':
                width = '50px';
                height = '50px';
                image = `url(${props.image})`;
                break;

            default:
                width = '150px';
                height = '150px';
                break;
        }
        return css`
    width: ${width};
    height: ${height};
    background-image: ${image};
    background-size: cover;
    justify-content: ${justfy};
  `;
    }}

border: 3px solid gold;
border-radius: 5px;
background-color: ${props => props.bg};
color: white;
font-size: 1.5em;
font-weight: bold;
letter-spacing: 2px;
cursor: pointer;
transition: all 0.3s ease-in-out;
display: flex;
align-items: center;
flex-direction: row;
&:hover {
  background-color: gray;
  color: #8b4513;
}
`;

export { Button }