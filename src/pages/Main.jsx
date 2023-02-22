import { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import '../App.css';
import { Button } from '../Components/Style/ButtonStyle';
import { MainContainer, MainTitle,GominBox } from '../Components/Style/MainContainer';
import { Headertitle } from '../Components/Style/HeaderStyle';

function Main (){


    return (<>
    <MainContainer>
    <MainTitle textcolor = 'rgb(80, 45, 0)'>고민이 무엇인가요</MainTitle>
            <GominBox>
                <MainTitle textcolor = 'gold'>고민 작성하기</MainTitle>
                </GominBox>
            <GominBox>
                <MainTitle textcolor = 'gold'>개의 고민이 있습니다(보러가기)</MainTitle></GominBox>
        </MainContainer>
    </>)
}

export default Main