import React from 'react'
import ReactDOM from 'react-dom/client'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import PageNotFound from '../pages/PageNotFound.jsx'
import App from './App.jsx'
import './index.css'


const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to={'/home'} />,
        errorElement: <PageNotFound />
    },
    {
        path: '/home',
        element: <App />,
        children: [
            {
                path: '/home/pokemon',
                element: <></>,
                children: [
                    {
                        path: '/home/pokemon/dex',
                        element: <></>,
                        children: [
                            {
                                path: '/home/pokemon/dex/:pokemonIndex',
                                element: <></>,
                            }
                        ]
                    },
                    {
                        path: '/home/pokemon/damage-calculator',
                        element: <></>
                    }
                ]
            },
            {
                path: '/home/palworld',
                element: <></>,
                children: [
                    {
                        path: '/home/palworld/dex'
                    }
                ]
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
