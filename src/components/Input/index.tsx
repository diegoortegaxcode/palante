// src/components/FloatingLabelInput.tsx
import React, { InputHTMLAttributes, useState } from 'react';

interface FloatingLabelInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

const FloatingLabelInput: React.FC<FloatingLabelInputProps> = ({
  label,
  name,
  type = 'text',
  ...props
}) => {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative w-full bg-[#fff] rounded p-0.5">
      <input
        name={name}
        type={type}
        id={name}
        onFocus={() => setFocused(true)}
        onBlur={(e) => setFocused(e.target.value !== '' || focused)}
        className="bg-[#fff] outline-none w-full text-sm border rounded-md focus:outline-none" style={{fontFamily: 'Mark Pro R'}}
        {...props}
      />
      <label
        htmlFor={name}
        className={`
          absolute left-3 top-3  text-[#222] font-bold transition-all
          peer-focus:top-1 peer-focus:text-xs
          ${props.value || focused ? 'top-[1px] left-[10px] text-[11px]' : ''}
        `}
      >
        {label}
      </label>
    </div>
  );
};

export default FloatingLabelInput;