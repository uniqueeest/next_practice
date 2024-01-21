'use client';

import { Tabs } from '../components/Tabs';
import InputBox from '../components/InputBox';

export default function Home() {
  return (
    <div className="flex flex-col items-center px-5 py-6">
      <Tabs defaultValue="1">
        <Tabs.List>
          <Tabs.Trigger value="1" text="전국" />
          <Tabs.Trigger value="2" text="지역별" />
          <Tabs.Trigger value="3" text="정당별" />
        </Tabs.List>
        <Tabs.Panel value="1">
          <InputBox containerStyle={{ marginTop: '30px' }} />
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
