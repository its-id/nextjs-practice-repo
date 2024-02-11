import { Button } from '@/components/ui/button';
import {
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useUpdateVoterMutation } from '@/lib/features/voter/voterApiSlice';
import { useEffect, useState } from 'react';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const UserDialog = ({ row }: any) => {
  const [updateVoter] = useUpdateVoterMutation();
  const [voter, setVoter] = useState(row.original);

  useEffect(() => {
    setVoter(row.original);
  }, [row]);

  const handleSave = () => {
    updateVoter({ id: voter.id, status: voter.status, remarks: voter.remarks })
      .unwrap()
      .then(() => {
        console.log('user updated successfully!');
      })
      .catch(() => {
        console.log('seeing error updating user from user-dialog');
      });
  };

  return (
    <DialogContent className='sm:max-w-[425px]'>
      <DialogHeader>
        <DialogTitle>Change Voter Status</DialogTitle>
        {/* <DialogDescription>
          Make changes to your profile here. Click save when you're done.
        </DialogDescription> */}
      </DialogHeader>
      <div className='grid gap-4 py-4'>
        <div className='grid grid-cols-4 items-center gap-4'>
          <span className='text-left font-semibold col-span-2'>Name</span>
          <span className='col-span-2'>{voter?.member_name}</span>
        </div>
        <div className='grid grid-cols-4 items-center gap-4'>
          <p className='col-span-2'>
            <span className='font-semibold'>Membership No.</span>
            {'  '}
            <span>{voter?.membership_no}</span>
          </p>
          <p className='col-span-2'>
            <span className='font-semibold'>Tower No.</span>
            {'  '}
            <span>{voter?.tower_no}</span>
          </p>
        </div>
        <div className='grid grid-cols-4 items-center gap-4'>
          <p className='col-span-2'>
            <span className='font-semibold'>Flat No.</span>
            {'  '}
            <span>{voter?.flat_no}</span>
          </p>
          <p className='col-span-2'>
            <span className='font-semibold'>Mob No.</span>
            {'  '}
            <span>{voter?.contact_no}</span>
          </p>
        </div>
        <div className='grid grid-cols-4 items-center gap-4'>
          <Label htmlFor='name' className='text-left col-span-2'>
            Remarks
          </Label>
          <Input
            disabled
            id='name'
            name='remarks'
            placeholder='Enter remarks'
            value={voter?.remarks}
            onChange={(e) => setVoter({ ...voter, remarks: e.target.value })}
            className='col-span-2'
          />
        </div>
        <div className='flex justify-center items-center gap-4'>
          <span className='w-max'>Not Voted</span>
          <Switch
            disabled
            checked={voter?.status === 'yes'}
            className={classNames(
              voter?.status === 'yes' ? 'bg-green-500' : 'bg-rose-500',
              'text-center'
            )}
            onCheckedChange={async (checked) => {
              const newStatus = checked ? 'yes' : 'no';
              setVoter({ ...voter, status: newStatus });
            }}
            aria-readonly
          />
          <span>Voted</span>
        </div>
      </div>
      <DialogFooter>
        <DialogClose asChild>
          <Button onClick={handleSave}>Save changes</Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  );
};

export default UserDialog;
