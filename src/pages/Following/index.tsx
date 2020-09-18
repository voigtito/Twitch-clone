import React from 'react';
import { FlatList, Text, View } from 'react-native';

import { Container, Wrapper, Main } from './styles';
import Header from '../../Components/Header'
import Heading from '../../Components/Heading'
import Title from '../../Components/Title'
import CategoryList from '../../Components/CategoryList'
import StreamList from '../../Components/StreamList'
import ChannelList from '../../Components/ChannelList'

interface Item {
    key: string;
    render: () => JSX.Element;
    isTitle?: boolean;
}

const Following: React.FC = () => {

    // To make some calcules when the page refreshes
    const {data, indices} = React.useMemo(() => {
        const items: Item[] = [
            {
                key: 'PAGE_HEADING',
                render: () => <Heading>Following</Heading>,
            },

            {
                key: 'FOLLOWED_CATEGORIES',
                render: () => <Title>Followed Categories</Title>,
                isTitle: true,
            },

            { key: 'C1', render: () => <CategoryList/> },

            {
                key: 'LIVE_CHANNELS',
                render: () => <Title>Live Channels</Title>,
                isTitle: true,
            },

            { key: 'C2', render: () => <StreamList/> },

            {
                key: 'CONTINUES_WATCHING',
                render: () => <Title>Continues Watching</Title>,
                isTitle: true,
            },

            { key: 'C3', render: () => <StreamList/> },

            {
                key: 'OFFLINE_CHANNELS',
                render: () => <Title>Offline Channels</Title>,
                isTitle: true,
            },

            { key: 'C4', render: () => <ChannelList/> },
        ];

        // Array that contains only the index from items that have a title
        const indices: number[] = [];

        // For each item, if it is a title, it is added to the indices array
        items.forEach((item, index) => item.isTitle && indices.push(index))

        return {
            data: items,
            indices,
        }
    }, []);

    return (
        <Wrapper>
            <Container>
                <Header/>
                <Main/>
                <FlatList<Item>
                    data={data}

                    // Items that will be render ( the Views )
                    renderItem={({ item }) => item.render()}

                    // Must have an key
                    keyExtractor={item => item.key}

                    // 
                    stickyHeaderIndices={indices}

                    // Refresh Effect
                    onRefresh={ () => {}}

                    // Just an Effect
                    refreshing={false}
                />
            </Container>
        </Wrapper>
    );
};

export default Following;