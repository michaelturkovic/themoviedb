import React, { FC, useState, useEffect } from 'react';
import { Router } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Header } from 'src/components';
import { AppRouter } from 'src/AppRouter';
import history from 'src/utils/history';
import '../styles/app.scss';
import { checkSession } from 'src/utils';
import { useMoviesStore, useAppStore } from 'src/hooks';

export const App: FC = (): JSX.Element => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { getSessionId, setSessionId } = useAppStore();
  const { getGenres } = useMoviesStore();

  useEffect(() => {
    let guestSession: string | null = localStorage.getItem('guestSession');
    if (guestSession !== null) {
      let session = JSON.parse(guestSession);
      let sessionValid = checkSession(session.expiresAt);
      if (!sessionValid) getSessionId();
      else setSessionId(session.sessionId);
    } else getSessionId();

    getGenres();
    
    window.addEventListener('resize', updateView);
    return () => window.removeEventListener('resize', updateView);
  }, []);

  const updateView = () => {
    if (window.innerWidth >= 576) setSidebarOpen(false);
  };

  return (
    <Router history={history}>
      <div className='app'>
        {sidebarOpen && (
          <div className='backdrop' onClick={() => setSidebarOpen(false)} />
        )}
        <Sidebar
          open={sidebarOpen}
          onItemClick={() => sidebarOpen && setSidebarOpen(false)}
        />
        <div className='app__main'>
          <Header onMenuBtnClick={() => setSidebarOpen(true)} />
          <div className='app__content'>
            <AppRouter />
          </div>
        </div>
      </div>
    </Router>
  );
};
