import { Box, Center, Grid, Image, SimpleGrid, Tag, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetProductRequest, GetProductcatSuccess } from '../Redux/Recipe/Action'
import Navbar from "../Components/Navbar"
import "./button.css"
import Autocrausel from './Autocarausal'
import { useSearchParams } from 'react-router-dom'





const Foodspage = () => {
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const Data = useSelector((store) => store.RecipeReducer.Product)
    const {id} = useSearchParams();
    const catproduct = () => {
        dispatch(GetProductRequest())
        axios.get("https://peppermint-alive-acrylic.glitch.me/recipe")
            .then((res) => {
                dispatch(GetProductcatSuccess(res.data))
                console.log(res.data)
            })
    };

    const handleDataid=()=>{
        localStorage.setItem("Datas", JSON.stringify(id))
    }

    useEffect(() => {
        
        catproduct()
        
    }, [])
    return (
        <div className='Product_page'>
            <Box><Navbar /></Box>
            <div className='Product_br'>
                <Box>
                    <Autocrausel />
                </Box>
                <div className='Product_g'>

                    <div className='product_list'>
                        {loading === true ? (
                            <div className="productPage_product_side_loading">
                                <img
                                    src="https://cdn.svgator.com/images/2022/07/cute-animated-cat-tutorial.gif"
                                    alt=""
                                />
                            </div>
                        ) : (
                            Data && Data.map((item) => (
                                <Box mt={"15px"}>
                                <Grid   templateColumns='repeat(2, 1fr)' className='para'  h={"auto"}  m={"auto"} p='3' rounded='md' border={"1px solid teal"} mb={"20px"}>
                                    <Box >
                                        <Center >

                                            <Image className="slider_view "w={"450px"} h={"400px"} src={item.img} alt="Image 1" />
                                        </Center>
                                        <Center>
                                            <Text  color={"red.700"}fontSize={"26px"} fontWeight={"bold"}>{item.title}</Text>
                                        </Center>
                                         </Box>
                                         <Box>
                                       
                                            <Text mt={"15px"} textAlign={"left"} fontWeight={800}><span style={{ color: "red", fontFamily: "sans-serif", fontSize: "20px" }}>Cusine:</span>{item.cuisine}</Text>
                                       
                                            <Text mt={"15px"} textAlign={"left"} fontWeight={800}><span style={{ color: "red", fontFamily: "sans-serif", fontSize: "20px" }}>Ingredients:</span>{item.ingredients}</Text>
                                            <Text mt={"15px"} textAlign={"left"} fontWeight={800}><span style={{ color: "red", fontFamily: "sans-serif", fontSize: "20px" }}>Description:</span>{item.description}</Text>
                                            <Text mt={"15px"} textAlign={"left"} fontWeight={800}><span style={{ color: "red", fontFamily: "sans-serif", fontSize: "20px" }}>Link:</span>{item.recipe_link}</Text>
                                        <Center>
                                        </Center>
                                        <button onClick={handleDataid}className="button-53">ADD RECIPE IN MY PLATE</button>
                                    </Box>
                                </Grid>
                                </Box>
                            ))
                        )}

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Foodspage