import {Platform} from 'react-native'

import styled from 'styled-components/native';
import Constants from 'expo-constants';

import colors from '../../styles/colors';

// Scroll horizontal
export const List = styled.ScrollView.attrs({
    horizontal: true,
})`

    padding: 8px 0 24px;

`;

export const CategoryContainer = styled.TouchableOpacity`
margin-top: 10px;

`;

export const CategoryImage = styled.Image`
width: 98px;
height: 136px;

`;

export const CategoryName = styled.Text`
    margin-top: 5px;
    max-width: 98px;
    color: ${colors.black};
    font-family: roboto_700;
    font-size: 13.5px;

`;

export const CategoryStatus = styled.View`
    flex-direction: row;
    align-items: center;

`;

export const RedCircle = styled.View`
    background: ${colors.red};
    width: 9px;
    height: 9px;
    border-radius: 4.5px;
`;

export const Info = styled.Text`
    margin-left: 4px;
    padding-bottom:1px;
    font-family: roboto_500;
    color: ${colors.gray};
`;