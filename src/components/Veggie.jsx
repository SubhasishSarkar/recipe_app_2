import React, { useEffect, useState } from 'react'
import axiosfetch from '../axios/axios'
import styled from 'styled-components'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'


export default function Veggie() {

    const [veggie, setVeggie] = useState([])

    const getVeggie = () => {
        const check = localStorage.getItem('veggie');

        if (check) {
            setVeggie(JSON.parse(check))
        }
        else {
            axiosfetch("random", {
                params: {
                    apiKey: "b3d2694a2923454cae026f8f116725ea",
                    number: 9,
                    tags: "vegetarian"
                }
            }).then(({ data }) => {
                setVeggie(data.recipes);
                localStorage.setItem('veggie', JSON.stringify(data.recipes))

            })
        }
    }
    useEffect(() => {
        getVeggie()
    }, [])
    return (
        <Wrapper>
            <h3>Our Vegitarian Picks</h3>
            <Splide options={{
                perPage: 3,
                arrows: false,
                pagination: false,
                drag: "free",
                gap: "2rem"
            }}>
                {veggie.map((item) => {
                    return (
                        <SplideSlide key={item.id}>
                            <Card >
                                <p >{item.title}</p>
                                <img src={item.image} alt={item.title} />
                                <Gradient />
                            </Card>
                        </SplideSlide>
                    )
                })}
            </Splide>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin: 4rem 0rem
`;

const Card = styled.div`
    min-height: 25rem;
    border-radius: 2rem;
    overflow: hidden;
    position: relative;

    img{
        border-radius: 2rem;
        position: absolute;
        width: 100%;
        height:100%;
        object-fit: cover;
    }
    p{
        position: absolute;
        z-index: 10;
        left: 50%;
        bottom: 0%;
        transform: translate(-50%,0%);
        color: white;
        text-align: center;
        font-weight: 600;
        font-size: 1rem;
        height: 40%;
        display:flex;
        justify-content:center;
        align-items: center;
    }
`;

const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    width: 100%;
    height:100%;
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5))
`;