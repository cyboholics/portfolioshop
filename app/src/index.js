import App from './App'
import EnvironmentProvider from './Providers/EnvironmentProvider'
import UserStateProvider from './Providers/UserStateProvider'
import { BrowserRouter } from "react-router-dom"
import { createRoot } from 'react-dom/client'
import './index.css'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
    <UserStateProvider>
        <EnvironmentProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </EnvironmentProvider>
    </UserStateProvider>
)