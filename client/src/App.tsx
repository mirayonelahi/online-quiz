import * as React from 'react';
import './App.css';
import { inject } from 'mobx-react';
import { Store } from './models/Store';
import { Footer } from './components/app/Basics/Footer';
import { BrowserRouter } from 'react-router-dom';
import { HeaderSidebarContent } from './components/app/Basics/HeaderSidebarContent';

interface InjecttedPageProps {
  store?: typeof Store.Type;
}

export const App = inject('store')((props: InjecttedPageProps) => {
  return (
    <>
      <BrowserRouter>
        <section className="appSection">
          <HeaderSidebarContent />
          <Footer />
        </section>
      </BrowserRouter>
    </>
  );
});
