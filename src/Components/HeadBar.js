
import { Header, Headertitle } from './Style/HeaderStyle';
import CustomButton from './Button';
import { Link } from 'react-router-dom';
function HeadBar(){
    return(<>
        <Header>
          <Link to={'/'}>
        <CustomButton size = "icon" image = "/house.png"></CustomButton>
          </Link>
          <Headertitle textcolor = 'gold'>고민을 적어보는 공간</Headertitle>
        </Header>
    </>)
}

export default HeadBar