import { Route, Routes } from "react-router-dom";
import { LandingPage } from "./components/pages/landing-page";
import { ComponentDetail } from "./components/pages/component-detail";
import { Documentation } from "./components/pages/documentation";
import { NotFound } from "./components/pages/not-found";

function App() {
  return (
    <main className="flex-1">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/component/:id" element={<ComponentDetail />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
