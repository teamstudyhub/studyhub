'use client'
import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function BasicDatePicker() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} >
      <DemoContainer sx={{border:0}}  components={['DatePicker']}>
        <DatePicker  className='bg-white h-auto rounded-[4px] ' label="date" />
      </DemoContainer>
    </LocalizationProvider>
  );
}