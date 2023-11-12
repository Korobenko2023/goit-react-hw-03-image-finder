import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';
import { ImageGalleryImage, ImageGalleryItemLi } from './ImageGalleryItem.style';
export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      }));
    };

  render() {
    const { id, webformatURL, largeImageURL, tags } = this.props;
    const { showModal } = this.state;
    return (
      <ImageGalleryItemLi key={id}>
        <ImageGalleryImage src={webformatURL} alt={tags} onClick={this.toggleModal} />
        {showModal && (
          <Modal
            onClose={this.toggleModal}
            largeImageURL={largeImageURL}
            tags={tags}
          />
        )}
      </ImageGalleryItemLi>
    );
  }
}

