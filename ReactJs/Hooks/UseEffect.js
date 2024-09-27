// ** What is the useEffect hook in react ? 

// The useEffect hook in React is used to perform side effects in function components, such as fetching data, updating the DOM, or setting up subscriptions. It runs after the component renders and can be controlled to run only on specific updates by passing dependencies.

//* useEffect is a React Hook that lets you synchronize a component with an external system.  // from react official documentation 

// useEffect(setup, dependencies?) 

// code 
import { useEffect } from 'react';
import { createConnection } from './chat.js';

function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, [serverUrl, roomId]);
  // ...
}