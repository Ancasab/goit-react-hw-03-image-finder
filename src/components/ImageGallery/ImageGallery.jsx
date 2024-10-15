import React from 'react'
import PropTypes from 'prop-types';
import css from '../../styles.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';


export const ImageGallery = ({images, selectedImage}) => {
  return (
    <ul className={css.ImageGallery}>
          {images.map(({ id, webformatURL, tags, largeImageURL }) => (
              <ImageGalleryItem
                key={id}
                  previewImg={webformatURL}
                  tags={tags}
              selectedImages={() => selectedImage(largeImageURL, tags)}
            />  
          ))}
    </ul>
  )
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
  selectedImage: PropTypes.func,
};

