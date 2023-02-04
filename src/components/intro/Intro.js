import ReactPlayer from "react-player";
import {VscMute, VscUnmute } from "react-icons/vsc"
import styled from "styled-components";
import { useState } from "react";

function Intro(props) {
    const [isMuted, setIsMuted] = useState(true)

    return (
        <IntroContainer>   
            <ReactPlayer
                playing={true}
                loop={true}
                width='100%'
                height='100%'
                volume={1}
                mutex ={isMuted}
                url='https://vimeo.com/769839588'
                className='videoIntro'
            />
            <div className="infoIntro">
                <h1 className="heading">ORANGE x NETFLIX</h1>
                <p class="overView">ORANGE x NETFLIX Directed by Luisa Kracht</p>
            </div>

            {
                isMuted ? (
                    <VscMute 
                        className="btnVolume"
                        onClick={() => setIsMuted(prev => !prev)}
                    />
                ) : (
                    <VscUnmute
                        className="btnVolume"
                        onClick={() => setIsMuted(prev => !prev)}
                    />
                )
            }

            <div className="fadeBottom"></div>

        </IntroContainer>
    )
}

export default Intro;

const IntroContainer = styled.div`
    background-color: var(--color-background);
    position: relative;
    color: var(--color-white);
    padding-top:56%;

    .videoIntro {
        position: absolute;
        top: -10px;
        left: 0;
    }

    .infoIntro {
        position: absolute;
        top: 200px;
        left: 30px;

        @media screen and (max-width:800px) {
            top: 150px;
            left: 25px;
        }

        @media screen and (max-width:600px) {
            top: 120px;
            left: 15px;
        }

        .heading {
            font-size: 60px;
            transition: all 0.3s;

            @media screen and (max-width:800px) {
                font-size: 40px;
            }

            @media screen and (max-width:800px) {
                font-size: 24px;
            }
        }

        .overView {
            max-Width:550px;
            width: 100%;
            line-height: 1.3;
            padding-top:25px;
            font-size:18px;

            @media screen and (max-width:800px) {
                font-size: 14px;
                max-width:300px;
            }

            @media screen and (max-width:600px) {
                font-size: 10px;
                max-width: 180px;
            }
        }
    }

    .btnVolume {
        position: absolute;
        height: 35px;
        width: 35px;
        right: 10%;
        top: 40%;
        cursor: pointer;
        border-radius: 50%;
        padding: 6px;
        color: #bbb;
        border: #fff solid 1px;
        transition: all 0.3s ease;
        transform: scale(1);
        z-index:2;
        &:hover {
            color: #fff;
            transform: scale(1.2);
            background-color: rgba(255, 255, 211, 0.18);
        }

        @media screen and (max-width:800px) {
            height: 28px;
            width:28px;
            padding: 4px;
        }

        @media screen and (max-width:600px) {
            height: 24px;
            width:24px;
            padding: 1px;
        }
    }

    .fadeBottom {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(
            180deg,
            transparent,
            rgba(15,15, 15, 0.6) 80%,
            rgb(17,17,17),
            rgb(17,17,17)
        )
    }
`