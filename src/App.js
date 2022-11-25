import Header from './components/Header';
import Card from './components/Card';
import Drawer from './components/Cart';

const arr = [
  {name: "Мужские Кроссовки Nike Blazer Mid Suede", price: 14999, imageUrl: '/img/sneakers/1.jpg' },
  {name: "Мужские Кроссовки Nike Air Max 270", price: 12999, imageUrl: '/img/sneakers/2.jpg' },
  {name: "Мужские Кроссовки Nike Blazer Mid Suede", price: 13999, imageUrl: '/img/sneakers/3.jpg' },
  {name: "Кроссовки Puma X Aka Boku Future Rider", price: 12599, imageUrl: '/img/sneakers/4.jpg' },
  {name: "Мужские Кроссовки Under Armour Curry 8", price: 1999, imageUrl: '/img/sneakers/5.jpg' },
  {name: "Мужские Кроссовки Nike Kyrie 7", price: 14999, imageUrl: '/img/sneakers/6.jpg' },
  {name: "Мужские Кроссовки Jordan Air Jordan 11", price: 12999, imageUrl: '/img/sneakers/7.jpg' },
  {name: "Мужские Кроссовки Nike LeBron XVIII", price: 16999, imageUrl: '/img/sneakers/8.jpg' },
  {name: "Мужские Кроссовки Nike Lebron XVIII Low", price: 12999, imageUrl: '/img/sneakers/9.jpg' },
  {name: "Мужские Кроссовки Nike Blazer Mid Suede", price: 2999, imageUrl: '/img/sneakers/10.jpg' },
  {name: "Кроссовки Puma X Aka Boku Future Rider", price: 13999, imageUrl: '/img/sneakers/11.jpg' },
  {name: "Мужские Кроссовки Nike Kyrie Flytrap IV", price: 12999, imageUrl: '/img/sneakers/12.jpg' }
]
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
          {arr.map((obj)=>(
            <Card 
          title = {obj.name}
          price = {obj.price }
          imageUrl = {obj.imageUrl}

          />
          ))}
          
          
        </div>
      </div>
    </div>
  );
}

export default App;
