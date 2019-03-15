import * as React from 'react';
import './App.css';
import { Header } from './components/app/Header';
import { inject } from 'mobx-react';
import { Store } from './models/Store';
import { useState } from 'react';
import { Sidebar } from './components/app/Sidebar';
import { Footer } from './components/app/Footer';
import { BrowserRouter } from 'react-router-dom';
import { Content } from './components/app/Content';

interface InjecttedPageProps {
  store?: typeof Store.Type;
}

export const App = inject('store')((props: InjecttedPageProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <BrowserRouter>
        <section className="appSection">
          <Header
            sidebarOpen={sidebarOpen}
            setSidebarOpen={(e) => setSidebarOpen(!sidebarOpen)}
          />
          <Sidebar
            sidebarOpen={sidebarOpen}
            setSidebarOpen={(e) => setSidebarOpen(!sidebarOpen)}
          />
          <Content 
            sidebarOpen={sidebarOpen}
            setSidebarOpen={(e) => setSidebarOpen(!sidebarOpen)}
            store={props.store!}
          />
          <Footer />
        </section>
      </BrowserRouter>
    </>
  );
});
