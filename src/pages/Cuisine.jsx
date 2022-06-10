import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import axiosfetch from '../axios/axios'

export default function Cuisine() {

    let params = useParams();
    const [cuisine, setCuisine] = useState([])
    const getCuisine = async (name) => {
        axiosfetch("complexSearch", {
            params: {
                cuisine: name
            }
        }).then(({ data }) => {
            console.log(data.results)
            setCuisine(data.results)

        }).catch((e) => {
            toast.error('Recipes unavilable');

        })
    }

    useEffect(() => {
        console.log("useeffect")
        getCuisine(params.type)
    }, [params.type])

    return (
        <Grid
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {cuisine.map((item) => {
                return (
                    <Card key={item.id}>
                        <Link to={"/recipe/" + item.id}>
                            <img src={item.image} alt={item.title} />
                            <h4>{item.title}</h4>
                        </Link>
                    </Card>
                )
            })}
        </Grid>
    )
}

const Grid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(20rem,1fr));
    grid-gap: 3rem;
`;

const Card = styled.div`
    img{
        width: 100%;
        border-radius: 2rem;
    }
    a{
        text-decoration: none;
    }
    h4{
        text-align: center;
        padding: 1rem;
    }
`;