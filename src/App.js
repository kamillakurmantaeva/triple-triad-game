import Header from './components/Header';
import Slider from './components/Slider';
import Footer from './components/Footer';
import Container from './components/Container';
import Text from './components/Text';
import style from './App.module.css';

function App() {
  return (
    <>
      <Header />
      <Slider />
      <div className={style.root}>
        <Container>
          <Text>Text Text Text</Text>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default App;
