import ObsWebSocket from "obs-websocket-js";
import { useEffect, useState } from "react";

export default new ObsWebSocket();

export function useObsWebSocket(Obs: ObsWebSocket) {
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    Obs.connect({
      address: 'localhost:4444',
      password: 'test'
    })
      .then(() => { setIsOnline(true) })
      .catch((err: any) => {
        console.log(err);
      });

    Obs.on('error', (err: any) => {
      console.error('OBS socket error:', err);
    });

    Obs.once('ConnectionClosed', () => {
      console.log('OBS Shutdown');
    });
  }, [Obs])

  useEffect(() => {
    console.log("OBS Websocket Status: ", isOnline ? "🟢 Open" : "🔴 Closed")
  }, [isOnline])

  return isOnline;
}