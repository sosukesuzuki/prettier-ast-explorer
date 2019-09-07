import React from 'react';
import styled from 'styled-components';
// import { Dropdown } from '@primer/components';
// import { parsers } from '../../lib/constants';
// import { parserContext } from '../../lib/contexts';

const Container = styled.header`
    font-size: 10px;
    background-color: #3d3d3d;
    display: flex;
    justify-content: space-between;
    padding: 8px;
    h1 {
        margin: 0;
        color: white;
    }
`;

const TopNav: React.FC = () => {
    // const { parser, setParser } = useContext(parserContext);
    return (
        <Container>
            <h1>AST Explorer</h1>
            {/* <Dropdown title={`parser: ${parser}`}>
                <Dropdown.Menu direction="sw" title={`parser: ${parser}`}>
                    {parsers.map(parser => (
                        <Dropdown.Item key={parser}>
                            <div
                                onClick={() => {
                                    setParser(parser);
                                }}
                            >
                                {parser}
                            </div>
                        </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown> */}
        </Container>
    );
};

export default TopNav;
