import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../App.css';
import { Button } from '../Components/Style/ButtonStyle';
import { WriteBoxMiddleInput, Buttoncontainer, WriteBox, WriteBoxContainer, WriteBoxTop, WriteBoxTopInput, WriteBoxTopInputBox } from '../Components/Style/WriteStyle';
import { Headertitle } from '../Components/Style/HeaderStyle';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useMutation, useQuery } from "react-query";
import { deleteGomin, getGomin } from '../api/gomin';
import HeadBar from '../Components/HeadBar';
function Detail (){
    const navi = useNavigate()
    const pam = useParams()
    const deleteMutate = useMutation(deleteGomin)

    const { isLoading, isError, data } = useQuery("gomin", getGomin);
    if(isLoading){
        return<div>로딩중.........로딩중.........로딩중.........로딩중.........로딩중.........로딩중.........로딩중.........로딩중.........로딩중.........로딩중.........로딩중.........로딩중.........</div>
      }
      if(isError){
        return<div>에러!!!!!!!!에러!!!!!!!!에러!!!!!!!!에러!!!!!!!!에러!!!!!!!!에러!!!!!!!!에러!!!!!!!!에러!!!!!!!!에러!!!!!!!!</div>
      }
    const DeleteGominList = ()=>{
        deleteMutate.mutate(pam.id)
        navi("/")
    }
    const username = data.find(index => index.id == pam.id).username
    const title = data.find(index => index.id == pam.id).title
    const contents = data.find(index => index.id == pam.id).contents
    return (<>
        <HeadBar></HeadBar>
        <Buttoncontainer>
                <Button size='small' bg='rgb(80, 45, 0)' onClick={()=> DeleteGominList()}>
                    <Headertitle textcolor='gold'>삭제하기</Headertitle>
                </Button>
        </Buttoncontainer>

        <WriteBoxContainer>
            <WriteBox>
                <WriteBoxTop>
                    <WriteBoxTopInputBox>
                        <h3 color='gold'>{title}</h3>
                    </WriteBoxTopInputBox>
                    <WriteBoxTopInputBox>
                        <h3 color='gold'>{username}</h3>
                    </WriteBoxTopInputBox>
                </WriteBoxTop>
                    <WriteBoxTopInputBox>
                        <h3 color='gold'>{contents}</h3>

                    </WriteBoxTopInputBox>
            </WriteBox>
        </WriteBoxContainer>

    </>)
}

export default Detail