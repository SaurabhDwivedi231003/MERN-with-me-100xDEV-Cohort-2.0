import { atomFamily, selector, selectorFamily } from "recoil";
import axios from "axios";

// this async is only possible here , if we check atoms.js of 'atomFamily' folder , we can see that it is not possible to use async there
// Selector family is required because we have to hit the backend cslls.
export const todosAtomFamily = atomFamily({
  key: 'todosAtomFamily',
  default: selectorFamily({
    key: "todoSelectorFamily",
    get: (id) => async ({ get }) => {  
      const res = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`);
      return res.data.todo;
    },
  })
});

// Above code is production code , but below code have slightly more understandable code.
// export const todosAtomFamily = atomFamily({
//   key: 'todosAtomFamily',
//   default: selectorFamily({
//     key: "todoSelectorFamily",
//     get: function(id) {
//       return async function ({get}) {
//         const res = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`);
//         return res.data.todo;
//       }
//     }
//   })
// });








// Just o think of remember for Atom we have selector and for atomFamily we have selectorFamily. 
// In the Asynchronous Data Queries , our code looked something like below as we used selctor.
// Below code shows HOW we can make async call from backend usimg selector. (because we can not directly use async)
// export const notifications = atom({
//   key: "networkAtom",
//   default: selector({
//       key:"networkSelector",
//       get :  async () => {  
//           const res = await axios.get("https://sum-server.100xdevs.com/notifications");
//           return res.data;
//   }}),
// });
