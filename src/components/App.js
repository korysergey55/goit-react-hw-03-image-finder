import axios from "axios";
import { Component } from "react";
import ImageGallery from "./imageGallery/ImageGallery";
import Searchbar from "./searchbar/Searchbar";

class App extends Component {
 state = {
  images: [],
  searchWord: "",
  currentPage: 1,
  search: "",
  id: "",
 };

 componentDidUpdate(prevProps, prevState) {
  this.handleSearchProducts();
 }

 handleSearchProducts = async () => {
  const KEY_API = "21698474-fb36d7b3400c91ab3d227d6db";

  try {
   const { data } = await axios.get(
    `https://pixabay.com/api/?q=${this.state.searchWord}&page=${this.state.currentPage}&key=${KEY_API}&image_type=photo&orientation=horizontal&per_page=12`
   );

   this.setState((prevState) => ({
    images: [...prevState.images, ...data.hits],
    currentPage: prevState.currentPage + 1,
   }));
  } catch (error) {
   console.log(error);
  }
 };

 changeSearchWord = (word) => {
  this.setState({ searchWord: word });
  this.handleSearchProducts();
 };

 render() {
  return (
   <>
    <Searchbar changeSearchWord={this.changeSearchWord} />
    <ImageGallery images={this.state.images} />
   </>
  );
 }
}

export default App;
