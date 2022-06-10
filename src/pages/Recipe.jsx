import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axiosfetch from '../axios/axios'
import styled from 'styled-components'

export default function Recipe() {

    let params = useParams();
    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState("instructions");
    const fetchDetails = async () => {
        axiosfetch(`${params.id}/information`).then(({ data }) => {
            setDetails(data)
        })
    }

    useEffect(() => {
        fetchDetails()
    }, [params.id])
    return (
        <DetailWrapper>
            <div className='left'>
                <h2>{details.title}</h2>
                <img src={details.image} />
            </div>
            <Info className='right'>
                <Button className={activeTab === "instructions" ? "active" : ""} onClick={() => { setActiveTab("instructions") }}>Instruction</Button>
                <Button className={activeTab === "ingredients" ? "active" : ""} onClick={() => { setActiveTab("ingredients") }}>Ingredients</Button>

                {activeTab === 'instructions' &&
                    (<div>
                        <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
                        <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
                    </div>)
                }
                {activeTab === 'ingredients' &&
                    (<ul>
                        {details.extendedIngredients.map((i) => {
                            return <li key={i.id}>{i.original}</li>
                        })}
                    </ul>)
                }
            </Info>
        </DetailWrapper>
    )
}

const DetailWrapper = styled.div`
    margin-top: 10rem;
    margin-bottom: 5rem;
    display:flex;
    flex-wrap: wrap;
    gap: 2.5rem;
    .active{
        background: linear-gradient(35deg, #494949, #313131);
        color: white;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    h2{
        margin-bottom: 2rem;
    }
    li{
        font-size: 1.2rem;
        line-height: 2.5rem;
    }
    ul{
        margin-top: 2rem;
    }
    img{
        width:100%;
        border-radius: 1.5rem;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    .left{
        flex: 1.5 2;
    }
    .right{
        flex: 2 1;
    }
`;

const Button = styled.button`
    padding: 1rem 2rem;
    color: #313131;
    background: white;
    border: 2px solid black;
    margin-right: 2rem;
    font-weight: 600;
`;

const Info = styled.div`
    /* margin-left: 5rem; */
`;
