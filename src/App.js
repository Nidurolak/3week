import Router from './shared/Router';
import './App.css';
import CustomButton from './Components/Button';
import { Header, Headertitle } from './Components/Style/HeaderStyle';
import { Link } from 'react-router-dom';

function App() {
  console.log('adsasda')
  return (
      <>
      {/*{/*커스텀 버튼 컴포넌트에 props.bg 전달}
      <CustomButton bg="gold" size = 'small' ></CustomButton>*/}

      <Header>
        <Headertitle textcolor = 'gold'>asdasd</Headertitle>
        <Headertitle textcolor = 'gold'>zzzzz</Headertitle>
      </Header>
      <Router />
      </>
  );
}

export default App;
