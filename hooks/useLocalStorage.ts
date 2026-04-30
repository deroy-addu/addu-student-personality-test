import React from "react";

export function useLocalStorage<T>(key: string, initial?: T) {
  const getInitial = (): T | undefined => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initial;
    } catch (error) {
      console.error(error);
      return initial;
    }
  };

  const [value, setStoredValue] = React.useState<T | undefined>(getInitial);

  const set = (v: T | ((prev: T | undefined) => T)) => {
    try {
      const newValue = v instanceof Function ? v(value) : v;

      setStoredValue(newValue);
      window.localStorage.setItem(key, JSON.stringify(newValue));
    } catch (error) {
      console.error(error);
    }
  };

  return [value, set] as const;
}
