import { useState, useEffect } from "react";


// creation of severals phases for the typing animation component
enum TypePhase {
    TYPING,
    PAUSING,
    DELETING,
}

// Timing of the phases
const TYPING_INTERVAL = 150;
const PAUSE_TIME = 2500;
const DELETING_INTERVAL = 30;


export const useTypedTitle = (titles: string[]): {
    typedTitle: string;
    selectedTitle: string;
    phase: TypePhase;
} => {
    const [selectedIndex, setSelectedIndex] = useState(0); 
    const [phase, setPhase] = useState(TypePhase.TYPING);
    const [typedTitle, setTypedTitle] = useState('');
    
    // hook with the various phases and different cases
    useEffect(() => {
        switch(phase) {
            // TYPING PHASE
            case TypePhase.TYPING: 
                const nextTypedTitle = (titles[selectedIndex].slice(0, typedTitle.length +1));
        
                if (nextTypedTitle === typedTitle) { // if matching
                    setPhase(TypePhase.PAUSING) // Pausing phase
                   return
                }
        
                const timeout = setTimeout(() => {
                    setTypedTitle(nextTypedTitle)
                }, TYPING_INTERVAL)
                return () => { clearTimeout(timeout) }
            
            // DELETING PHASE
            case TypePhase.DELETING:
                if (!typedTitle) { //if end of the title
                    const timeout = setTimeout(() => {
                        const nextIndex = selectedIndex + 1; // next title
                        setSelectedIndex(titles[nextIndex] ? nextIndex : 0) // if there is a next title, move to the next, if not :start over
                        setPhase(TypePhase.TYPING)
                    }, DELETING_INTERVAL)
                    return () => {
                    clearTimeout(timeout)
                    }
                }

                const nextRemainingTitle = (titles[selectedIndex].slice(0, typedTitle.length - 1)); // if title then delete it 
                    
                const timeout1 = setTimeout(() => {
                    setTypedTitle(nextRemainingTitle)
                }, DELETING_INTERVAL)
                return () => {
                clearTimeout(timeout1)
                }
            
            // PAUSING PHASE
            case TypePhase.PAUSING: 
                default:
                    const timeout2 = setTimeout(() => {
                        setPhase(TypePhase.DELETING)
                      }, PAUSE_TIME)

                    return () => clearTimeout(timeout2)
        }
    }, [titles, typedTitle, selectedIndex, phase])
    
    return {
        typedTitle,
        phase,
        selectedTitle: titles[selectedIndex],
    }
}