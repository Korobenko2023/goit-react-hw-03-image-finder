import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import { ImageGalleryList } from "./ImageGallery.style"

export const ImageGallery = ({ images }) => {
    return (   
        <div className="gallery">
          <ImageGalleryList >
            {images.map(({ id, webformatURL, largeImageURL, tags }) => (
                <ImageGalleryItem
                 key={id}
                 webformatURL={webformatURL}
                 largeImageURL={largeImageURL}
                 tags={tags}/>
            ))}
            </ImageGalleryList>    
       </div>
    )
}

