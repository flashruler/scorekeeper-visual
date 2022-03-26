import { useEffect } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import { UpdateMessage } from '../types/UpdateMessage';

export function useScoringSystemWebSocket(ip: string, eventCode: string) {
  const socketUrl = `ws://${ip}/api/v2/stream/?code=${eventCode}`

  const {
    lastJsonMessage,
    readyState,
  }: { lastJsonMessage: UpdateMessage, readyState: ReadyState } = useWebSocket(socketUrl);

  const connectionStatus = {
    [ReadyState.CONNECTING]: 'Connecting',
    [ReadyState.OPEN]: '🟢 Open',
    [ReadyState.CLOSING]: 'Closing',
    [ReadyState.CLOSED]: '🔴 Closed',
    [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
  }[readyState];

  useEffect(() => {
    console.log("Scoring System Websocket Status: ", connectionStatus)
  }, [connectionStatus])

  return lastJsonMessage;
}