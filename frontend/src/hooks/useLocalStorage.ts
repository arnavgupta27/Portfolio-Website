import { useState, useEffect } from 'react';
import { storage } from '../utils';

export const useLocalStorage = <T>(
  key: string,
  initialValue: T,
  storageType: 'localStorage' | 'sessionStorage' = 'localStorage'
): [T, (value: T | ((val: T) => T)) => void] => {
  // Get from storage then parse stored json or return initialValue
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = storageType === 'sessionStorage' ? sessionStorage.getItem(key) : storage.get(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading ${storageType} key "${key}":`, error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that persists the new value to storage
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      // Allow value to be a function so we have the same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (storageType === 'sessionStorage') {
        sessionStorage.setItem(key, JSON.stringify(valueToStore));
      } else {
        storage.set(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error(`Error setting ${storageType} key "${key}":`, error);
    }
  };

  // Listen for changes to this storage key in other tabs/windows (only for localStorage)
  useEffect(() => {
    if (storageType === 'localStorage') {
      const handleStorageChange = (e: StorageEvent) => {
        if (e.key === key && e.newValue !== null) {
          try {
            setStoredValue(JSON.parse(e.newValue));
          } catch (error) {
            console.error(`Error parsing ${storageType} value for key "${key}":`, error);
          }
        }
      };

      window.addEventListener('storage', handleStorageChange);
      return () => window.removeEventListener('storage', handleStorageChange);
    }
  }, [key, storageType]);

  return [storedValue, setValue];
};
