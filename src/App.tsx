import { HomeScreen } from './components/HomeScreen';
import { Navbar } from './components/Navbar';
import GlobalStyle from './globalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <HomeScreen />
    </>
  );
}

export default App;
