'use client';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import React from 'react';

export const SwitchView = React.memo(() => {
  return (
    <div className='flex items-center space-x-2'>
      <Switch id='airplane-mode' />
      <Label htmlFor='airplane-mode'>Show Table</Label>
    </div>
  );
});
