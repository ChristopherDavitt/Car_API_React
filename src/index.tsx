import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@mui/styles';
import { Provider } from 'react-redux'
import { Home, Dashboard, Signin  } from './components';
import './styles.css';
import { theme } from './Theme/themes'
import { store } from './redux/store'


ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path='/' element={<Home title={'Ranger Cars'} />} />
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path='/Signin' element={<Signin />} />
        </Routes>
      </Router>
    </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
