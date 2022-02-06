import {FC} from 'react';

import {useAppLocation} from '../hooks';


interface IState {
    id: number
    name: string
}

const UserPage: FC = () => {
    let {state: myState} = useAppLocation<IState>()

    return (
        <div>
            <div>{myState.id}</div>
            <div>{myState.name}</div>
        </div>
    );
};

export {UserPage};
