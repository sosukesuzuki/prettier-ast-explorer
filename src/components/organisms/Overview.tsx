import React from 'react';

interface Props {
    className: string;
}

const Overview: React.FC<Props> = ({ className }) => (
    <div className={className}>
        <h1>AST Explorer</h1>
        <a href="https://github.com/sosukesuzuki/ast-explorer">
            https://github.com/sosukesuzuki/ast-explorer
        </a>
    </div>
);

export default Overview;
