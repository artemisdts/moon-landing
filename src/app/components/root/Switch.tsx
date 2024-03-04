'use client'
import React from 'react'
import * as Switch from '@radix-ui/react-switch'
import moonIcon from '../../../assets/icons/moon.svg'
import Image from 'next/image'

const SwitchComponent = () => (
  <Switch.Root
    className={`
    border-1
    border-white-50 
    active:bg-white-700     
    relative
    flex 
    h-[24px] 
    w-[64px]
    justify-center
    rounded-full
    border-solid 
    bg-gray-700 
    p-px     
    transition 
    data-[state=checked]:bg-sky-500
    active:data-[state=checked]:bg-sky-400
  `}
  >
    <Switch.Thumb className="align-center absolute left-0 mt-[-5px] flex h-8 w-8 justify-center rounded-full bg-gray-200 transition data-[state=checked]:translate-x-[100%]">
      <Image src={moonIcon} alt="asdasd"></Image>
    </Switch.Thumb>
  </Switch.Root>
)

export default SwitchComponent
