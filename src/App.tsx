import {FC} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';

import {HomePage, UserPage} from './Pages';

const App: FC = () => {
    return (
        <Routes>
            <Route path={'/'} element={<HomePage/>}/>
            <Route index element={<Navigate to={'user'} state={{id: 5, name: 'vasia'}}/>}/>
            <Route path={'user'} element={<UserPage/>}/>
        </Routes>
    );
};

export default App;
