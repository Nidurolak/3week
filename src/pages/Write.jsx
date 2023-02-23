import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../App.css';
import { Button } from '../Components/Style/ButtonStyle';
import { WriteBoxMiddleInput, Buttoncontainer, WriteBox, WriteBoxContainer, WriteBoxTop, WriteBoxTopInput, WriteBoxTopInputBox } from '../Components/Style/WriteStyle';
import { Headertitle } from '../Components/Style/HeaderStyle';
import { Link, useNavigate } from 'react-router-dom';
import { QueryClient, useMutation, useQuery } from 'react-query';
import { addGomin, getGomin } from '../api/gomin';
import { v4 as uuidv4 } from "uuid";
import HeadBar from '../Components/HeadBar';

function Write() {
    const navi = useNavigate()
    const querycla = new QueryClient()
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");
    const [username, setName] = useState("");
    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };
    const handleContentsChange = (event) => {
        setContents(event.target.value);
    };
    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    const mutation = useMutation(addGomin)

    const AddGominList = (event) => {

        const newGomin = {
            id: uuidv4(),
            title,
            contents,
            username,
        }

        mutation.mutate(newGomin)
        navi("/")
    }


    const { isLoading, isError, data } = useQuery("gomin", getGomin);
    if(isLoading){
        return<div>로딩중.........로딩중.........로딩중.........로딩중.........로딩중.........로딩중.........로딩중.........로딩중.........로딩중.........로딩중.........로딩중.........로딩중.........</div>
      }
      if(isError){
        return<div>에러!!!!!!!!에러!!!!!!!!에러!!!!!!!!에러!!!!!!!!에러!!!!!!!!에러!!!!!!!!에러!!!!!!!!에러!!!!!!!!에러!!!!!!!!</div>
      }

    return (<>
    <HeadBar></HeadBar>
        <Buttoncontainer>
            <Button size='small' bg='rgb(80, 45, 0)' onClick={() => AddGominList()}>
                <Headertitle textcolor='gold'>작성하기</Headertitle>
            </Button>
        </Buttoncontainer>
        <form onSubmit={AddGominList}>
            <WriteBoxContainer>
                <WriteBox>
                    <WriteBoxTop>
                        <WriteBoxTopInputBox>
                            <h3 color='gold'>고민제목</h3>
                            <WriteBoxTopInput onChange={handleTitleChange} placeholder='제목을 입력해주세요. (10자 이내)' maxLength={10}></WriteBoxTopInput>
                        </WriteBoxTopInputBox>
                        <WriteBoxTopInputBox>
                            <h3 color='gold'>작성자명</h3>
                            <WriteBoxTopInput onChange={handleNameChange} placeholder='이름을 입력해주세요. (5자 이내)' maxLength={5}></WriteBoxTopInput>
                        </WriteBoxTopInputBox>
                    </WriteBoxTop>
                    <WriteBoxTopInputBox>
                        <h3 color='gold'>고민 내용</h3>
                        <WriteBoxMiddleInput onChange={handleContentsChange} placeholder='내용을 입력해주세요. (200자 이내)' maxLength={200}></WriteBoxMiddleInput>

                    </WriteBoxTopInputBox>
                </WriteBox>
            </WriteBoxContainer>
        </form>
    </>)
}

export default Write