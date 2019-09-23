import React, { useState } from 'react';
import styled from 'styled-components';
import ASTPreviewer from '../organisms/ASTPreviewer';
import Overview from '../organisms/Overview';
import Configuration from '../organisms/Configuration';

const Container = styled.div`
    display: flex;
    flex-flow: column;
    width: 50%;
    height: 100vh;
    color: white;
    background-color: #1c2023;
    a {
        color: rgb(174, 149, 199);
        text-decoration: none;
    }
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
const Content = styled.div`
    overflow-y: scroll;
    padding: 10px;
    .inactive-content {
        display: none;
    }
`;

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
                        key={tab}
                        className={`tab${currentTab === tab ? ' active' : ''}`}
                        onClick={(): void => {
                            setCurrentTab(tab);
                        }}
                    >
                        {tab}
                    </Tab>
                ))}
            </Tabs>
            <Content>
                <ASTPreviewer
                    className={currentTab !== AST ? 'inactive-content' : ''}
                />
                <Overview
                    className={
                        currentTab !== OVERVIEW ? 'inactive-content' : ''
                    }
                />
                <Configuration
                    className={
                        currentTab !== CONFIGURATION ? 'inactive-content' : ''
                    }
                />
            </Content>
        </Container>
    );
};

export default Details;
