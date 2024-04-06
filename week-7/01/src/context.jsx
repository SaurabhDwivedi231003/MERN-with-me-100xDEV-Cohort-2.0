import { createContext } from "react";

/*  This is a teleporter we created. */
export const CountContext = createContext({
    count: 0,
    setCount: () => {}
});