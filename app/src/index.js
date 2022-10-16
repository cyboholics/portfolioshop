import App from './App'
import EnvironmentProvider from './Providers/EnvironmentProvider'
import UserStateProvider from './Providers/UserStateProvider'
import { BrowserRouter } from "react-router-dom"
import ReactDOM from "react-dom"
import './index.css'

const container = document.getElementById('root')
ReactDOM.render(
    <UserStateProvider>
        <EnvironmentProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </EnvironmentProvider>
    </UserStateProvider>, container
)