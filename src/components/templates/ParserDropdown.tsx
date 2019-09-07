import React, { useContext } from 'react';
import styled from "styled-components";
import { Dropdown } from '@primer/components';
import { parsers } from '../../lib/constants';
import { parserContext } from '../../lib/contexts';

const Container = styled(Dropdown)`
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
`

const TopNav: React.FC = () => {
    const { parser, setParser } = useContext(parserContext);
    return (
        <Container title={`parser: ${parser}`}>
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
        </Container>
    );
};

export default TopNav;
