import React from 'react'
import styled from 'styled-components';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
export default function Search() {

    const navigate = useNavigate();
    const [input, setInput] = useState("");
    const submitHandler = (e) => {
        e.preventDefault();
        navigate(`/searched/${input}`);
    };

    return (
        <FormStyle onSubmit={submitHandler}>
            <div>
                <FaSearch></FaSearch>
                <input type="text" value={input} onChange={e => setInput(e.target.value)} />
            </div>
        </FormStyle>
    )
}
const FormStyle = styled.form`
    div{
        width: 100%;
        position: relative;
    }
    input{
        border:none;
        background : linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        color: white;
        padding: 1rem 3rem;
        border: none;
        border-radius: 1rem;
        outline: none;
        width:100%
    }
    svg{
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: white;
    }
`;