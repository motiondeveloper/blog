import React from 'react';
import styled from 'styled-components';

import { Info, AlertTriangle } from 'react-feather';
import { colors, padding } from '../theme';

const StyledCallout = styled.div`
    position: relative;
    p {
      color: ${colors.white};
    }
    margin-top: ${padding.large};
    margin-bottom: ${padding.large};
    margin-left: 0;
    margin-right: 0;
    border: 2.5px solid ${ props => props.color};
    border-radius: ${padding.small};
    padding: ${padding.large};
`;

const CalloutContent = styled.div`
    margin: 0;
    p {
        margin: 0;
    }
`;


const CalloutIcon = styled.div`
    position: absolute;
    left: -${padding.medium};
    box-shadow: 0 0 0 ${padding.xsmall} ${colors.navy};
    background: ${colors.navy};
`



const Note = ({ children }) => {
    return (
            <StyledCallout color={colors.black}>
                <CalloutContent>{ children }</CalloutContent>
            </StyledCallout>
    );
}

const Inform = ({ children }) => {
    return (
            <StyledCallout color={colors.blue}>
                <CalloutIcon>
                    <Info size={padding.large} color={colors.blue} />
                </CalloutIcon>
                <CalloutContent>{ children }</CalloutContent>
            </StyledCallout>
    );
}

const Warn = ({ children }) => {
    return (
            <StyledCallout color={colors.tan}>
                <CalloutIcon>
                    <AlertTriangle size={padding.large} color={colors.tan} />
                </CalloutIcon>
                <CalloutContent>{ children }</CalloutContent>
            </StyledCallout>
    );
}

export {
    Note,
    Inform,
    Warn,
};