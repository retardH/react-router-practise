import React from 'react'
import ReactDOM from 'react-dom/client'
import Root,{loader as rootLoader, action as rootAction} from './Root'
import Error from './Error-Page'
import Index from './Index'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Contact,{loader as contactLoader, action as contactAction} from './ContactUI'
import EditContact,{action as editAction} from './Edit'
import {action as destroyAction} from './Destroy'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: <Error/>,
    loader: rootLoader,
    action: rootAction,
    children: [
      {index: true,element: <Index/>,},
      {
        path: 'contacts/:contactId',
        element: <Contact/>,
        loader: contactLoader,
        action: contactAction,
      },
      {
        path: 'contacts/:contactId/edit',
        element: <EditContact/>,
        loader: contactLoader,
        action: editAction,
      },
      {
        path: 'contacts/:contactId/destroy',
        action: destroyAction,
        errorElement: <div>Oops, There was an error</div>,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
