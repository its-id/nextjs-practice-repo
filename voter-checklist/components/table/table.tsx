'use client';
import { Voter } from '@/types';
import { columns } from './columns';
import { DataTable } from './data-table';
import { useAppSelector } from '@/lib/hook';
import { useGetVotersQuery } from '@/lib/features/voter/voterApiSlice';

export default function VotersTable() {
  useGetVotersQuery({});
  const { voters } = useAppSelector((state) => state.voters);
  return (
    <div className='w-full mx-auto'>
      <DataTable columns={columns} data={voters} />
    </div>
  );
}
