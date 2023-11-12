import styled from 'styled-components';

 export const ImageGalleryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${p => p.theme.spasing(4)};
  margin-top: ${p => p.theme.spasing(2)};
  margin-bottom: ${p => p.theme.spasing(2)};
  padding-left: ${p => p.theme.spasing(4)};
  padding-right: ${p => p.theme.spasing(4)};
`;