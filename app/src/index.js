import App from './App';
import EnvironmentProvider from './Providers/EnvironmentProvider';
import UserStateProvider from './Providers/UserStateProvider';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <UserStateProvider>
        <EnvironmentProvider>
            <App />
        </EnvironmentProvider>
    </UserStateProvider>
);