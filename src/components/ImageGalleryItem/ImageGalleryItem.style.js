import styled from 'styled-components';

 export const ImageGalleryItemLi = styled.li`
  width: calc((100% - 3 * 16px) / 4); 
  font-size: 14px;   
  border-radius: 12px;
  overflow: hidden;  
`;

export const ImageGalleryImage = styled.img`
  width: 100%;
  height: 155px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.02);
  }
`;