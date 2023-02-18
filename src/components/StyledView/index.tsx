import styled from 'styled-components/native';
import ViewProps from '../../types/ViewProps';

const StyledView = styled.View<ViewProps>`
    top: 0;
    width: ${({ width }) => width || '100%'};
    height: ${({ height }) => height || '100%'};
    background-color: ${({ backgroundColor }) => backgroundColor};
`

export default StyledView