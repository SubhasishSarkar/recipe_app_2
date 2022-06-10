import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import axiosfetch from '../axios/axios'
import { toast } from 'react-toastify';

export default function Searched() {
    const params = useParams();
    const [searched, setSearched] = useState([])

    const getSearched = async (name) => {
        axiosfetch("complexSearch", {
            params: {
                query: name
            }
        }).then(({ data }) => {
            console.log(data.results)
            setSearched(data.results)

        }).catch((e) => {
            toast.error('Recipe unavilable');

        })
    }
    useEffect(() => {
        getSearched(params.search)
    }, [params.search])

    return (
        <Grid
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {searched.map((item) => {
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