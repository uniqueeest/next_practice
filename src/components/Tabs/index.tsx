'use client';

import { createContext, useContext, useState } from 'react';
import { twMerge } from 'tailwind-merge';

const TabContext = createContext(null);

export const Tabs = ({ defaultValue, children }) => {
  const [selectedIndex, setSelectedIndex] = useState(defaultValue);

  const providerValue = { selectedIndex, setSelectedIndex };

  return (
    <TabContext.Provider value={providerValue}>
      <div>{children}</div>
    </TabContext.Provider>
  );
};

const List = ({ children }) => {
  return (
    <div>
      <div className="flex gap-[10px] p-1 w-fit rounded-[36px] bg-[#D0EAFE] text-[#0E97FF]">
        {children}
      </div>
    </div>
  );
};

const Trigger = ({ value, text }) => {
  const context = useContext(TabContext);
  const isActive = context.selectedIndex === value;

  const handleClickTab = () => {
    context.setSelectedIndex(value);
  };

  return (
    <button
      className={twMerge(
        isActive ? 'rounded-[36px] bg-white' : '',
        'py-2 px-6'
      )}
      onClick={handleClickTab}
    >
      {text}
    </button>
  );
};

Tabs.List = List;
Tabs.Trigger = Trigger;
