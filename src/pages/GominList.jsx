import { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import ShowList from '../Components/GominListView';
import { Button } from '../Components/Style/ButtonStyle';
import { GominBox, GominContainer, GominListContainer } from '../Components/Style/GominListStyle';
import { MainTitle } from '../Components/Style/MainContainer';
import { useQuery } from "react-query";
import { getGomin } from '../api/gomin';
import HeadBar from '../Components/HeadBar';
function GominList (){

    const { isLoading, isError, data } = useQuery("gomin", getGomin);
    if(isLoading){
        return<div>로딩중.........로딩중.........로딩중.........로딩중.........로딩중.........로딩중.........로딩중.........로딩중.........로딩중.........로딩중.........로딩중.........로딩중.........</div>
      }
      if(isError){
        return<div>에러!!!!!!!!에러!!!!!!!!에러!!!!!!!!에러!!!!!!!!에러!!!!!!!!에러!!!!!!!!에러!!!!!!!!에러!!!!!!!!에러!!!!!!!!</div>
      }
    
    return (<>
    <HeadBar></HeadBar>
        <GominContainer>
            <MainTitle textcolor='rgb(80, 45, 0)'>고민이 무엇인가요</MainTitle>
        </GominContainer>
        <GominListContainer>
            {data.map((item) => {return (<ShowList
                key = {item.id} id = {item.id} title = {item.title} username = {item.username} contents = {item.contents}
            />)})}
        </GominListContainer>
    </>)
}

export default GominList