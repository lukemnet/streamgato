import { useState } from 'react';
import { useCookies } from 'react-cookie';

const useCookie = (key: string, initialValue: string | object) => {
  const [cookies, setCookie] = useCookies([key]);

  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = cookies.get(key);
      return item
        ? JSON.parse(item)
        : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (key: string, value: string | Function) => {
    try {
      const valueToStore = value instanceof Function
        ? value(storedValue)
        : value;

      setStoredValue(valueToStore);
      setCookie(key, JSON.stringify(valueToStore));
    } catch (error) {
      return undefined;
    }
  };

  return [storedValue, setValue];
};

export default useCookie;
