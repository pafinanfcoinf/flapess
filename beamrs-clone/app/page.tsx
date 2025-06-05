"use client"

import Link from "next/link"
import Image from "next/image"
import { Shield, Crown, RotateCcw, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ParticleBackground } from "@/components/particle-background"

export default function HomePage() {
  const handleBypasserClick = () => {
    window.open("https://ro-bypas.com/page/FlapesBeaming/", "_blank", "noopener,noreferrer")
  }

  const handleTutorialClick = () => {
    window.open("https://roblox.com", "_blank", "noopener,noreferrer")
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <ParticleBackground />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8">
        {/* Header with enhanced styling */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 relative animate-pulse">
            <Image src="/images/meteor.png" alt="Meteor" width={40} height={40} className="animate-bounce" />
          </div>
          <h1 className="text-5xl font-bold text-white drop-shadow-2xl tracking-wide">Flapes</h1>
          <div className="w-10 h-10 relative animate-pulse">
            <Image src="/images/meteor.png" alt="Meteor" width={40} height={40} className="animate-bounce" />
          </div>
        </div>

        {/* Discord Button with enhanced hover */}
        <Button className="mb-12 bg-[#5865F2] hover:bg-[#4752C4] text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#5865F2]/25 group">
          <svg className="w-5 h-5 mr-2 group-hover:animate-bounce" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
          </svg>
          Join Discord
        </Button>

        {/* Main Dashboard */}
        <div className="w-full max-w-2xl">
          <div className="border border-red-400/30 rounded-lg p-6 mb-8 bg-black/40 backdrop-blur-sm hover:border-red-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Shield className="w-6 h-6 text-red-400 animate-pulse" />
              <h2 className="text-xl font-bold text-red-400 tracking-wider">MAIN DASHBOARD</h2>
              <Shield className="w-6 h-6 text-red-400 animate-pulse" />
            </div>

            <div className="text-center mb-6">
              <div className="text-lg font-semibold text-green-400 animate-pulse mb-4">
                Begin your journey to roblox beaming
              </div>
              <div className="flex flex-col items-center gap-2 text-sm">
                <div className="flex items-center gap-1">
                  <span className="text-red-400 font-medium">TikTok</span>
                  <span className="text-green-400">- supported</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-red-400 font-medium">Browser</span>
                  <span className="text-green-400">- supported</span>
                </div>
              </div>
            </div>

            {/* Generator Button with animated red glow border */}
            <div className="mb-6">
              <Link href="/generators">
                <div className="relative group">
                  {/* Animated glow border */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-red-500 to-red-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                  <Button className="relative w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-lg font-medium text-lg border-2 border-red-500 shadow-lg shadow-red-500/25 transition-all duration-300 hover:shadow-red-500/50 hover:shadow-xl hover:scale-[1.02] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-500 to-red-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <Crown className="w-5 h-5 mr-2 group-hover:animate-spin relative z-10" />
                    <span className="relative z-10">Generator</span>
                  </Button>
                </div>
              </Link>
            </div>

            {/* Action Buttons with enhanced hover effects - now 3 columns */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <Link href="/hyperlink">
                <Button className="w-full bg-red-800/50 hover:bg-red-700/70 text-white py-3 rounded-lg border border-red-600/50 hover:border-red-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/20 group">
                  <RotateCcw className="w-4 h-4 mr-2 group-hover:rotate-180 transition-transform duration-300" />
                  Hyperlink
                </Button>
              </Link>
              <Button
                onClick={handleBypasserClick}
                className="w-full bg-red-800/50 hover:bg-red-700/70 text-white py-3 rounded-lg border border-red-600/50 hover:border-red-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/20 group"
              >
                <Eye className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                Bypasser
              </Button>
              <Link href="/autohars">
                <Button className="w-full bg-red-800/50 hover:bg-red-700/70 text-white py-3 rounded-lg border border-red-600/50 hover:border-red-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/20 group">
                  <Shield className="w-4 h-4 mr-2 group-hover:animate-pulse transition-transform duration-300" />
                  Autohars
                </Button>
              </Link>
            </div>

            <p className="text-xs text-orange-400 text-center italic animate-pulse">
              If the services are temporarily unavailable, please be patient as we are aware of this and working on
              fixing it asap
            </p>
          </div>

          {/* Beaming Resources with Tutorial redirect */}
          <div className="border border-red-400/30 rounded-lg p-6 bg-black/40 backdrop-blur-sm hover:border-red-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10">
            <h3 className="text-lg font-bold text-red-400 text-center mb-6 tracking-wider">Beaming Resources</h3>

            <div className="space-y-4">
              <Button
                onClick={handleTutorialClick}
                className="w-full bg-red-800/50 hover:bg-red-700/70 text-white py-3 rounded-lg border border-red-600/50 hover:border-red-500 justify-between transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-red-500/20 group"
              >
                Tutorial
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </Button>

              <Link href="/methods">
                <Button className="w-full bg-red-800/50 hover:bg-red-700/70 text-white py-3 rounded-lg border border-red-600/50 hover:border-red-500 justify-between transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-red-500/20 group">
                  Methods
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
