import React, { useState } from 'react';
import styled from 'styled-components';
import ASTPreviewer from '../organisms/ASTPreviewer';

const Container = styled.div`
    display: flex;
    flex-flow: column;
    width: 50%;
    background-color: #1c2023;
`;
const Tabs = styled.div`
    display: flex;
    height: 30px;
    line-height: 30px;
    color: black;
    background-color: white;
`;
const Tab = styled.div`
    padding: 0 10px;
    color: black;
    cursor: pointer;
    color: black;
    &.active {
        color: white;
        background-color: #1c2023;
    }
`;
const Content = styled.div``;

const AST = 'AST';
const CONFIGURATION = 'CONFIGURATION';
const OVERVIEW = 'OVERVIEW';
type TabState = typeof AST | typeof CONFIGURATION | typeof OVERVIEW;
const tabStates: [typeof AST, typeof CONFIGURATION, typeof OVERVIEW] = [
    AST,
    CONFIGURATION,
    OVERVIEW,
];

const Details: React.FC = () => {
    const [currentTab, setCurrentTab] = useState<TabState>(AST);

    return (
        <Container>
            <Tabs>
                {tabStates.map(tab => (
                    <Tab
                        className={`tab${currentTab === tab ? ' active' : ''}`}
                        onClick={() => {
                            setCurrentTab(tab);
                        }}
                    >
                        {tab}
                    </Tab>
                ))}
            </Tabs>
            <Content>{currentTab === 'AST' ? <ASTPreviewer /> : null}</Content>
        </Container>
    );
};

export default Details;
