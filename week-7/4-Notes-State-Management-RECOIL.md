## Interview Questions

1. Can we use Context API for performance optimization? 
  -> Why do you use context API to make rendering performant?
ANSWER : 
  -> NO , Context API is not used for performance optimization. It is used for sharing data between components.
  -> In the previous explain of COntextAPI ,Even though Count component is not involved while using Context API ,
     The count component re-render again and again  which needes to be optimised.
  -> WE use context API to make syntax cleaner and get rid of prop drilling.
   
# State Management

2. What is Recoil?
ANSWER : 
  -> A state manaement library for React.
     Other Poular once are :  Redux, MobX, Zustand, Jotai, etc.

  -> Recoil has a concept of Atoms.Atoms are the smallest unit of state.
  -> Atoms can be defined outside of the component.
  -> Atoms can be teleported to any component.   
  -> Performance: Recoil allows components to subscribe to individual pieces of state (atoms), which can lead to more efficient re-renders than Redux. If you have a large state tree and you're noticing performance issues with Redux,  Recoil might be a better choice.

### Things to learn in Recoil
*** RecoilRoot *** : *** <CountContext.Provider> ***
*** atom ***
*** useRecoilState *** : *** useState ***
*** useRecoilValue *** : *** count ***
*** useRecoilSetState *** : *** setCount ***
*** selector ***  