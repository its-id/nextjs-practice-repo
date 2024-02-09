'use client';

import { Voter } from '@/types';
import { columns } from './columns';
import { DataTable } from './data-table';

export default function VotersTable({ data: Voters }: { data: Voter[] }) {
  return (
    <div className='w-full mx-auto'>
      <DataTable columns={columns} data={Voters} />
    </div>
  );
}
