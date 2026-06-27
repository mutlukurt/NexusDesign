import React, { createContext, useContext, useState } from 'react';

export type CursorType = 'default' | 'hover' | 'project' | 'view' | 'none';

interface CursorContextProps {
  cursorType: CursorType;
  cursorText: string;
  setCursorType: (type: CursorType) => void;
  setCursorText: (text: string) => void;
}

const CursorContext = createContext<CursorContextProps | undefined>(undefined);

export const CursorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cursorType, setCursorTypeState] = useState<CursorType>('default');
  const [cursorText, setCursorTextState] = useState<string>('');

  const setCursorType = (type: CursorType) => {
    setCursorTypeState(type);
  };

  const setCursorText = (text: string) => {
    setCursorTextState(text);
  };

  return (
    <CursorContext.Provider value={{ cursorType, cursorText, setCursorType, setCursorText }}>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error('useCursor must be used within a CursorProvider');
  }
  return context;
};
