// import { Component } from 'react';
// import ImageGallery from '../ImageGallery/ImageGallery';
// import { fetchPictures } from '../../services/api';

// const STATUS = {
//   PENDING: 'PENDING',
//   FULFILLED: 'FULFILLED',
//   REJECTED: 'REJECTED',
//   IDLE: 'IDLE',
// };

// class ContentInfo extends Component {
//   state = { pictures: null, error: '', status: STATUS.IDLE, page: 1 };

//   async componentDidUpdate(prevProps) {
//     if (prevProps.searchText !== this.props.searchText) {
//       try {
//         this.setState({ status: STATUS.PENDING });
//         const {
//           hits,
//           totalHits: totalQuantity,
//           total: quantity,
//         } = await fetchPictures(this.props.searchText, this.state.page);
//         if (quantity !== 0) {
//           return this.setState({
//             pictures: hits,
//             status: STATUS.FULFILLED,
//           });
//         }
//         throw new Error('Sorry, no images found');
//       } catch (error) {
//         this.setState({ error, status: STATUS.REJECTED });
//       }
//     }
//   }
//   render() {
//     const { error, pictures, status } = this.state;
//     const { PENDING, FULFILLED, REJECTED } = STATUS;
//     if (status === FULFILLED)
//       return pictures.length > 0 && <ImageGallery pictures={pictures} />;
//   }
// }

// export default ContentInfo;
