import React from 'react';
import '../../styles/animation.css';
import styled from 'styled-components';
import Fonts from '../../styles/fonts';
import Colors from '../../styles/colors';
import arrowDown from '../../assets/img/down-arrow.png';
import { CSSTransition } from 'react-transition-group';
const Next = ({handleIndex,check}) => {
    return(
        <CSSTransition
        in={check}
        timeout={500}
        classNames="button"
        unmountOnExit
        >
        <Button className="next" onClick={handleIndex}>
            étape suivante {check}
        </Button>
        </CSSTransition>
    )
};

const Button = styled.button`
position: absolute;
bottom: 2vh;
left: 50%;
transform: translateX(-50%);
text-transform: uppercase;
cursor: pointer;
font:${Fonts.text};
border:0;
font-size: 12px;
background:0;
font-weight:bolder;
color:${Colors.text};
outline: 0;
@media screen and (min-width: 768px){
    bottom: 28px;
    bottom: calc(1.8vw + 16px);
    font-size: 14px;
    font-weight: 400;
}
@media screen and (min-width: 1100px){
    bottom: 3vw;
}
:after{
    background-image:url('${arrowDown}');
    width: 16px;
    content: " ";
    position: absolute;
    right: -24px;
    height:16px;
    line-height: normal;
    animation: down 1.5s linear infinite;
}

`
export default Next;