'use client';

// import { useState } from 'react';
// import { VotersSelector } from '@/components/selector/user-selector';
// import { SwitchView } from '@/components/switch/table-switch';

// import { Voter } from '@/types';
// import { useTableData } from '@/hooks/use-table-data';
import VotersTable from '@/components/table/table';
import { Voter } from '@/types';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState<Voter[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const { data }: any = await axios.get(`/api/data`);
        setData(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className='w-full flex flex-col flex-1 gap-2 items-center h-screen justify-center'>
      {/* <div className='w-full flex items-center justify-between'>
        <VotersSelector />
        <SwitchView />
      </div> */}
      <VotersTable data={data} />
      {/* <VotersTable Voters={Voters} /> */}
    </div>
  );
}
