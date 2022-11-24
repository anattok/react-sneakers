import Header from './components/Header';
import Card from './components/Card';
import Drawer from './components/Cart';


function App() {
  return (
    <div className="wrapper">

      <Drawer/>
      <Header/>
      <div className="content">
        <div className="content__top">
          <h1 className="content__header">Все кроссовки</h1>
          <div className="content__search">
            <img className="content__img" src="/img/search.svg" alt="Search" width={15} height={15} />
            <input className="content__input" placeholder="Поиск..." />
          </div>
        </div>
        <div className="sneakers">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
