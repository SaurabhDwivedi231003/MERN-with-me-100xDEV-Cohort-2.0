import axios from "axios";
import { atom, selector } from "recoil";

// export const notifications = atom({   // other way to hardcode default values
//     key: "networkAtom",
//     default: {
//         network: 4, 
//         jobs: 6, 
//         messaging: 3, 
//         notifications: 3
//     } 
// });

// export const notifications = atom({
//     key: "networkAtom",
//     default: async () => {   // default values cannot be async
//         const res = await axios.get("https://sum-server.100xdevs.com/notifications");
//         return res.data;
//     }
// });

export const notifications = atom({
    key: "networkAtom",
    default: selector({
        key:"networkSelector",
        get :  async () => {   // here this will work as an async call to fetch data
            // await new Promise(resolve => setTimeout(resolve, 2000)); // artificial delay , not a part of this code just to show the loading
            const res = await axios.get("https://sum-server.100xdevs.com/notifications");
            return res.data;
    }}),
});

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const allNotifications = get(notifications);

        return allNotifications.network + 
        allNotifications.jobs + 
        allNotifications.notifications + 
        allNotifications.messaging
    }
})