'use client';
import React from 'react'
import Select from 'react-select'

export type CountrySelectValue = {
    flag: string;
    label: string;
    latlng: number[];
    region: string;
    value: string;
}

interface CountrySelectProps {
    value?: CountrySelectValue;
    onChange: (value: CountrySelectValue) => void;
}

export default function CountrySelect({value, onChange}: CountrySelectProps) {
  return (
    <div>
      
    </div>
  )
}
