import * as React from 'react';
import './App.css';
import { Header } from './components/app/Header';
import { inject } from 'mobx-react';
import { Store } from './models/Store';
import { useState } from 'react';
import { Footer } from './components/app/Footer';
import { BrowserRouter } from 'react-router-dom';
import { SidebarContent } from './components/app/SidebarContent';

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
          <SidebarContent 
            sidebarOpen={sidebarOpen}
            store={props.store!}
          />
          <Footer />
        </section>
      </BrowserRouter>
    </>
  );
});
