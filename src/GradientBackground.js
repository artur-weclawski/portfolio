import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const GradientContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    transition: 0.5s;
    background: ${props => props.background};
`;

const GradientBackground = () => {
    const [background, setBackground] = useState('linear-gradient(#000, #000 33%, #200d1b 100%);');

    useEffect(() => {
        const observer = new MutationObserver(() => setBackground(getComputedStyle(document.documentElement).getPropertyValue('--body-background')));
        observer.observe(document.documentElement, { attributes: true });
        return () => observer.disconnect();
    }, []);

    return <GradientContainer background={background} />;
};

export default GradientBackground;