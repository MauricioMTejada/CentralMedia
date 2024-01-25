import { LiveRadio } from '@/data/dataRadio';
import { createContext } from 'react';

interface ContextProps {
    radioSet: LiveRadio;
    sidemenuOpen: boolean;
    isAddingEntry: boolean;
    isDragging: boolean;

    // Methods
    setRadioSet: (radio: LiveRadio) => void;

    openSideMenu: () => void;
    closeSideMenu: () => void

    setIsAddingEntry: (isAdding: boolean) => void

    startDragging: () => void
    endDragging: () => void
}

export const DataContext = createContext({} as ContextProps);