import React from 'react';

const StoreContext = React.createContext(null)
export const Provider = (props:any) => {
    return<StoreContext.Provider value={props.store}>
        {props.children}
    </StoreContext.Provider>
}

export default StoreContext