import { atom } from 'recoil';

/* Define an atom */

export const countAtom = atom({
    // unique ID (with respect to other atoms/selectors)
    key: "countAtom",      
    default : 0
});

//  useRecoilState  == useState 
//  useRecoilValue  == count 
//  useRecoilSetState == setCount 
/*
    <RecoilRoot>    ==   <CountContextProvider>
      <Count/>  
    </RecoilRoot>   ==   <CountContextProvider>
*/