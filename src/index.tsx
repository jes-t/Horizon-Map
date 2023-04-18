import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import 'app/styles/reset.scss';
import { ThemeProvider } from 'app/providers/ThemeProviders';
import App from './app/App';
import 'shared/config/i18n/i18n';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>,
);
