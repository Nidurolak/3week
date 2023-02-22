import styled, { css} from "styled-components";
import check from "../assets/check.jpg"

const Button = styled.button`
${props => {
  let width, height, image;
  switch (props.size) {
    case 'big':
      width = '250px';
      height = '200px';
      break;
    case 'middle':
      width = '200px';
      height = '200px';
      break;
    case 'small':
      width = '150px';
      height = '100px';
      break;
    default:
      width = '150px';
      height = '100px';
      image = `url(/check.png)`;
      console.log(image)
      break;
  }
  return css`
    width: ${width};
    height: ${height};
    background-image: ${image};
  `;
}}
border: 3px solid #ffd700;
background-color: ${props => props.bg};
color: white;
font-size: 1.5em;
font-weight: bold;
text-transform: uppercase;
letter-spacing: 2px;
cursor: pointer;
transition: all 0.3s ease-in-out;
display: flex;
justify-content: center;
align-items: center;
&:hover {
  background-color: #ffd700;
  color: #8b4513;
}
`;

export {Button}