import axios from "axios";
import { Component } from "react";
import ImageGallery from "./imageGallery/ImageGallery";
import Searchbar from "./searchbar/Searchbar";
import Loader from "./loader/Loader"

class App extends Component {
 state = {
  images: [],
  searchWord: "",
  currentPage: 0,
  loading: false,
 };

 componentDidUpdate(prevProps, prevState) {
  if (
   prevState.searchWord !== this.state.searchWord ||
   prevState.currentPage !== this.state.currentPage
  ) {
   this.handleSearchProducts();
  }
 }

 handleSearchProducts = async () => {
  const KEY_API = "21698474-fb36d7b3400c91ab3d227d6db";
  this.setState({ loading: true });

  try {
   const { data } = await axios.get(
    `https://pixabay.com/api/?q=${this.state.searchWord}&page=${this.state.currentPage}&key=${KEY_API}&image_type=photo&orientation=horizontal&per_page=12`
   );

   this.setState((prevState) => ({
    images: [...prevState.images, ...data.hits],
   }));
  } catch (error) {
   console.log(error);
  } finally {
   this.setState({ loading: false,});
  }
 };

 changeSearchWord = (word) => {
  this.setState({ searchWord: word, images: [], currentPage: 1 });
  this.handleSearchProducts();
 };

 showMore = () => {
  this.setState((prevState) => ({ currentPage: prevState.currentPage + 1 }));

  window.scrollTo({
   top: document.body.scrollIntoView,
   behavior: "smooth",
  });
 };

 render() {
  return (
   <>
    <Searchbar changeSearchWord={this.changeSearchWord} />
    <ImageGallery images={this.state.images} />
    <Loader
     loading={this.state.loading}
     showMore={this.showMore}
     currentPage={this.currentPage}
    />
   </>
  );
 }
}

export default App;
