import React from 'react';

interface Props {
    className: string;
}

const Overview: React.FC<Props> = ({ className }) => (
    <div className={className}>
        <h1>Prettier AST Explorer</h1>
        <a href="https://github.com/sosukesuzuki/prettier-ast-explorer">
            https://github.com/sosukesuzuki/prettier-ast-explorer
        </a>
    </div>
);

export default Overview;
