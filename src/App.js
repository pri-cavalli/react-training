import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { InitialPage } from './components/pages/InitialPage';
import { CounterPage } from './components/pages/CounterPage';
import { TaskListPage } from './components/pages/TaskListPage';
import { ThemeProvider } from '@ui5/webcomponents-react/lib/ThemeProvider';

function App() {
  return (
    <ThemeProvider withToastContainer>
      <BrowserRouter>
          <Route path="/" exact component={InitialPage} />
          <Route path="/counter" exact component={CounterPage} />
          <Route path="/task-list" exact component={TaskListPage} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
