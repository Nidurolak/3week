import Router from './shared/Router';
import './App.css';
import CustomButton from './Components/Button';
import { Header, Headertitle } from './Components/Style/HeaderStyle';
import { Link, useNavigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
  const queryClient = new QueryClient()
  return (
      <>
      {/*{/*커스텀 버튼 컴포넌트에 props.bg 전달}
      <CustomButton bg="gold" size = 'small' ></CustomButton>*/}
      <QueryClientProvider client={queryClient}>
      <Router />
      </QueryClientProvider>
      </>
  );
}

export default App;
