import React from 'react';
import styled from 'styled-components';

function Footer(props) {
    return (
        <DivFooter>
            <div>
                <h1>
                    Github:
                    <a href="https://github.com/Sonn01coder">Sonn01coder</a>
                </h1>
            </div>
        </DivFooter>
    );
}

export default Footer;

const DivFooter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80px;
    background-color:var(--color-background);
    color: var(--color-white);
    font-size: 10px;
    border-top: 1px solid #fff;

    a {
        padding-left: 10px;
        color: var(--color-green);
    }
`