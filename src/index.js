import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import Home from './pages/Home'
import Housing from './pages/Housing'
import About from './pages/About'
import Error from './components/Error'
import Header from './components/Header'
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    createRoutesFromElements,
    Outlet,
} from 'react-router-dom'

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Root />}>
                <Route index element={<Home />} />
                <Route path="/housing" element={<Housing />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Error />} />
            </Route>
        )
    )
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}

const Root = () => {
    return (
        <>
            <Header />
            <div>
                <Outlet />
            </div>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
