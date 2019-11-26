import styled from "styled-components"
import { padding } from '../theme';

const HorizontalList = styled.ul`
    display: flex;
    flexWrap: wrap;
    justifyContent: start;
    listStyle: none;
    padding: 0;
    margin: 0;
    marginTop: ${padding.large};
    color: colors.grey;
`

export default HorizontalList;