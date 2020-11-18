import Header from './layout/Header'
import Footer from './layout/Footer'
import Main from './components/Main'

function App() {
  return (
    <div className="App flex flex-col h-screen justify-between">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
