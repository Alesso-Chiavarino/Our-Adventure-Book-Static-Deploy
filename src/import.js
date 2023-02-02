import { useState, useEffect, useRef, createContext, useContext } from 'react'
import { BrowserRouter, Routes, Route, useNavigate, useLocation, useParams, Link, NavLink } from "react-router-dom";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Form from "./components/Form/Form";
import AdventureProvider from "./context/AdventureContext";
import AdventuresContainer from './components/AdventuresContainer/AdventuresContainer';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Adventures from "./pages/Adventures/Adventures";
import SearchProvider, { useSearch } from "./context/SearchContext";
import AdventureModal from "./components/AdventureModal/AdventureModal";
import Banner from './components/Banner/Banner';
import Task from './components/Task/Task';
import TasksContainer from "./components/TasksContainer/TasksContainer";
import TaskProvider from "./context/TaskContext";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskDetail from "./components/TaskDetail/TaskDetail";
import Letter from './components/Letter/Letter';
import LettersContainer from "./components/LettersContainer/LettersContainer";
import LetterProvider from "./context/LetterContext";
import LetterDetail from "./components/LetterDetail/LetterDetail";
import LetterForm from "./components/LetterForm/LetterForm";
import Brand from './components/Brand/Brand'
import InputSearch from './components/InputSearch/InputSearch'
import Adventure from './components/Adventure/Adventure';
import TypeWriter from './components/TypeWriter/TypeWriter';
import ArticlesContainer from './pages/ArticlesContainer/ArticlesContainer';
import Article from './components/Article/Article';
import Timeline from './pages/Timeline/Timeline';
import axios from "axios";
import { getAdventuresRequest, getAdventureRequest, createAdventureRequest, deleteAdventureRequest, updateAdventureRequest, getLimitedAdventuresRequest, getTotalAventuresRequest } from './api/adventure.api'
import { getLettersRequest, getLetterRequest, createLetterRequest, updateLetterRequest, deleteLetterRequest } from "./api/Letter.api";
import { getTasksRequest, getTaskRequest, createTaskRequest, updateTaskRequest, deleteTaskRequest } from "./api/Task.api"
import { useAdventure } from "./context/AdventureContext";
import { useLetter } from './context/LetterContext';
import { useTask } from './context/TaskContext';
import { ToastContainer, toast } from 'react-toastify';
import { Typewriter } from 'react-simple-typewriter'
import { ThreeDots } from 'react-loader-spinner'
import { FaTrashAlt, FaPlaneDeparture, FaBeer, FaImage, FaPlus, FaListAlt } from 'react-icons/fa'
import { AiFillEdit, AiFillHeart, AiFillHome, AiOutlineSearch } from 'react-icons/ai'
import { BsFillCalendarDateFill, BsFillXSquareFill, BsFillCheckSquareFill, BsFillExclamationTriangleFill } from 'react-icons/bs'
import { MdFavorite, MdImageNotSupported, MdPhotoLibrary, MdArticle, MdTimeline } from 'react-icons/md'
import { TbArrowBackUp } from 'react-icons/tb'
import { BiLinkAlt } from 'react-icons/bi'
import { VscEmptyWindow } from 'react-icons/vsc'
import { GrMail } from 'react-icons/gr'
import { IoIosAlbums, IoIosOpen, IoIosCreate } from 'react-icons/io'
import { GiWhiteBook } from 'react-icons/gi'
import { RiSendPlaneFill } from 'react-icons/ri'
import { RxUpdate, RxDoubleArrowLeft, RxDoubleArrowRight } from 'react-icons/rx'
import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im'
import { SiTodoist } from 'react-icons/si'
import { FiArrowRight } from 'react-icons/fi'

export {
    //react
    useState,
    useEffect,
    useRef,
    createContext,
    useContext,
    //router
    BrowserRouter,
    Routes,
    Route,
    useNavigate,
    useLocation,
    useParams,
    Link,
    NavLink,
    //components
    Home,
    NotFound,
    Form,
    AdventureProvider,
    Navbar,
    Footer,
    Adventures,
    SearchProvider,
    AdventureModal,
    TasksContainer,
    TaskProvider,
    TaskForm,
    TaskDetail,
    Letter,
    LettersContainer,
    LetterProvider,
    LetterDetail,
    LetterForm,
    Adventure,
    TypeWriter,
    Task,
    Brand,
    InputSearch,
    AdventuresContainer,
    Banner,
    ArticlesContainer,
    Article,
    Timeline,
    //context
    useAdventure,
    useSearch,
    useLetter,
    useTask,
    //api
    axios,
    createAdventureRequest,
    deleteAdventureRequest,
    getAdventureRequest,
    getAdventuresRequest,
    getLimitedAdventuresRequest,
    getTotalAventuresRequest,
    updateAdventureRequest,
    createLetterRequest,
    deleteLetterRequest,
    getLetterRequest,
    getLettersRequest,
    updateLetterRequest,
    getTasksRequest,
    getTaskRequest, 
    createTaskRequest, 
    updateTaskRequest, 
    deleteTaskRequest,
    //icons
    AiFillEdit,
    AiFillHome,
    AiFillHeart,
    AiOutlineSearch,
    FaTrashAlt,
    FaPlaneDeparture,
    FaBeer,
    FaImage,
    FaPlus,
    FaListAlt,
    MdFavorite,
    MdImageNotSupported,
    MdPhotoLibrary,
    MdArticle,
    MdTimeline,
    BsFillCalendarDateFill,
    BsFillExclamationTriangleFill,
    BsFillXSquareFill,
    BsFillCheckSquareFill,
    RxDoubleArrowLeft,
    RxDoubleArrowRight,
    IoIosAlbums,
    IoIosOpen,
    IoIosCreate,
    ImCheckboxUnchecked,
    ImCheckboxChecked,
    TbArrowBackUp,
    BiLinkAlt,
    VscEmptyWindow,
    GrMail,
    GiWhiteBook,
    RiSendPlaneFill,
    RxUpdate,
    SiTodoist,
    FiArrowRight,
    //toastify
    ToastContainer,
    toast,
    //react-loader-spinners
    ThreeDots,
    //react-simple-type-writer
    Typewriter,


}