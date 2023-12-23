import { createBrowserRouter } from 'react-router-dom'
import { Default } from '../components/templates/Default'
import { Signin } from '../pages/Signin'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Default />,
    children: [
      {
        path: '/',
        element: <Signin />,
      },
    ],
  },
])
