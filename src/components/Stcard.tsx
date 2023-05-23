"use client"
import React from 'react';
import { FiUser } from 'react-icons/fi';

interface StcardProps {
  title: string;
  staff: string;
  date: string;
  duration: string;
}

export default function Stcard({ title, staff, date, duration }: StcardProps) {
  return (
    <div className="bg-white rounded-md flex shadow-lg border border-gray-700 p-6 w-[340px] h-[480px] overflow-y-auto overflow-x-hidden">
      <div className="bg-white rounded-md shadow-lg border border-gray-400 p-1 w-[285px] h-[140px]">
        <p className="text-black px-2 mb-1 mt-1" style={{ fontSize: '13px' }}>
          <b>{title}</b>
        </p>
        <p className="text-black px-2 mt-1" style={{ fontSize: '11px' }}>
          Created by - {staff}
        </p>
        <p className="text-black px-2 mt-1" style={{ fontSize: '11px' }}>
          Conduction date and time - {date}
        </p>
        <p className="text-black px-2 mt-1" style={{ fontSize: '11px' }}>
          Duration - {duration}
        </p>
        <p className="text-[#3EB489] text-right mt-2 p-1 font-medium text-[11px] hover:underline">
          View details{' '}
          <span>
            <FiUser  className="text-black ml-56 mt-1 text-xs cursor-pointer mr-2" />
        
          </span>
        </p>
        <p className="text-black text-[12px] mr-6 text-right font-sans mt-[-19px]">5</p>
      </div>
    </div>
  );
}