import {Platform} from 'react-native'

import styled from 'styled-components/native';
import Constants from 'expo-constants';

import colors from '../../styles/colors';

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding-top: 14px;
    padding-right: 14px;
`;

// tag ( grey )
// React Native doesnt have border-radius 50%, so u have to use half of the width and heigth size
export const Avatar = styled.TouchableOpacity`
    background-color: ${colors.tag};

    width: 32px;
    height: 32px;
    border-radius: 16px;
`;

export const OnlineStatus = styled.View`
    background-color: ${colors.green};

    width: 10px;
    height: 10px;
    border-radius: 5px;
    border: 2px solid ${colors.primary};

    position: absolute;
    bottom: 0;
    right: 0;

`;

export const RightSide = styled.View`
    flex-direction: row;
    align-items: center;
`;

// TouchableOpacity is the "click" animation
export const Button = styled.TouchableOpacity`
margin-left: 20px;
`;
