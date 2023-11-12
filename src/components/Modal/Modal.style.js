import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1000;  
`;

export const ModalWindow = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;