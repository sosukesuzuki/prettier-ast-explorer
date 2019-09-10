import React, { useContext } from 'react';
import styled from 'styled-components';
import { parsers } from '../../lib/constants';
import { parserContext } from '../../lib/contexts';
import { Parser } from '../../lib/types';

const Container = styled.div``;

interface Props {
    className: string;
}

const Configuration: React.FC<Props> = ({ className }) => {
    const { parser, setParser } = useContext(parserContext);
    return (
        <Container className={className}>
            <h3>parser</h3>
            <select
                id="select-parser"
                value={parser}
                onChange={e => {
                    setParser(e.target.value as Parser);
                }}
            >
                {parsers.map(parser => (
                    <option key={parser} value={parser}>
                        {parser}
                    </option>
                ))}
            </select>
        </Container>
    );
};

export default Configuration;
