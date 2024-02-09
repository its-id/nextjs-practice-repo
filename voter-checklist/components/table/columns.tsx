'use client';

import { ColumnDef } from '@tanstack/react-table';
import { CaretSortIcon } from '@radix-ui/react-icons';
import { Switch } from '@/components/ui/switch';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import UserDialog from '@/components/dialog/user-dialog';
import { Voter } from '@/types';
import { Button } from '../ui/button';
// import axios from 'axios';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export const columns: ColumnDef<Voter>[] = [
  {
    accessorKey: 'status',
    // id: 'actions',
    header: 'Voted',
    cell: ({ row }) => {
      const voter = row.original;
      return (
        <>
          <Dialog>
            <DialogTrigger asChild>
              <Switch
                defaultChecked={voter.status === 'yes'}
                checked={voter.status === 'yes'}
                className={classNames(
                  voter.status === 'yes' ? 'bg-green-500' : 'bg-rose-500'
                )}
                // onCheckedChange={async (checked) => {
                //   const newStatus = checked ? 'Voted' : 'Not Voted';
                //   await axios.put(`/api/data`, {
                //     id: voter.id,
                //     status: newStatus,
                //   });
                // }}
                aria-readonly
              />
            </DialogTrigger>
            <UserDialog row={row} />
          </Dialog>
          <span className='hidden'>{row.getValue('status')}</span>
        </>
      );
    },
  },
  {
    accessorKey: 'member_name',
    header: 'Member Name',
    cell: ({ row }) => (
      <div className='w-max'>{row.getValue('member_name')}</div>
    ),
  },
  {
    accessorKey: 'membership_no',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Membership No.
          <CaretSortIcon className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className='pl-[30%]'>{row.getValue('membership_no')}</div>
    ),
  },
  {
    accessorKey: 'tower_no',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Tower No.
          <CaretSortIcon className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className='pl-[30%]'>{row.getValue('tower_no')}</div>
    ),
  },
  {
    accessorKey: 'flat_no',
    header: () => {
      return <div className='w-max'>Flat No.</div>;
    },
    cell: ({ row }) => (
      <div className='text-center'>{row.getValue('flat_no')}</div>
    ),
  },
  {
    accessorKey: 'contact_no',
    header: 'Contact No.',
  },
  {
    accessorKey: 'remarks',
    header: 'Remarks',
    cell: ({ row }) => <div className='w-max'>{row.getValue('remarks')}</div>,
  },
];
