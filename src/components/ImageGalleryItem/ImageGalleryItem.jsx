import React from 'react';
import PropTypes from 'prop-types';
import css from '../../styles.module.css';


export const ImageGalleryItem = ({ tags, previewImg, selectedImage }) => {
  return (
    <li className={css.ImageGalleryItem}>
        <img className={css.ImageGalleryItemImage} src={previewImg} alt={tags} onClick={selectedImage} />
    </li>
  )
}

ImageGalleryItem.propTypes = {
  tags: PropTypes.string.isRequired,
  previewImg: PropTypes.string.isRequired,
  selectedImage: PropTypes.func,
};

export default ImageGalleryItem