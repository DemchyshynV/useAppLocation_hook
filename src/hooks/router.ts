import {useLocation} from 'react-router-dom';

interface ILocationParams<T> {
    pathname: string;
    state: T;
    search: string;
    hash: string;
    key: string;
}

const useAppLocation = <T>() => useLocation() as ILocationParams<T>

export {
    useAppLocation
}
