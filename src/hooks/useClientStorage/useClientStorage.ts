// import { useState, useEffect } from 'react';
import useCookie from 'hooks/useCookie/useCookie';

const useClientStorage = (key: string, initialValue: string | object) =>
  useCookie(key, initialValue);

export default useClientStorage;
