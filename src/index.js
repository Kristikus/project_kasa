import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import Home from './pages/Home'
import Housing from './pages/Housing'
import About from './pages/About'
import Error from './components/Error'
import Header from './components/Header'
import Footer from './components/Footer'
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    createRoutesFromElements,
    Outlet,
} from 'react-router-dom'

function App() {
    // Nested routes with JSX
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Root />}>
                <Route index element={<Home />} />
                <Route path="/logement/:id" element={<Housing />} />
                <Route path="/a-propos" element={<About />} />
                <Route path="*" element={<Error />} />
            </Route>
        )
    )
    return <RouterProvider router={router} />
}

const Root = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)