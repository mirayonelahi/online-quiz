import * as React from 'react';
import './App.css';
import { inject } from 'mobx-react';
import { Store } from './models/basics/Store';
import { Footer } from './components/app/basics/Footer';
import { BrowserRouter } from 'react-router-dom';
import { HeaderSidebarContent } from './components/app/basics/HeaderSidebarContent';

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
