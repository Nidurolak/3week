import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../App.css';
import { Button } from '../Components/Style/ButtonStyle';
import { MainContainer, MainTitle, PageBox } from '../Components/Style/MainContainer';
import { Headertitle } from '../Components/Style/HeaderStyle';
import CustomButton from '../Components/Button';
import { Link } from 'react-router-dom';
import HeadBar from '../Components/HeadBar';
import { useQuery } from 'react-query';
import { getGomin } from '../api/gomin';

function Main() {

    const { isLoading, isError, data } = useQuery("gomin", getGomin);
    if(isLoading){
        return<div>로딩중.........로딩중.........로딩중.........로딩중.........로딩중.........로딩중.........로딩중.........로딩중.........로딩중.........로딩중.........로딩중.........로딩중.........</div>
      }
      if(isError){
        return<div>에러!!!!!!!!에러!!!!!!!!에러!!!!!!!!에러!!!!!!!!에러!!!!!!!!에러!!!!!!!!에러!!!!!!!!에러!!!!!!!!에러!!!!!!!!</div>
      }
        const datalength = data.length
    return (<>
    <HeadBar></HeadBar>
        <MainContainer>
            <MainTitle textcolor='rgb(80, 45, 0)'>고민이 무엇인가요</MainTitle>
                <Link to={`/Write`} style={{ textDecoration: "none" }}>
            <CustomButton size = 'big' bg = 'rgb(80, 45, 0)' link = '/GominList'>
                <MainTitle textcolor='gold'>고민 작성하기</MainTitle>
                <CustomButton size="icon" image="/write.png"></CustomButton>
            </CustomButton>
                </Link>
                <Link to={`/GominList`} style={{ textDecoration: "none" }}>
            <CustomButton size = 'big' bg = 'rgb(80, 45, 0)'>
                <MainTitle textcolor='gold'>{datalength}개의 고민이 있습니다(보러가기)</MainTitle>
                <CustomButton size="icon" image="/check.jpg" bg='gold' />
            </CustomButton>
                </Link>
        </MainContainer>
    </>)
}

export default Main