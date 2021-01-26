import React from "react";

const FirebaseContext = React.createContext(null);

export const useFirebase = () => React.useContext(FirebaseContext);

export default FirebaseContext;
