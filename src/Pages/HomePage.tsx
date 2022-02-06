import {FC} from 'react';
import {Outlet} from "react-router-dom";

const HomePage:FC = () => {
    return (
        <div>
            <Outlet/>
        </div>
    );
};

export {HomePage};
