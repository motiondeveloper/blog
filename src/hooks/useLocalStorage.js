import { useState, useCallback, useEffect } from 'react';

// Similar to `useState` but with some lightweight behind-the-scenes
// writing to localStorage; also subscribes to changes in localStorage
// to allow for cross-tab changes to sync automatically.
const useStorage = (key, { bool }) => {
  const [value, setValue] = useState();

  useEffect(() => {
    const rawValue = window.localStorage.getItem(key);
    setValue(bool ? parseRawValue(rawValue) : rawValue);

    const handleChanges = e => {
      if (e.key === key) {
        setValue(bool ? parseRawValue(e.newValue) : e.newValue);
      }
    };

    window.addEventListener('storage', handleChanges);

    return () => {
      window.removeEventListener('storage', handleChanges);
    };
  }, [key, bool]);

  const updater = useCallback(
    newValue => {
      setValue(newValue);
      window.localStorage.setItem(key, newValue);
    },
    [key],
  );

  return [value, updater];
};

export default useStorage;

const parseRawValue = rawValue =>
  rawValue === 'true' || rawValue === '1'
    ? true
    : rawValue === 'false' || rawValue === '0'
    ? false
    : rawValue;
