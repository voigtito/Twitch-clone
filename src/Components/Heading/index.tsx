import React from 'react';
import { Text } from 'react-native'
import { Container } from './styles';

const Heading: React.FC = ({ children }) => {
    return (
        <Container>
            <Text>{children}</Text>
        </Container>
    );
};

export default Heading;