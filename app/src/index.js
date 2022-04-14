import App from './App'
import EnvironmentProvider from './Providers/EnvironmentProvider'
import UserStateProvider from './Providers/UserStateProvider'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"

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