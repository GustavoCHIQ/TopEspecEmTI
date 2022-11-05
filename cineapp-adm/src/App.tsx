import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider } from 'baseui';
import { Home } from './Pages/Home';
import { HeaderApp } from './components/HeaderApp';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Categorias } from './Pages/Categorias';
import { NovaCategoria } from './Pages/NovaCategoria';

const engine = new Styletron();

export default function App() {
  return (

    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <BrowserRouter>
          <HeaderApp />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/categorias' element={<Categorias />} />
            <Route path='/categorias/novo' element={<NovaCategoria />} />
          </Routes>
        </BrowserRouter>
      </BaseProvider>
    </StyletronProvider>
  );
}
