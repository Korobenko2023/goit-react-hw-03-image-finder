import { Component } from "react";
import { fetchImages } from '../Services/Api';
import { GlobalStyle } from "components/Services/GlobalStyle";
import { Loader } from "components/Loader/Loader";
import { Searchbar } from "components/Searchbar/Searchbar";
import { ImageGallery } from "components/ImageGallery/ImageGallery";
import toast, { Toaster } from 'react-hot-toast';
import { Button } from "components/Button/Button";

export class App extends Component {
    state = {
        images: [],
        query: '',
        page: 1,
        largeImage: '',
        isLoading: false,
        isModalOpen: false,
        total: 0,
  }; 

  componentDidUpdate(prevProps, prevState) {
      const { query, page } = this.state;
    if (prevState.page !== page || prevState.query !== query) {
      this.getImages( query, page );
    }    
  }

   getImages = async ( query, page ) => {
    try {
      this.setState({ isLoading: true });      
      const { hits, totalHits } = await fetchImages( query, page );
        if (totalHits === 0) {
           toast.error('Sorry, there are no images matching your search query. Please try again.'); 
         return;
        } 
      this.setState((prevState) => ({
        images: [...prevState.images, ...hits],
        total: totalHits,
      }));
    } catch (error) {
       toast.error('Oops! Something went wrong. Please try again later.', error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  onSubmit = query => {
    if (this.state.query !== query) {
      this.setState({
        query,
        images: [],
        page: 1,
        total: 0,
      });
    }
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };
   
  render() {
    const { isLoading, images, total } = this.state;
    const totalPages = Math.ceil(total / images.length);
 
        
    return (
      <div>        
        <Searchbar onSubmit={this.onSubmit} /> 
        {images.length > 0 && <ImageGallery data={images} />}
        {isLoading && <Loader />}
        {totalPages > 1 && !isLoading && images.length > 0 && (
         <Button onClick={this.handleLoadMore} />
        )}               
        <GlobalStyle />
        <Toaster />
      </div>
    );
  }
}
