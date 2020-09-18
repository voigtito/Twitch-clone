import React from 'react';

import streamThumbnail from '../../images/stream_thumbnail.jpg'

import {
    List,
    StreamContainer,
    StreamThumbnail,
    StreamColumn,
    StreamRow,
    StreamHeader,
    StreamAvatar,
    StreamUsername,
    StreamDescription,
    StreamCategory,
    TagRow,
    TagView,
    TagText
} from './styles';

import data from './data';

const StreamList: React.FC = ({ children }) => {

    const StreamItem: React.FC = ({ children }) => {

        return (
            <StreamContainer>
                <StreamThumbnail source={streamThumbnail} />
                <StreamColumn>
                    <StreamRow>
                        <StreamHeader>
                            <StreamAvatar />
                            <StreamUsername numberOfLines={1}>rodz_oficial</StreamUsername>
                        </StreamHeader>
                            <StreamDescription numberOfLines={1}>front-end, react native</StreamDescription>
                            <StreamCategory numberOfLines={1}>Science & Tecnology</StreamCategory>
                    </StreamRow>

                    <TagRow>
                        <TagView>
                            <TagText>Portuguese</TagText>
                        </TagView>
                        <TagView>
                            <TagText>Web Development</TagText>
                        </TagView>
                    </TagRow>
                </StreamColumn>
            </StreamContainer>
        );

    }
    return (
        <List>
            <StreamItem />
            <StreamItem />
            <StreamItem />
            <StreamItem />
        </List>
    );
};

export default StreamList;