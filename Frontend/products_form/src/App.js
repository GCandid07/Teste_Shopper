import GlobalState from './global/GlobalState';
import { Router } from './router/Router';
import { GlobalStyle } from "./Styles"

function App() {
  return (
    <GlobalState>
      <GlobalStyle />
      <Router/>
    </GlobalState>
  );
}

export default App;
