'use client';

import * as React from 'react';

import { useMediaQuery } from '@/hooks/use-media-query';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import Voters from '@/lib/data.json';
import { Voter } from '@/types';

export function VotersSelector() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const [selectedVoter, setSelectedVoter] = React.useState<Voter | null>(null);

  console.log('selectedVoter', selectedVoter);

  if (isDesktop) {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant='outline' className='w-max justify-start'>
            {selectedVoter ? (
              <>{selectedVoter.member_name}</>
            ) : (
              <>Select Resident</>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-[200px] p-0' align='start'>
          <VotersList setOpen={setOpen} setSelectedVoter={setSelectedVoter} />
        </PopoverContent>
      </Popover>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant='outline' className='w-max justify-start'>
          {selectedVoter ? (
            <>{selectedVoter.member_name}</>
          ) : (
            <>Select Resident</>
          )}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className='mt-4 border-t'>
          <VotersList setOpen={setOpen} setSelectedVoter={setSelectedVoter} />
        </div>
      </DrawerContent>
    </Drawer>
  );
}

function VotersList({
  setOpen,
  setSelectedVoter,
}: {
  setOpen: (open: boolean) => void;
  setSelectedVoter: (voter: Voter | null) => void;
}) {
  return (
    <Command>
      <CommandInput placeholder='Filter Voters...' />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup>
          {Voters.map((voter) => (
            <CommandItem
              key={voter.id}
              value={voter.member_name.toLowerCase()}
              onSelect={(value) => {
                setSelectedVoter(
                  Voters.find(
                    (voter) => voter.member_name.toLowerCase() === value
                  ) || null
                );
                setOpen(false);
              }}
            >
              {voter.member_name}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
