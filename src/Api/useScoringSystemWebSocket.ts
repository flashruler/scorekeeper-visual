import { useEffect } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import { UpdateMessage } from '../Types/UpdateMessage';

export function useScoringSystemWebSocket() {
  const socketUrl = 'ws://localhost/api/v2/stream/?code=tes'

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