import { Route, Routes } from 'react-router-dom';
import { ComponentDetail } from './components/pages/component-detail';
import { NotFound } from './components/pages/not-found';
import { Home } from './components/pages/home';
import { Documentation } from './components/pages/documentation';

function App() {
  return (
    <main className='flex-1'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/component/:id' element={<ComponentDetail />} />
        <Route path='/documentation' element={<Documentation />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
