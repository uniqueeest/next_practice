'use client';

import { Tabs, InputBox, MPBox } from '../components';

export default function Home() {
  return (
    <div className="flex flex-col items-center px-5 py-6 rounded-tl-[36px] rounded-tr-[36px] shadow-wip-box">
      <Tabs defaultValue="1">
        <Tabs.List>
          <Tabs.Trigger value="1" text="전국" />
          <Tabs.Trigger value="2" text="지역별" />
          <Tabs.Trigger value="3" text="정당별" />
        </Tabs.List>
        <Tabs.Panel value="1">
          <InputBox containerStyle={{ margin: '30px 0' }} />
          <MPBox />
        </Tabs.Panel>
        <Tabs.Panel value="2">
          <div>This is</div>
        </Tabs.Panel>
        <Tabs.Panel value="3">
          <div>Sam</div>
        </Tabs.Panel>
      </Tabs>
    </div>
  );
}
