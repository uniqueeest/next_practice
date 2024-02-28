'use client';

import { motion } from 'framer-motion';

import { Button } from '../Button';
import { cn } from '../../utils';

export type ListType = {
  key: string;
  text: string;
};

interface TabType {
  tabList: ListType[];
  currentTab: string;
  handleSelectTab: (tab: string) => void;
  containerStyle?: string;
  buttonContainerStyle?: string;
  activeStyle?: string;
}

export const Tab = ({
  tabList,
  currentTab,
  handleSelectTab,
  containerStyle,
  buttonContainerStyle,
  activeStyle,
}: TabType) => {
  return (
    <ol className={cn('flex w-full h-[44px] bg-gray50', containerStyle)}>
      {tabList.map((tab, index) => {
        const isSelected = tabList[index].key === currentTab;
        return (
          <li className="flex-grow" key={`${tab.key}-${index}`}>
            <Button
              onClick={() => handleSelectTab(tab.key)}
              className={cn(
                'relative flex w-full h-10 bg-transparent text-black font-normal',
                isSelected && 'font-bold',
                buttonContainerStyle
              )}
            >
              {isSelected && (
                <motion.div
                  layoutId="SegmentedControlActive"
                  className={cn(
                    'absolute top-0 bottom-0 right-0 left-0 border-b-2 border-black rounded-[1px] z-1',
                    activeStyle
                  )}
                />
              )}
              <span className="relative z-2">{tab.text}</span>
            </Button>
          </li>
        );
      })}
    </ol>
  );
};
