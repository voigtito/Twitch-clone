import React from 'react';
import { Text } from 'react-native';

import { Container, Wrapper, Main } from './styles';
import Header from '../../Components/Header'

const Following: React.FC = () => {
    return (
        <Wrapper>
            <Container>
                <Header/>
                <Main/>
            </Container>
        </Wrapper>
    );
};

export default Following;