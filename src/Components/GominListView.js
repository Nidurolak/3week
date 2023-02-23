import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../App.css';
import { Button } from '../Components/Style/ButtonStyle';
import { WriteBoxMiddleInput, Buttoncontainer, WriteBox, WriteBoxContainer, WriteBoxTop, WriteBoxTopInput, WriteBoxTopInputBox } from '../Components/Style/WriteStyle';
import { Headertitle } from '../Components/Style/HeaderStyle';
import { Link, useNavigate } from 'react-router-dom';
import { MainTitle } from './Style/MainContainer';
import {GominBox, GominContainer, GominListContainer, GominBoxTop, GominBoxMiddle } from './Style/GominListStyle';


function ShowList(props) {

    const LinkId = `/Detail/${props.id}`
    console.log(LinkId)
    return (<>
    <Link to = {LinkId} style={{ textDecoration: "none" }}>
            <GominBox>
                <GominBoxTop>
                    <h2>{props.title}</h2>
                    <h2>{props.username}</h2>
                </GominBoxTop>
                <GominBoxMiddle><h3>{props.contents}</h3></GominBoxMiddle>
            </GominBox>
    </Link>
    </>)
}

export default ShowList;