"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
import { cn } from "@/lib/utils"

const RocketIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: 'block', transform: 'rotate(90deg)' }}
  >
    {/* Exhaust flame (yellow/orange) - at the bottom */}
    <path
      d="M16 26 L13 30 L19 30 Z"
      fill="#FFD700"
      stroke="black"
      strokeWidth="0.8"
    />
    <path
      d="M16 26 L11 28 L21 28 Z"
      fill="#FFA500"
      stroke="black"
      strokeWidth="0.5"
    />
    {/* Rocket body (white with black outline) - vertical */}
    <rect
      x="11"
      y="6"
      width="10"
      height="20"
      rx="2"
      fill="white"
      stroke="black"
      strokeWidth="1.5"
    />
    {/* Window (circular) */}
    <circle
      cx="16"
      cy="14"
      r="2.5"
      fill="#87CEEB"
      stroke="black"
      strokeWidth="0.8"
    />
    {/* Nose cone (red) - at the top */}
    <path
      d="M16 6 L12 2 L20 2 Z"
      fill="#FF0000"
      stroke="black"
      strokeWidth="1.5"
    />
    {/* Left fin (red) */}
    <path
      d="M11 20 L7 18 L7 22 Z"
      fill="#FF0000"
      stroke="black"
      strokeWidth="1"
    />
    {/* Right fin (red) */}
    <path
      d="M21 20 L25 18 L25 22 Z"
      fill="#FF0000"
      stroke="black"
      strokeWidth="1"
    />
  </svg>
)

interface RocketSliderProps {
  value: number[]
  onValueChange: (value: number[]) => void
  max?: number
  min?: number
  step?: number
  className?: string
}

const RocketSlider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  RocketSliderProps
>(({ className, value, onValueChange, max = 300, min = 0, step = 1, ...props }, ref) => {
  const currentValue = value[0] || 0
  const percentage = ((currentValue - min) / (max - min)) * 100

  return (
    <div className="relative w-full" style={{ backgroundColor: '#FFD700', padding: '0', borderRadius: '8px' }}>
      <SliderPrimitive.Root
        ref={ref}
        value={value}
        onValueChange={onValueChange}
        max={max}
        min={min}
        step={step}
        className={cn(
          "relative flex w-full touch-none select-none items-center",
          className
        )}
        style={{ width: '100%' }}
        {...props}
      >
        {/* Track with white background and dark outline */}
        <SliderPrimitive.Track
          className="relative h-4 w-full grow overflow-hidden rounded-full"
          style={{
            backgroundColor: 'white',
            border: '2px solid black',
            height: '16px',
          }}
        >
          {/* Range with blue background and diagonal stripes */}
          <SliderPrimitive.Range
            className="absolute h-full rounded-full"
            style={{
              background: `repeating-linear-gradient(
                45deg,
                #0066FF,
                #0066FF 10px,
                #3399FF 10px,
                #3399FF 20px
              )`,
              backgroundColor: '#0066FF',
            }}
          />
        </SliderPrimitive.Track>
        
        {/* Rocket thumb */}
        <SliderPrimitive.Thumb
          className="block cursor-pointer disabled:pointer-events-none disabled:opacity-50"
          style={{
            width: '32px',
            height: '32px',
            backgroundColor: 'transparent',
            border: 'none',
            outline: 'none',
            boxShadow: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 0.2s ease-out',
          }}
          onFocus={(e) => e.target.blur()}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <RocketIcon />
          </div>
        </SliderPrimitive.Thumb>
      </SliderPrimitive.Root>

      {/* Value display below slider */}
      <div
        className="mt-2 text-center text-sm font-bold"
        style={{
          color: 'black',
          fontFamily: 'var(--font-luckiest)',
        }}
      >
        Expected Hires: {currentValue}
      </div>

      {/* Black horizontal line */}
      <div
        style={{
          width: '100%',
          height: '2px',
          backgroundColor: 'black',
          marginTop: '20px',
        }}
      />
    </div>
  )
})
RocketSlider.displayName = "RocketSlider"

export { RocketSlider }

