'use client';

import { Tabs } from '../components/Tabs';

export default function Home() {
  return (
    <div className="flex flex-col ">
      <Tabs defaultValue="1">
        <Tabs.List>
          <Tabs.Trigger value="1" text="첫번째 탭" />
          <Tabs.Trigger value="2" text="두번째 탭" />
          <Tabs.Trigger value="3" text="세번째 탭" />
        </Tabs.List>
      </Tabs>
    </div>
  );
}
