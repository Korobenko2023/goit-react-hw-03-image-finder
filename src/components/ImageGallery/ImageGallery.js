import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"

export const ImageGallery = ({ data }) => {
    return (
        <ul>   
            {data.map(({ id, webformatURL, largeImageURL, tags }) => (
                <ImageGalleryItem
                 key={id}
                 webformatURL={webformatURL}          
                 largeImageURL={largeImageURL}
                 tags={tags}/>
            ))}
    </ul>
    )
}