import 'app/styles/index.scss';
import { ReactNode } from 'react';

export const StyleDecorator = (story: () => ReactNode) => (
    <div>
        {story()}
    </div>
);
