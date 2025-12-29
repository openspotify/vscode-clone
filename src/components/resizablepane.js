import React from 'react';
import styled from 'styled-components';
import { ResizableBox } from 'react-resizable';

const CustomHandle = styled.div`
  height: 100%;
  cursor: col-resize;
  width: 2px;
`;

const ResizablePane = ({ children, width, onResize }) => (
  <ResizableBox
    onResize={onResize}
    style={{ background: 'black', display: 'flex' }}
    width={width}
    handle={<CustomHandle />}
    handleSize={[8, 8]}
  >
    {children}
  </ResizableBox>
);

export default ResizablePane;
