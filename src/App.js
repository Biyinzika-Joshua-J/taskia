import './App.css';
import Hero from './components/hero/hero';
import Service from './components/services/service';
import Importance from './components/importance/importance';
import Demo from './components/Demo/demo';
import Counter from './components/counter/counter';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
        <Hero/>
        <Service/>
        <Importance/>
        <Demo/>
        <Counter/>
        <Footer/>
    </div>
  );
}

export default App;
