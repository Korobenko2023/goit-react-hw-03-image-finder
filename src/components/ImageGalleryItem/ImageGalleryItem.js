import { ModalWindow } from 'components/Modal/Modal';
import { Component } from 'react';
import { ImageGalleryImage, ImageGalleryItemLi } from './ImageGalleryItem.style';
export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  toggleModal = () => {
    this.setState(({ isModalOpen }) => ({
      isModalOpen: !isModalOpen,
      }));
    };

  render() {
    const { webformatURL, largeImageURL, tags } = this.props;
    const { isModalOpen } = this.state;
    return (
      <>
           <ImageGalleryItemLi onClick={this.toggleModal}>
              <ImageGalleryImage src={webformatURL} alt={tags} />
           </ImageGalleryItemLi>
           {isModalOpen && (
             <ModalWindow
                onClose={this.toggleModal}
                largeImageURL={largeImageURL}
                tags={tags}
                isOpen={isModalOpen}            
              />
           )}        
      </>
    );
  }
}

