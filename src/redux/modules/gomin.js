import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../App.css';
import { Button } from '../Components/Style/ButtonStyle';
import { WriteBoxMiddleInput, Buttoncontainer, WriteBox, WriteBoxContainer, WriteBoxTop, WriteBoxTopInput, WriteBoxTopInputBox } from '../Components/Style/WriteStyle';
import { Headertitle } from '../Components/Style/HeaderStyle';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useMutation, useQuery } from "react-query";
import { deleteGomin, getGomin } from '../api/gomin';

const initialState = []
