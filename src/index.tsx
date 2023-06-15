import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import 'app/styles/reset.scss';
import { ThemeProvider } from 'app/providers/ThemeProviders';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import App from './app/App';
import 'shared/config/i18n/i18n';
import 'app/styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,
);
