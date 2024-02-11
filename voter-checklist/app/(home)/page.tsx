import VotersTable from '@/components/table/table';

export default function Home() {
  return (
    <div className='w-full flex flex-col flex-1 gap-2 items-center h-screen justify-center'>
      <VotersTable />
    </div>
  );
}
