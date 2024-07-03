import { useNavigate } from 'react-router-dom'
import Navbarr from '../../../components/navbar/Navbar'
import './ownerDashboard.css'
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { secretKey } from '../../../config/secretData';
import CryptoJS from 'crypto-js';
import axios from 'axios';
import { getComments, getProduct, getStory, getusers } from '../../../services/api/ApiConfig';
import Swal from 'sweetalert2';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import Form from 'react-bootstrap/Form';

import { MdDeleteForever } from "react-icons/md";

import img from '../../../asset/img/Logo/imgLogo.jpg'


export default function Dashboard(){
    const [value, setValue] = useState('1');
    const [UsersData , setUsersData]=useState([]);
    const [CommentsData , setCommentsData]=useState([]);
    const [StorysData , setStorysData]=useState([]);
    const [ProductsData , setProductsData]=useState([]);
    const [SendProduct,setSendProduct]=useState({});
    const [SendStory,setSendStory]=useState({});
    const [loadingStory , setloadingStory]= useState(false);
    const [loadingProducts , setloadingProducts]= useState(false);
    const [imageUrl, setimageUrl] = useState('');
    const [imageUrlStory , setimageUrlStory ] = useState({})
    const [uploadImg , setuploadImg] = useState(false);
    const [deactiveBtn , setdeactiveBtn] = useState(false);


    const navigate = useNavigate()
    const cookie = Cookies.get('Authorization');
    const checkcookie = Cookies.get('ownerLogin');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const DeHashFunction = ()=>{
        const newsecretKey = secretKey;
        const bytes = CryptoJS.AES.decrypt(cookie , newsecretKey);
        const decryptedText = bytes.toString(CryptoJS.enc.Utf8);
        return decryptedText
    }

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setuploadImg(true)
            setSendProduct({
                ...SendProduct ,
                image : file
            });
            console.log(SendProduct)
            const reader = new FileReader();
            reader.onloadend = () => {
              setimageUrl(reader.result);
            };
            reader.readAsDataURL(file); 
            }else{
                setuploadImg(false);
            }
    };

    const storyHandller = (e)=>{
        const file1 = e.target.files[0];
        const file2 = e.target.files[1];
        const objectUrl1 = URL.createObjectURL(file1);
        const objectUrl2 = URL.createObjectURL(file2);
        setimageUrlStory(
            {
                image1 :objectUrl1 ,
                image2 : objectUrl2
            }
        )
        console.log(file1 + file2);
        setSendStory({
            ...SendStory ,
            image1 : file1,
            image2 : file2
        })
        console.log(SendStory)
    }

    const productHandller = (e)=>{
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        
        setSendProduct({
            ...SendProduct ,
            [name] : value
        })
        console.log(SendProduct)
    }

    //post data
    const PostStory =async() => {
        const Token = DeHashFunction();
        if(!SendStory.image1 || !SendStory.image2){
            return Swal.fire({
                icon:'error',
                title:'فیلد های عکس خالی است'
            })
        }
        setloadingStory(true);
        const formData = new FormData();
        formData.append('image1', SendStory.image1);
        formData.append('image2', SendStory.image2);
        try{
        const response = await axios.post(getStory, formData , {
            headers :{
                'Content-Type': 'multipart/form-data', 
                Authorization : Token
            }
        });
        setloadingStory(false);
        console.log(response.data);
        if(response.status == 201){
            Swal.fire({
                icon:'success',
                title:'اطلاعات با موفقیت ارسال شد'
            });
        }
        }catch(err){
            setloadingStory(false);
            Swal.fire({
                icon:'error',
                title:'خطا در ارسال اطلاعات ',
                text:'!!! لطفا دوباره امتحان کنید '
            })
        }
    }

    //post Products
    const PostProducts =async() => {
        setdeactiveBtn(true)
        const Token = DeHashFunction();
        setloadingProducts(true);
        const formData = new FormData();
        formData.append('title', SendProduct.title);
        formData.append('text', SendProduct.text);
        formData.append('image', SendProduct.image);
        try{
        const response = await axios.post(getProduct, formData , {
            headers :{
                'Content-Type': 'multipart/form-data',
                Authorization : Token,
            }
        });
        setdeactiveBtn(false)
        setloadingProducts(false);
        if(response.status == 201){
            Swal.fire({
                icon:'success',
                title:'اطلاعات با موفقیت ارسال شد'
            });
        }

        }catch(err){
            setdeactiveBtn(false)
            setloadingProducts(false);
            Swal.fire({
                icon:'error',
                title:'خطا در ارسال اطلاعات ',
                text:'!!! لطفا دوباره امتحان کنید '
            })
        }
    }

    // delete function
    const questionDeleteUsers = (e)=>{
        Swal.fire({
            title: "آیا میخواهید این کاربر رو حذف کنید",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes , delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                deleteUserHandller(e);
            }
          });
    }

    const deleteUserHandller =async (e)=>{
        const Token = DeHashFunction();
        const Id = e.target.id;
        try{
        const response = await axios.delete(`${getusers}/${Id}` , {
            headers:{
                Authorization: Token
            }
        });
        console.log(response);
        if(response.status == 201){
            Swal.fire({
                icon:'success',
                title:'اطلاعات این یوزر با موفقیت حذف شد'
            })
        }
        }catch(err){
            Swal.fire({
                icon:'error',
                title:'خطا در حذف کاربر ، لطفا دوباره امتحان کنید !'
            })
        }
    }

    const questionDeleteComments = (e)=>{
        Swal.fire({
            title: "آیا میخواهید این کامنت رو حذف کنید",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes , delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                deleteCommentsHandller(e);
            }
          });
    }

    const deleteCommentsHandller =async (e)=>{
        const Token = DeHashFunction();
        const Id = e.target.id;
        try{
        const response = await axios.delete(`${getComments}/${Id}` , {
            headers:{
                Authorization: Token
            }
        });
        console.log(response);
        if(response.status == 201){
            Swal.fire({
                icon:'success',
                title:'این کامنت با موفقیت حذف شد'
            })
        }
        }catch(err){
            Swal.fire({
                icon:'error',
                title:'خطا در حذف کامنت ، لطفا دوباره امتحان کنید !'
            })
        }
    }

    const questionDeleteStory = (e)=>{
        Swal.fire({
            title: "آیا میخواهید این استوری رو حذف کنید",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes , delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                deleteStoryHandller(e);
            }
          });
    }

    const deleteStoryHandller =async (e)=>{
        const Token = DeHashFunction();
        const Id = e.target.id;
        try{
        const response = await axios.delete(`${getStory}/${Id}` , {
            headers:{
                Authorization: Token
            }
        });
        console.log(response);
        if(response.status == 201){
            Swal.fire({
                icon:'success',
                title:'این استوری با موفقیت حذف شد'
            })
        }
        }catch(err){
            Swal.fire({
                icon:'error',
                title:'خطا در حذف استوری ، لطفا دوباره امتحان کنید !'
            })
        }
    }

    const questionDeleteProduct = (e)=>{
        Swal.fire({
            title: "آیا میخواهید این محصول رو حذف کنید",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes , delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                deleteProductHandller(e);
            }
          });
    }

    const deleteProductHandller =async (e)=>{
        const Token = DeHashFunction();
        const Id = e.target.id;
        try{
        const response = await axios.delete(`${getProduct}/${Id}` , {
            headers:{
                Authorization: Token
            }
        });
        console.log(response);
        if(response.status == 201){
            Swal.fire({
                icon:'success',
                title:'این محصول با موفقیت حذف شد'
            })
        }
        }catch(err){
            Swal.fire({
                icon:'error',
                title:'خطا در حذف محصول ، لطفا دوباره امتحان کنید !'
            })

        }
    }



    const getProducts= async()=>{
        const response = await axios.get(getProduct);
        setProductsData(response.data.data);
    }

    const getStorys= async()=>{
        const response = await axios.get(getStory);
        setStorysData(response.data.data)
    }

    const getUsers= async()=>{
        const Token = DeHashFunction()
        const response = await axios.get(getusers ,{
            headers:{
                Authorization : Token 
            }
        });
        setUsersData(response.data.data)
    }

    const getComment= async()=>{
        const Token = DeHashFunction()
        const response = await axios.get(getComments,
        {
            headers:{
                Authorization : Token 
            }
        });
        setCommentsData(response.data.data)
    }

    useEffect(()=>{
        if(!cookie || !checkcookie){
            navigate('/');
        }else{
            getProducts();
            getStorys();
            getUsers();
            getComment();
        }

    } , [])
    return(
        <div className='backgrand-body-style-dashboard'>
            <Navbarr />
            <div className=''>
                <Box sx={{ width: '100%', typography: 'body1' }}>
                  <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' , backgroundColor:'white'}}>
                      <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="کامنت ها" value="1" />
                        <Tab label="استوری ها" value="2" />
                        <Tab label="خدمات" value="3" />
                        <Tab label="محصولات" value="4" />
                      </TabList>
                    </Box>
                    <TabPanel className='font-lalehar' value="1">
                        <p className='fs-2 text-center text-light'>کامنت ها</p>
                        <div className='d-flex justify-content-center flex-wrap'>
                            {
                                CommentsData.map(data =>(
                                    <div className='comments-dashboard-cart'>
                                        <p className='text-center curser-pointer'><MdDeleteForever id={data._id} onClick={questionDeleteComments} color='red' size={'2rem'}/></p>
                                        <p className='border-bottom'>موضوع : {data.title}</p>
                                        <p>متن پیام : {data.text}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </TabPanel>
                    <TabPanel className='font-lalehar text-light' value="2">
                        <p className='fs-2 text-center text-light'>استوری ها</p>
                        <div>
                            <div className='w-75 text-center m-auto'>
                                <div className='d-sm-flex justify-content-between mb-3'>
                                    <div className='mt-2'>
                                        <p>عکس بکگراند</p>
                                        <img src={imageUrlStory.image1} className='w-75 p-1 rounded'/>
                                    </div>
                                    <div className='mt-2'>
                                        <p>عکس استوری</p>
                                        <img src={imageUrlStory.image2} className='w-75 p-1 rounded'/>
                                    </div>
                                </div>
                                <input className='input-type-file-story-section' onChange={storyHandller} type='file' multiple/>
                            </div>
                            <button disabled={loadingStory} onClick={PostStory} className='send-Story-Data-BTN p-1'>{loadingStory ? 'لطفا صبر کنید ...' : 'ارسال اطلاعات'} </button>
                        </div>
                        <div className='d-flex justify-content-center flex-wrap border-top mt-4'>
                        {
                            StorysData.map(data => (
                                <div className='story-card-body-dashboard'>
                                <p className='text-center curser-pointer'><MdDeleteForever id={data._id} onClick={questionDeleteStory} color='red' size={'2rem'}/></p>
                                    <div>
                                        <p>عکس بکگراند </p>
                                        <img className='w-75' src={data.image1} />
                                    </div>
                                    <div>
                                        <p>عکس استوری</p>
                                        <img className='w-75' src={data.image2} />
                                    </div>
                                </div>
                            ))
                        }
                        </div>
                    </TabPanel>
                    <TabPanel className='font-lalehar' value="3">
                        <p className='fs-2 text-center text-light'>خدمات</p>
                        <div className='d-flex justify-content-center flex-wrap'>
                            {
                                UsersData.map(data => (
                                    <div className='product-dashboard-card'>
                                    <p className='text-center curser-pointer'><MdDeleteForever id={data._id} onClick={questionDeleteUsers} color='red' size={'2rem'}/></p>
                                        <p className='border-bottom'>نام : {data.firstName}</p>
                                        <p className='border-bottom'>نام خانوادگی : {data.lastName}</p>
                                        <p className='border-bottom'>تلفن : {data.email}</p>
                                        <p className='border-bottom'>ایمیل : {data.phoneNumber}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </TabPanel>
                    <TabPanel className='font-lalehar' value="4">
                        <p className='fs-2 text-center text-light'>محصولات</p>
                        <div>
                            <div>
                                <div className='d-md-flex justify-content-between'>
                                    <Form.Control name='title' onChange={productHandller} className='form-controller-size m-3 w-75 mx-auto' type="text" placeholder="عنوان را محصول بنویسید" />
                                    <Form.Control name='text' onChange={productHandller} className='form-controller-size m-3 w-75 mx-auto' type="text" placeholder="توضیحات محصول را بنویسید" />
                                </div> 
                                <div className='image-form-controller'>
                                    <p className='text-light text-center fs-5'>آپلود فایل</p>
                                    <img className={!imageUrl == ' ' ? 'd-flex' : 'd-none'} src={imageUrl}/>
                                    <input disabled={uploadImg} onChange={handleImageUpload} className='d-block' type="file" name="img"/>
                                    <button disabled={deactiveBtn} onClick={PostProducts} className='d-block'>{loadingProducts ? 'لطفا صبر کنید' : 'ارسال اطلاعات'} </button>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center flex-wrap'>
                        {
                            ProductsData.map(data =>(
                                <div className='product-card-dashboard text-light'>
                                    <p className='text-center curser-pointer'><MdDeleteForever id={data._id} onClick={questionDeleteProduct} className='curser-pointer' color='red' size={'2rem'}/></p>
                                    <img src={data.image} />
                                    <p className='border-bottom pb-3'>عنوان : {data.title}</p>
                                    <p>توضیحات : {data.text}</p>
                                </div>
                            ))
                        }
                        </div>
                    </TabPanel>
                  </TabContext>
                </Box>
            </div>
        </div>
    )
}