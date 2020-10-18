import React, { Component } from 'react';
import styled from "styled-components";
import TypingInput from './TypingInput/TypingInput';
import TypingMainText from './TypingMainText/TypingMainText';

export default class Typing extends Component {
    render() {
        return (
            <div>
               <TypingInput />
               <TypingMainText />
            </div>
        )
    }
}
