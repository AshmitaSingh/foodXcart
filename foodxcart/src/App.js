import "./App.css";
import Header from "./components/Header";
import CardList from "./components/cardList/CardList";

function App() {
  return (
    <div className="App">
      <Header />
      <CardList />
    </div>
  );
}

/*
 * Header - Logo, Searchbar, Nav links, Cart
 * Body - Card component for Restuarants
 *         - img
 *         - Name
 *         - Ratings
 *         - Price
 *         - Desc
 *         - Add to cart button
 *Footer - Links
 *Cart -
 *
 *
 */
export default App;
