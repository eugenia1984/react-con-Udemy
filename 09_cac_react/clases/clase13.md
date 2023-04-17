# :star: CLASE 13 - 12 APR

---

## :star: React-Router-DOM


## ¿cómo ordene el proyecto ?

- **package.json**:

```JSON
{
  "name": "router",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.10.0",
    "react-scripts": "^2.1.3",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
```

![image](https://user-images.githubusercontent.com/72580574/232355730-c3823fdc-a92e-42ae-a845-d167efb1b864.png)

- **index.js**:

```JSX
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
 </BrowserRouter>
);

reportWebVitals();
```

- **App.js**:

```JSX
import './App.css';
import ComponenteUno from './componentes/ComponenteUno';

function App() {
  return (
    <Routes>
      <Route path="/Home" element={<ComponenteUno />} />
    </Routes>
  );
}

export default App;
```

- **componentes/ComponenteUno.js**: 

```JSX
import {Link as LinkRouter} from 'react-router-dom';

const ComponenteUno = () => {
    return (
        <LinkRouter to={'./AboutMe'} />
    )
}

export default ComponenteUno;
```

---