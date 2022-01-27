import './styles/App.css';
import { Button } from './components/button';
import { Header } from './components/header';
import { Image } from './components/img';
import { wolveObj } from './wolvesObj';

function App() {
  const btnTextArr = ['All', 'Beatiful', 'Creative', 'Cool', 'Awesome'];
  const { wolves } = wolveObj;
  return (
    <div className="App">
      <Header text='Put in use some Tags' />
      <div className='parentBtn'>
        {btnTextArr.map((item) => <Button text={item} />)}
      </div>
      <div className='parentImg'>
        {wolves.map((item, idx) => <Image width='18rem' height='16rem' src={item.images[1]} index={idx} />)}
      </div>
    </div>
  );
}

export default App;
