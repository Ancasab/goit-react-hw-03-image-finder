

// import { Component } from 'react';
// import basicLightbox from 'basiclightbox';
// import PropTypes from 'prop-types';
// import css from '../../styles.module.css'


// export default class Modal extends Component {

//   openModal = () => {
//     const { selectedImage, tags } = this.props;

//     // Crează un nou modal folosind basicLightbox
//     this.lightbox = basicLightbox.create(`
//       <div className=${css.Overlay}>
//         <img className=${css.Modal} src="${selectedImage}" alt="${tags || 'Imagine fără descriere'}" />
//       </div>
//     `);

//     // Deschide modalul
//     this.lightbox.show();

//     // Ascultă pentru evenimentul de închidere
//     window.addEventListener('keydown', this.handleKeyDown);
//   };

//   closeModal = () => {
//     if (this.lightbox) {
//       this.lightbox.close();
//       window.removeEventListener('keydown', this.handleKeyDown);
//       this.props.onClose();
//     }
//   };

//   handleKeyDown = e => {
//     if (e.code === 'Escape') {
//       this.closeModal();
//     }
//   };

//   componentDidMount() {
//     this.openModal(); // Deschide modalul la montare
//   }

//   componentWillUnmount() {
//     this.closeModal(); // Închide modalul la demontare
//   }

//   render() {
//     return null; // Componenta nu renderizează nimic în DOM
//   }
// }

// Modal.propTypes = {
//     selectedImage: PropTypes.string.isRequired,
//     tags: PropTypes.string,
//     onClose: PropTypes.func.isRequired,
// };

// import { Component } from 'react';
// import basicLightbox from 'basiclightbox';
// import PropTypes from 'prop-types';
// import css from '../../styles.module.css';

// export default class Modal extends Component {
//   constructor(props) {
//     super(props);
//     this.lightbox = null; // Initializează lightbox
//   }

//   openModal = () => {
//     const { selectedImage, tags } = this.props;

//     // Crează un nou modal folosind basicLightbox
//     this.lightbox = basicLightbox.create(`
//       <div class="${css.Overlay}">
//         <img class="${css.Modal}" src="${selectedImage}" alt="${tags || 'Imagine fără descriere'}" />
//       </div>
//     `);

//     // Deschide modalul
//     this.lightbox.show();

//     // Ascultă pentru evenimentul de închidere
//     window.addEventListener('keydown', this.handleKeyDown);
//   };

//   closeModal = () => {
//     if (this.lightbox) {
//       this.lightbox.close();
//       window.removeEventListener('keydown', this.handleKeyDown);
//       this.props.onClose();
//     }
//   };

//   handleKeyDown = e => {
//     if (e.code === 'Escape') {
//       this.closeModal();
//     }
//   };

//   componentDidMount() {
//     this.openModal(); // Deschide modalul la montare
//   }

//   componentWillUnmount() {
//     this.closeModal(); // Închide modalul la demontare
//   }

//   render() {
//     return null; // Componenta nu renderizează nimic în DOM
//   }
// }

// Modal.propTypes = {
//   selectedImage: PropTypes.string.isRequired,
//   tags: PropTypes.string,
//   onClose: PropTypes.func.isRequired,
// };

import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import css from '../../styles.module.css';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  static propTypes = {
    selectedImage: PropTypes.string,
    tags: PropTypes.string,
    onClose: PropTypes.func,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };
  render() {
      const { selectedImage, tags } = this.props;
      
    if (!modalRoot) {
            console.error('Modal root element not found');
            return null; // sau returnează un element fallback
        }  

    return createPortal(
      <div className={css.Overlay} onClick={this.handleBackdropClick}>
        <div className={css.Modal}>
          <img src={selectedImage} alt={tags} />
        </div>
      </div>,
      modalRoot
    );
  }
}
Modal.propTypes = {
    selectedImage: PropTypes.string.isRequired,
    tags: PropTypes.string,
    onClose: PropTypes.func.isRequired,
};
// ...
// import { Component } from 'react';
// import basicLightbox from 'basiclightbox';
// import PropTypes from 'prop-types';
// import css from '../../styles.module.css';

// export default class Modal extends Component {
//   constructor(props) {
//     super(props);
//     this.lightbox = null; // Initializează lightbox
//   }

//   openModal = () => {
//     const { selectedImage, tags } = this.props;

//     // Verifică dacă selectedImage este valid
//     if (!selectedImage) {
//       console.error('Image URL is invalid');
//       return;
//     }

//     // Crează un nou modal folosind basicLightbox
//     this.lightbox = basicLightbox.create(`
//       <div class="${css.Overlay}">
//         <img class="${css.Modal}" src="${selectedImage}" alt="${tags || 'Imagine fără descriere'}" />
//       </div>
//     `);

//     // Deschide modalul
//     this.lightbox.show();

//     // Ascultă pentru evenimentul de închidere
//     window.addEventListener('keydown', this.handleKeyDown);
//   };

//   closeModal = () => {
//     if (this.lightbox) {
//       this.lightbox.close();
//       window.removeEventListener('keydown', this.handleKeyDown);
//       this.props.onClose();
//     }
//   };

//   handleKeyDown = e => {
//     if (e.code === 'Escape') {
//       this.closeModal();
//     }
//   };

//   componentDidMount() {
//     this.openModal(); // Deschide modalul la montare
//   }

//   componentWillUnmount() {
//     this.closeModal(); // Închide modalul la demontare
//   }

//   render() {
//     return null; // Componenta nu renderizează nimic în DOM
//   }
// }

// Modal.propTypes = {
//   selectedImage: PropTypes.string.isRequired,
//   tags: PropTypes.string,
//   onClose: PropTypes.func.isRequired,
// };
