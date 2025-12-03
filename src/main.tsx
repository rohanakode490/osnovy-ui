import { StrictMode, Suspense } from 'react'
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={"Loading..."}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense>
  </StrictMode>,
)
