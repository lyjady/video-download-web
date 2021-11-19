import React from 'react';
import {Welcome} from "./views/welcome/Welcome";
import './App.css'
import 'antd/dist/antd.css'
import {useRoutes} from "react-router-dom";
import {Main} from "./views/main/Main";
import {PronHub} from "./views/PronHub/PronHub";
import {NineOnePron} from "./views/91Pron/NineOnePron";

export type Video = {
  id: string,
  name: string,
  size: number
}

function App() {
  return useRoutes([
    {
      path: '/welcome',
      element: <Welcome />,
    },
    {
      path: '/download',
      element: <Main />,
      children: [
        {
          path: 'pronhub',
          element: <PronHub />,
        },
        {
          path: '91pron',
          element: <NineOnePron />,
        }
      ]
    },
    {
      path: '/*',
      element: <Welcome />
    }
  ])
}

export default App;
