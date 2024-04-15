import { atom, selector } from 'recoil';

export const networkAtom = atom({
    key : 'networkAtom',
    default :104 
});
export const jobsAtom = atom({
    key : 'jobsAtom',
    default :15
});
export const notificationsAtom = atom({
    key : 'notificationskAtom',
    default :17
});
export const messagingAtom = atom({
    key : 'messagingAtom',
    default :11
});

export const notificationsSelector = selector({
    key : 'notificationsTotalCount',
    get : ({get}) =>{
        const networkCount = get(networkAtom);
        const jobsNotificationCount = get(jobsAtom);
        const notificationsCount = get(notificationsAtom);
        const messagingCount = get(messagingAtom);
        return networkCount + jobsNotificationCount + notificationsCount + messagingCount;
    }
});