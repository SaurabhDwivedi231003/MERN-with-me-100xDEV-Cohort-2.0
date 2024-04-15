import { useMemo } from 'react';
import './App.css';
import { networkAtom, notificationsAtom, jobsAtom, messagingAtom ,notificationsSelector } from './atoms';
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';

/* Linked Topbar using Recoil */
/*
   SELECTORS : let's say we want to calculates the total number of notifications.
   so here we need another state to store the total number of notifications, but we can use selectors to calculate the total number of notifications.
*/
function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsnotificationCount = useRecoilValue(jobsAtom);
  const notificationsCount = useRecoilValue(notificationsAtom);
  const [messagingCount, setMessagingCount] = useRecoilState(messagingAtom);

  // Without selector using useMemo : but this value cannot be used outside this componenet or selector
//   const notificationsTotalCount = useMemo(()=>{
//     return networkNotificationCount + jobsnotificationCount + notificationsCount + messagingCount;
// },[networkNotificationCount, jobsnotificationCount, notificationsCount, messagingCount])

 /* using selectors */
const  notificationsTotalCount = useRecoilValue(notificationsSelector);

  return (
    <>
      <button>Home</button>
      <button>Jobs {jobsnotificationCount >= 100 ? '99+' : jobsnotificationCount}</button>
      <button>
        My Network {networkNotificationCount}
      </button>
      <button>Messaging {messagingCount}</button>
      <button>Notification {notificationsCount}</button>
      <button onClick={() => setMessagingCount(c => c + 1)}>Me {notificationsTotalCount}</button>
    </>
  );
}

export default App;