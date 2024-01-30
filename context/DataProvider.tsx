import { FC, useReducer, ReactNode  } from 'react';
import { DataContext, dataReducer } from './';
import { LiveRadio } from '@/data/dataRadio';

export interface RadioState {
    radioSet: LiveRadio;
    sidemenuOpen: boolean;
    isAddingEntry: boolean;
    isDragging: boolean;
}

const RADIO_INITIAL_STATE: RadioState = {
    radioSet: {frequency: "", image: "", nameRadio: "", origin: "", url: "", source: "local", oficialPage: ""},
    sidemenuOpen: false,
    isAddingEntry: false,
    isDragging: false,
}

interface DataProviderProps {
    children: ReactNode;
}

export const DataProvider: FC<DataProviderProps> = ({ children }) => {

    const [state, dispatch] = useReducer(dataReducer, RADIO_INITIAL_STATE)

    const chargeRadio = (setRadio: any) => {
        dispatch({ type: 'Charge Radio', payload: setRadio})
    }

    const openSideMenu = () => {
        dispatch({ type: 'UI - Open Sidebar'})
    }

    const closeSideMenu = () => {
        dispatch({ type: 'UI - Close Sidebar'})
    }

    const setIsAddingEntry = ( isAdding: boolean ) => {
        dispatch({ type:'UI - Set isAddingEntry', payload: isAdding })
    }

    const startDragging = () => {
        dispatch({ type: 'UI - Start Dragging'});
    }

    const endDragging = () => {
        dispatch({ type: 'UI - End Dragging'});
    }

    const setRadioSet = (radioSet: LiveRadio) => {
        dispatch({ type: 'Charge Radio', payload: radioSet})
    }

    return (
        <DataContext.Provider value={{
            ...state,

            //Methods
            setRadioSet,
            closeSideMenu,
            openSideMenu,

            setIsAddingEntry,

            startDragging,
            endDragging,
        }} >
            { children }
        </DataContext.Provider>
    )
}