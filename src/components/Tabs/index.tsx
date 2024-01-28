'use client';

import { useState, useContext, createContext, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type TabContextType = {
  selectedIndex: string;
  setSelectedIndex: (value: string) => void;
};

const TabContext = createContext<TabContextType | null>(null);

interface TabsProps {
  defaultValue: string;
  children: ReactNode;
}

export const Tabs = ({ defaultValue, children }: TabsProps) => {
  const [selectedIndex, setSelectedIndex] = useState(defaultValue);

  const providerValue = { selectedIndex, setSelectedIndex };

  return (
    <TabContext.Provider value={providerValue}>
      <div className="flex flex-col items-center w-full">{children}</div>
    </TabContext.Provider>
  );
};

interface ListProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const List = ({ children, ...props }: ListProps) => {
  return (
    <div
      className="flex gap-[10px] p-1 w-fit rounded-[36px] bg-[#F3E8FF] text-[#C084FC] font-medium shadow-wip-tab"
      {...props}
    >
      {children}
    </div>
  );
};

interface TriggerProps {
  value: string;
  text: string;
}

const Trigger = ({ value, text }: TriggerProps) => {
  const context = useContext(TabContext);
  const isActive = context.selectedIndex === value;

  const handleClickTab = () => {
    context.setSelectedIndex(value);
  };

  return (
    <button
      className={twMerge(
        isActive ? 'rounded-[36px] bg-white text-[#9333EA] font-semibold' : '',
        'py-2 px-6'
      )}
      onClick={handleClickTab}
    >
      {text}
    </button>
  );
};

interface PanelProps {
  value: string;
  children: ReactNode;
}

const Panel = ({ value, children }: PanelProps) => {
  const context = useContext(TabContext);

  return (
    <div
      className={twMerge(
        context.selectedIndex === value ? 'block' : 'hidden',
        'w-full'
      )}
    >
      {children}
    </div>
  );
};

Tabs.List = List;
Tabs.Trigger = Trigger;
Tabs.Panel = Panel;
