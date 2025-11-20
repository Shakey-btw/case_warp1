"use client"

import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { RocketSlider } from '@/components/RocketSlider'
import { useState } from 'react'

export default function Home() {
  const [sliderValue, setSliderValue] = useState([0])
  return (
    <main className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background_image.jpg"
          alt="Game Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full px-[130px] pt-[80px] pb-[72px] flex flex-col justify-center">
        {/* Top Div */}
        <div className="flex flex-col">
          {/* Heading 1: "Got the bA**$?" */}
          <h1 
            className="text-left"
            style={{
              fontSize: '80px',
              letterSpacing: '0',
              lineHeight: '120%',
              textAlign: 'left',
              WebkitTextStroke: '4px black',
              WebkitTextFillColor: 'white',
              color: 'white',
              fontFamily: 'var(--font-luckiest)',
            }}
          >
            Got the bA**<span style={{ fontFamily: 'var(--font-merriweather)' }}>$</span>?
          </h1>

          {/* Subheading: "See who's GOING BANKRUPT and WHO'S WINNING" */}
          <h2 
            className="text-left"
            style={{
              fontSize: '28px',
              lineHeight: '40px',
              fontFamily: 'var(--font-luckiest)',
              WebkitTextStroke: '3px black',
              WebkitTextFillColor: '#FCF8D2',
              color: '#FCF8D2',
            }}
          >
            See who&apos;s GOING BANKRUPT and WHO&apos;S WINNING
          </h2>
        </div>

        {/* Second Div - Layout Structure */}
        <div className="mt-[60px] flex justify-between gap-6 flex-1 min-h-0">
          {/* Left Panel - Form Container */}
          <div 
            className="rounded-xl flex flex-col self-start"
            style={{
              width: '449px',
              backgroundColor: '#FFD533',
              border: '3px solid #FBFFFF',
              padding: '24px',
              borderRadius: '19px',
            }}
          >
            {/* Heading */}
            <h3 
              className="text-center"
              style={{
                fontSize: '18px',
                lineHeight: '24px',
                color: 'white',
                WebkitTextStroke: '1px black',
                WebkitTextFillColor: 'white',
                fontFamily: 'var(--font-luckiest)',
              }}
            >
              BET ON FUTURE HEADCOUNT
            </h3>

            {/* Cards Container */}
            <div className="flex justify-center gap-3" style={{ marginTop: '12px' }}>
              {/* First Card - +2P PER HIRE */}
              <div 
                className="rounded-lg flex flex-col items-center justify-center"
                style={{
                  backgroundColor: 'white',
                  border: '1.2px solid black',
                  boxShadow: '2px 2px 0px 0px rgba(0, 0, 0, 1)',
                  paddingTop: '7px',
                  paddingBottom: '7px',
                  paddingLeft: '10px',
                  paddingRight: '10px',
                  minWidth: '80px',
                }}
              >
                <div 
                  className="text-center"
                  style={{
                    fontSize: '19px',
                    WebkitTextStroke: '1.2px black',
                    WebkitTextFillColor: '#FFD533',
                    color: '#FFD533',
                    fontFamily: 'var(--font-luckiest)',
                  }}
                >
                  <span style={{ WebkitTextFillColor: '#26FF00', color: '#26FF00' }}>+</span><span>2P</span>
                </div>
                <div 
                  className="text-center"
                  style={{
                    fontSize: '11px',
                    color: 'black',
                    fontFamily: 'var(--font-luckiest)',
                    marginTop: '0',
                  }}
                >
                  PER HIRE
                </div>
              </div>

              {/* Second Card - -4P PER MISSED */}
              <div 
                className="rounded-lg flex flex-col items-center justify-center"
                style={{
                  backgroundColor: 'white',
                  border: '1.2px solid black',
                  boxShadow: '2px 2px 0px 0px rgba(0, 0, 0, 1)',
                  paddingTop: '7px',
                  paddingBottom: '7px',
                  paddingLeft: '10px',
                  paddingRight: '10px',
                  minWidth: '80px',
                }}
              >
                <div 
                  className="text-center"
                  style={{
                    fontSize: '19px',
                    WebkitTextStroke: '1.2px black',
                    WebkitTextFillColor: '#FFD533',
                    color: '#FFD533',
                    fontFamily: 'var(--font-luckiest)',
                  }}
                >
                  <span style={{ WebkitTextFillColor: '#FF2024', color: '#FF2024' }}>-</span><span>4P</span>
                </div>
                <div 
                  className="text-center"
                  style={{
                    fontSize: '11px',
                    color: 'black',
                    fontFamily: 'var(--font-luckiest)',
                    marginTop: '0',
                  }}
                >
                  PER MISSED
                </div>
              </div>
            </div>

            {/* Input Field Section */}
            <div className="mt-4">
              {/* Heading */}
              <label 
                className="block text-left"
                style={{
                  fontSize: '12px',
                  lineHeight: '18px',
                  letterSpacing: '2%',
                  color: 'black',
                  fontFamily: 'var(--font-luckiest)',
                  marginBottom: '4px',
                }}
              >
                COMPANY LINKEDIN URL
              </label>

              {/* Input Field */}
              <Input
                type="text"
                placeholder="https://www.linkedin.com/company/joinwarp/"
                className="w-full [&::placeholder]:text-gray-400"
                style={{
                  backgroundColor: 'white',
                  border: '1.2px solid black',
                  boxShadow: '2px 2px 0px 0px rgba(0, 0, 0, 1)',
                  paddingTop: '12px',
                  paddingBottom: '12px',
                  paddingLeft: '10px',
                  paddingRight: '10px',
                  borderRadius: '6px',
                  fontFamily: 'var(--font-luckiest)',
                  color: 'black',
                }}
              />
            </div>

            {/* Slider Section */}
            <div className="mt-4">
              {/* Heading Row */}
              <div className="flex justify-between items-center" style={{ marginBottom: '8px' }}>
                <label 
                  className="text-left"
                  style={{
                    fontSize: '12px',
                    lineHeight: '18px',
                    letterSpacing: '2%',
                    color: 'black',
                    fontFamily: 'var(--font-luckiest)',
                  }}
                >
                  NUMBER OF NEW HIRES
                </label>
                <label 
                  className="text-right"
                  style={{
                    fontSize: '12px',
                    lineHeight: '18px',
                    letterSpacing: '2%',
                    color: 'black',
                    fontFamily: 'var(--font-luckiest)',
                  }}
                >
                  6 MONTHS
                </label>
              </div>

              {/* Rocket Slider */}
              <RocketSlider
                value={sliderValue}
                onValueChange={setSliderValue}
                max={1000}
                min={0}
                step={1}
                className="w-full"
              />
            </div>

            {/* Email Input Field Section */}
            <div className="mt-5">
              {/* Heading */}
              <label 
                className="block text-left"
                style={{
                  fontSize: '12px',
                  lineHeight: '18px',
                  letterSpacing: '2%',
                  color: 'black',
                  fontFamily: 'var(--font-luckiest)',
                  marginBottom: '4px',
                }}
              >
                EMAIL ADDRESS
              </label>

              {/* Input Field */}
              <Input
                type="email"
                placeholder="NILS@JOINWARP.COM"
                className="w-full [&::placeholder]:text-gray-400"
                style={{
                  backgroundColor: 'white',
                  border: '1.2px solid black',
                  boxShadow: '2px 2px 0px 0px rgba(0, 0, 0, 1)',
                  paddingTop: '12px',
                  paddingBottom: '12px',
                  paddingLeft: '10px',
                  paddingRight: '10px',
                  borderRadius: '6px',
                  fontFamily: 'var(--font-luckiest)',
                  color: 'black',
                }}
              />
            </div>

            {/* Button Section */}
            <div className="mt-4">
              <Button
                className="w-full text-center"
                style={{
                  backgroundColor: '#1D7DE4',
                  border: '1.2px solid black',
                  boxShadow: '2px 2px 0px 0px rgba(0, 0, 0, 1)',
                  paddingTop: '12px',
                  paddingBottom: '12px',
                  paddingLeft: '10px',
                  paddingRight: '10px',
                  borderRadius: '6px',
                  fontFamily: 'var(--font-luckiest)',
                  color: 'white',
                  fontSize: '14px',
                  fontWeight: 'bold',
                }}
              >
                START YOUR BET
              </Button>
            </div>
          </div>

          {/* Right Panels - Display Boxes */}
          <div className="flex flex-col gap-4 flex-1 min-h-0" style={{ maxWidth: '486px', display: 'none' }}>
            {/* Top Panel - TOP 3 */}
            <div 
              className="flex-1 rounded-xl min-h-0 flex flex-col relative"
              style={{
                backgroundColor: '#152653',
                border: '3px solid #26FF00',
                maxHeight: '300px',
                padding: '16px',
                paddingTop: '32px',
                borderRadius: '16px',
              }}
            >
              {/* TOP 3 Heading - positioned at top border */}
              <div
                className="absolute text-center"
                style={{
                  top: '-20px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: '#152653',
                  border: '3px solid #26FF00',
                  borderRadius: '8px',
                  padding: '8px 24px',
                  fontFamily: 'var(--font-luckiest)',
                  fontSize: '40px',
                  color: 'white',
                  WebkitTextStroke: '2px black',
                  WebkitTextFillColor: 'white',
                  fontWeight: 'bold',
                }}
              >
                TOP 3
              </div>

              {/* Leaderboard Cards */}
              <div className="flex justify-center flex-1 items-center" style={{ gap: '16px' }}>
                {/* Card 1 */}
                <div 
                  className="rounded-lg flex flex-col items-center justify-center"
                  style={{
                    backgroundColor: 'white',
                    border: '1.2px solid black',
                    boxShadow: '2px 2px 0px 0px rgba(0, 0, 0, 1)',
                    paddingTop: '12px',
                    paddingBottom: '12px',
                    paddingLeft: '16px',
                    paddingRight: '16px',
                    minWidth: '120px',
                  }}
                >
                  <div 
                    className="text-center"
                    style={{
                      fontSize: '28px',
                      WebkitTextStroke: '1.2px black',
                      WebkitTextFillColor: '#FFD533',
                      color: '#FFD533',
                      fontFamily: 'var(--font-luckiest)',
                    }}
                  >
                    103P
                  </div>
                  <div className="mt-2" style={{ width: '60px', height: 'auto' }}>
                    <Image
                      src="/Warp logo.png"
                      alt="Warp Logo"
                      width={60}
                      height={60}
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                </div>

                {/* Card 2 */}
                <div 
                  className="rounded-lg flex flex-col items-center justify-center"
                  style={{
                    backgroundColor: 'white',
                    border: '1.2px solid black',
                    boxShadow: '2px 2px 0px 0px rgba(0, 0, 0, 1)',
                    paddingTop: '12px',
                    paddingBottom: '12px',
                    paddingLeft: '16px',
                    paddingRight: '16px',
                    minWidth: '120px',
                  }}
                >
                  <div 
                    className="text-center"
                    style={{
                      fontSize: '28px',
                      WebkitTextStroke: '1.2px black',
                      WebkitTextFillColor: '#FFD533',
                      color: '#FFD533',
                      fontFamily: 'var(--font-luckiest)',
                    }}
                  >
                    83P
                  </div>
                  <div className="mt-2" style={{ width: '60px', height: 'auto' }}>
                    <Image
                      src="/Warp logo.png"
                      alt="Warp Logo"
                      width={60}
                      height={60}
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                </div>

                {/* Card 3 */}
                <div 
                  className="rounded-lg flex flex-col items-center justify-center"
                  style={{
                    backgroundColor: 'white',
                    border: '1.2px solid black',
                    boxShadow: '2px 2px 0px 0px rgba(0, 0, 0, 1)',
                    paddingTop: '12px',
                    paddingBottom: '12px',
                    paddingLeft: '16px',
                    paddingRight: '16px',
                    minWidth: '120px',
                  }}
                >
                  <div 
                    className="text-center"
                    style={{
                      fontSize: '28px',
                      WebkitTextStroke: '1.2px black',
                      WebkitTextFillColor: '#FFD533',
                      color: '#FFD533',
                      fontFamily: 'var(--font-luckiest)',
                    }}
                  >
                    82P
                  </div>
                  <div className="mt-2" style={{ width: '60px', height: 'auto' }}>
                    <Image
                      src="/Warp logo.png"
                      alt="Warp Logo"
                      width={60}
                      height={60}
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                </div>
              </div>

              {/* See more link */}
              <div
                className="text-center mt-3"
                style={{
                  fontFamily: 'var(--font-luckiest)',
                  fontSize: '14px',
                  color: '#26FF00',
                  textDecoration: 'underline',
                  cursor: 'pointer',
                  WebkitTextStroke: '1px black',
                  WebkitTextFillColor: '#26FF00',
                }}
              >
                see more
              </div>
            </div>

            {/* Bottom Panel - WORST 3 */}
            <div 
              className="flex-1 rounded-xl min-h-0"
              style={{
                backgroundColor: '#152653',
                border: '3px solid #FF0000',
                maxHeight: '300px',
                borderRadius: '16px',
              }}
            >
              {/* WORST 3 content will be added later */}
            </div>
          </div>
        </div>

        {/* Third Div - placeholder */}
        <div>
          {/* Content will be added later */}
        </div>
      </div>
    </main>
  )
}

