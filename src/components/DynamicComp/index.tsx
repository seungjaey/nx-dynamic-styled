import { useState } from 'react';
import styled from '@emotion/styled';

const Container = styled.button<{ condition: boolean; }>`
  width: 100px;
  height: 100px;
  color: white;
  background-color: ${({ condition }) => condition ? 'black' : 'red'};
`;
const DynamicComp = () => {
  const [condition, setCondition] = useState(false);
  const handleClick = () => setCondition((prev) => !prev);
  return (
    <Container type="button" onClick={handleClick} condition={condition}>다이내믹</Container>
  );
}

export default DynamicComp;