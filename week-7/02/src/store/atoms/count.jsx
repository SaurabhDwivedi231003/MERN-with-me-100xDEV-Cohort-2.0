import { atom , selector} from 'recoil';

/* Define an atom */

export const countAtom = atom({
    // unique ID (with respect to other atoms/selectors)
    key: "countAtom",      
    default : 0
});

//  useRecoilState  == useState 
//  useRecoilValue  == count 
//  useSetRecoilState == setCount 
/*
    <RecoilRoot>    ==   <CountContextProvider>
      <Count/>  
    </RecoilRoot>   ==   <CountContextProvider>
*/ 

/* This depends on countAtom. */
export const isEvenSelector = selector({
  key: 'isEvenSelector',
  get: ({get}) => {
    const count = get(countAtom);  // depends on countAtom state
    return count % 2 === 0;
  }
});

/*

    const count = get(countAtom);   depends on 'countAtom'
  
    this is similar to : 

    useMemo(()=>{

    }, [count])

*/