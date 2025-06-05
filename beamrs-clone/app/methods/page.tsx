"use client"

import Link from "next/link"
import {
  ArrowLeft,
  Shield,
  Search,
  Filter,
  Zap,
  Music,
  Code,
  Crown,
  Heart,
  Users,
  Star,
  Download,
  TrendingUp,
  X,
  ExternalLink,
  CheckCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ParticleBackground } from "@/components/particle-background"
import { useState, useMemo } from "react"

const methods = [
  {
    id: 1,
    title: "Dualhook Method (OP)",
    description:
      "The most powerful dual-hook implementation with exceptional success rates. This advanced technique simultaneously targets multiple authentication layers while maintaining stealth protocols.",
    effectiveness: 5.0,
    successRate: "85-90%",
    features: ["Dual-layer authentication bypass", "Improved cookie handling", "+2 more features"],
    tags: ["hook", "authentication", "session", "op"],
    downloads: "9,245",
    difficulty: "Advanced",
    icon: Zap,
    color: "text-yellow-400",
    category: "technical",
    trending: true,
    author: "SecurityMaster",
    rating: 4.9,
    detailCategory: "Technical",
    implementationText:
      "Implement this method by setting up the dual-hook system as described in the detailed guide. Ensure you follow all steps precisely for optimal results. Test thoroughly before deployment.",
  },
  {
    id: 2,
    title: "TikTok Method (OP)",
    description:
      "Leverage TikTok's massive platform to deploy highly effective beaming strategies. This method uses viral content to attract unsuspecting victims through social engineering.",
    effectiveness: 5.0,
    successRate: "80-95%",
    features: ["TikTok platform integration", "Social proof mechanisms", "+2 more features"],
    tags: ["tiktok", "social", "viral", "op"],
    downloads: "10,389",
    difficulty: "Intermediate",
    icon: Music,
    color: "text-pink-400",
    badges: ["NEW", "viral"],
    category: "social",
    trending: true,
    author: "SocialMediaPro",
    rating: 4.8,
    detailCategory: "TikTok",
    tutorialTitle: "🔥 TikTok Method (OP) Tutorial",
    tutorialContent: {
      howItWorks:
        "You go live on TikTok using a fake Roblox giveaway video, and try to get as many viewers as possible. You will have a fake link in your TikTok bio so you get accounts.",
      requirements: [
        "For PC live you need TikTok account with live studio access",
        "For mobile live you need TikTok account with mobile gaming live access",
        "Also this method needs some brain, can't be a retard",
      ],
      steps: [
        {
          title: "1. How to get TikTok live account",
          content: [
            "Go to Roblox crosstrading server and trade for one",
            "Use this follower botting service, to bot 1k followers only for 2$ https://yoursmm.net/",
            "Or use this method to easily get 1k followers in 3 days or less https://justpaste.it/follow-method",
          ],
        },
        {
          title: "2. Choosing fake link",
          content: [
            "Go to Variares sites and then pick one of the TikTok links",
            "Always remember to test the link before going live",
            "If link is flagged then try removing the www. or https: from the link",
            "Using Beacons.ai > you can make beacons.ai biolink to make it look more realistic",
            "Example: https://beacons.ai/joinadoptme you can take inspiration and then add it to your TikTok bio",
            "If you can't add link to TikTok bio then make your TikTok account into business account so you can add business link",
          ],
        },
        {
          title: "3. How to go live/loop video",
          content: [
            "On PC you have to download live studio and then set it up then just pick a good video and go live",
            "On mobile you have to loop the video from gallery settings at least on Android",
          ],
        },
        {
          title: "4. Picking game category and title",
          content: [
            "If you're on mobile then your live game category MUST be Subway Surfers or Clash Royale. On PC it can be Roblox",
            "Title can be probably anything but be careful with words like Free and Giveaway since TikTok doesn't always like them",
          ],
        },
        {
          title: "5. How long to be live for",
          content: [
            "Never be live for a lot of hours UNLESS your live is stable asf. Like having about hundred viewers or more for hours",
            "When you start live you should do it only for 20 mins and then check to if end the live or not",
            "If after 20 mins your viewers are Below 10 then end your live",
            "If they're above 10 then there's small chance of going viral",
            "Above 20 viewers = good chance to go viral",
            "Above 40 viewers is very good keep it up until they start dropping!!",
          ],
        },
        {
          title: "6. Pumping method",
          content: [
            "This is a method to TikTok Live grow viewers",
            "Basically just go live until viewers grow and when they drop by a bit just end the live immediately",
            "Then start live almost immediately again and repeat this until you have stable asf live with hundreds of viewers!!!",
          ],
        },
      ],
      importantTips: [
        "When you go live ALWAYS remember to Mute your mic (check tutorial on YT how to)",
        "Put notifications off",
        "Remember to blacklist bad words",
      ],
      warnings: [
        "Be careful with TikTok's content policies to avoid account bans",
        "Don't use the same account for too long to avoid detection",
      ],
    },
  },
  {
    id: 3,
    title: "Autohar Method",
    description:
      "A technical method that tricks victims into revealing their own cookies while thinking they're getting access to someone else's account through developer console manipulation.",
    effectiveness: 5.0,
    successRate: "75-85%",
    features: ["Developer console exploitation", "Self-cookie extraction", "+2 more features"],
    tags: ["technical", "cookies", "console", "social", "+1"],
    downloads: "8,750",
    difficulty: "Intermediate",
    icon: Code,
    color: "text-blue-400",
    badges: ["NEW", "technical"],
    category: "technical",
    author: "TechExpert",
    rating: 4.7,
    detailCategory: "Technical",
    isAutohar: true,
    autoharContent: {
      title: "What is Autohar?",
      description:
        "AutoHAR is a method that tricks a victim into thinking they will get access to someone else's account, but in reality, they end up giving away their own information.",
      howItWorks:
        "You gonna post a fake tutorial on tiktok or youtube. The tutorial claims to show how to steal an account/have botted followers/copy game/copy clothes, but it's actually a trap.",
      steps: [
        "Go to a profile/on a game/on a clothing (depending of the one you use)",
        "Open the developer console (F12). Copy a specific file (.profile/clothing/game) and paste it on a website",
        "The victim follows the instructions, believing they will gain access to an account/copy the clothing/have more followers/copy the game, but in reality, the .profile/clothing/game file contains their own cookies.",
      ],
      conclusion:
        "These cookies are sent to you, who can then take control of the victim's account. 🔥 Here is a tutorial to make your site! 📱 https://streamable.com/e9jycf 📱",
      videos: [
        "https://streamable.com/opjyx",
        "https://streamable.com/qtg0fn",
        "https://streamable.com/ypxhdk",
        "Clothing Stealer Video",
        "Bot Follower Video",
        "Account Stealer Video",
      ],
      thumbnails: [
        "/thumbnails/copy-game.png",
        "/thumbnails/working-2023.png",
        "/thumbnails/copy-games.png",
        "/thumbnails/follow-tutorial.png",
        "/thumbnails/bot-followers.png",
        "/thumbnails/game-copier.png",
        "/thumbnails/game-copier-hack.png",
        "/thumbnails/copy-game-2023.png",
        "/thumbnails/copy-clothing.png",
        "/thumbnails/bot-followers-2.png",
      ],
    },
  },
  {
    id: 4,
    title: "Please Donate Method (OP 👑)",
    description:
      "Target players in PLS DONATE games by offering private server giveaways and exclusive items. This method exploits the desire for free Robux and rare items.",
    effectiveness: 5.0,
    successRate: "80-90%",
    features: ["Private server access offers", "Exclusive item giveaway simulation", "+2 more features"],
    tags: ["donate", "game-specific", "giveaway", "robux"],
    downloads: "10,245",
    difficulty: "Beginner",
    icon: Crown,
    color: "text-yellow-400",
    badges: ["NEW", "social"],
    category: "social",
    author: "SocialMediaPro",
    rating: 4.8,
    detailCategory: "TikTok",
    tutorialTitle: "👑 Please Donate Method (OP👑) Tutorial",
    tutorialContent: {
      howItWorks:
        "This method targets players in PLS DONATE games by offering private server giveaways and donations. By creating fake private server links and offering Robux giveaways, you can trick players into logging into your phishing site.",
      requirements: [
        "Fake Roblox login site",
        "Discord account",
        "Basic social engineering skills",
        "Access to PLS DONATE games",
      ],
      steps: [
        {
          title: "1. Finding targets in PLS DONATE games",
          content: [
            "Go into any PLS DONATE game",
            'Type "does anyone wna join my priv serv?"',
            'When people say yes, ask "Do you have ďĩşćørð?"',
            "Add their Discord and send them the private server phishing link",
            'Say "how much robux you want donating 500-2000" and "if you login through link it should put you right into game"',
            "Wait for them to login and you'll get their account",
          ],
        },
        {
          title: "2. Alternative approach: Spin the Wheel Giveaway",
          content: [
            "Create a PLS DONATE fake private server link",
            'Spam with the message: "Join my Spin the Wheel Giveaway in my private server! Donate for a chance to win up to 5,000 Robux! DM me for details."',
            "You must join all servers to beam, or visit random Roblox servers and join each server individually",
          ],
        },
        {
          title: "3. Targeting rich players",
          content: [
            "Find rich/normal person that has robux donated (at least 500)",
            "Tell them you're hosting 10k robux giveaway and tell them to add you on Discord (find as many people as you could)",
            "When 1-5 people added you on Discord, tell them all that they won the giveaway",
            'Say "join me because I\'m already waiting" and send phishing link',
            "Wait for your beam",
          ],
        },
        {
          title: "4. Direct donation approach",
          content: [
            "Go in PLS DONATE and walk around till you find someone rich",
            'Go up to them and say "can I donate you 1k robux"',
            'After they say yes, say "it\'s on my alt, can you add me on Discord"',
            'Say it like this so it doesn\'t get tagged: "Ðć"',
            'Once they add you on Discord, say "add my alt" and send your profile link',
            'Say "add me from here" and provide your phishing link',
          ],
        },
      ],
      importantTips: [
        "This method is very effective since many PLS DONATE players are kids",
        "Target players who have received significant donations already",
        "Be friendly and enthusiastic to build trust quickly",
        "Have multiple approaches ready in case one doesn't work",
        "Move quickly between servers if you're not finding success",
        "Use proper spelling and grammar to appear legitimate",
      ],
      warnings: [
        "Some players may be suspicious of giveaway offers",
        "Roblox filters may tag your Discord messages",
        "Your Discord account may be reported and banned",
        "Don't spend too long in one server to avoid detection",
        "Some players may check the URL carefully",
        "This method has legal consequences if caught",
      ],
    },
  },
  {
    id: 5,
    title: "Adopt Me Method",
    description:
      "Specialized method targeting Adopt Me players with customized approaches. This method leverages the high-value pet economy and trading mechanics for maximum effectiveness.",
    effectiveness: 4.0,
    successRate: "70-80%",
    features: ["Pet trading scam templates", "Fake pet duplication offers", "+2 more features"],
    tags: ["adoptme", "game", "pets"],
    downloads: "8,876",
    difficulty: "Beginner",
    icon: Heart,
    color: "text-green-400",
    badges: ["social"],
    category: "social",
    author: "SocialMediaPro",
    rating: 4.8,
    detailCategory: "TikTok",
    tutorialTitle: "🎮 Adopt Me Method Tutorial",
    tutorialContent: {
      howItWorks:
        "This method targets Adopt Me players by offering a 'Pick a Door Challenge' with rewards. You'll invite players to join your private server through a link, which is actually your beaming link.",
      requirements: [
        "Access to Adopt Me game servers",
        "A convincing private server link (your beaming link)",
        "Basic social engineering skills",
        "Patience to find the right targets",
      ],
      steps: [
        {
          title: "1. Finding Adopt Me servers",
          content: [
            "Join popular Adopt Me servers where you can find active players",
            "Look for servers with newer players who might be less experienced and more trusting",
            "Target servers during peak hours for maximum reach",
            "Switch servers frequently to avoid detection or reports",
          ],
        },
        {
          title: "2. Creating the challenge invitation",
          content: [
            'Type in the server chat: "Doing pick a door challenge for 10 people only, DM me fast"',
            "Make it sound exclusive and time-limited to create urgency",
            "Be friendly and enthusiastic in your messages",
            "If someone asks what the rewards are, mention rare pets or in-game currency",
          ],
        },
        {
          title: "3. Directing targets to your link",
          content: [
            "When they message you, tell them to join through your private server link",
            "Mention that your join option is enabled for convenience",
            "If they ask to add you as a friend instead, explain that you can't add people due to parental controls",
            "Emphasize this is why you need to send them a link instead",
            "Present the link as the only way to participate in the exclusive challenge",
          ],
        },
        {
          title: "4. Handling the outcome",
          content: [
            "If successful, you'll receive their account credentials through your beaming link",
            "If unsuccessful, simply move on to the next potential target",
            "Don't waste time trying to convince hesitant players",
            "Focus on quantity and efficiency to maximize your success rate",
          ],
        },
      ],
      importantTips: [
        "Be patient and don't rush the process",
        "Act natural and friendly to build trust quickly",
        "Use proper grammar and spelling to appear legitimate",
        "Change your avatar occasionally to avoid being recognized",
        "Target players who seem eager for rare items or currency",
      ],
      warnings: [
        "Don't spam the same server repeatedly",
        "Avoid using the same account for too long",
        "Be aware that experienced players may recognize this as a scam",
        "Don't get frustrated if success rate isn't high initially - it improves with practice",
      ],
    },
  },
  {
    id: 6,
    title: "Fake Friend Method",
    description:
      "Advanced social engineering method that uses compromised accounts to target the victim's friends list. Exploits pre-established trust relationships for higher success rates.",
    effectiveness: 5.0,
    successRate: "85-95%",
    features: ["Trust exploitation techniques", "Friend list targeting", "+2 more features"],
    tags: ["social", "friends", "trust", "impersonation"],
    downloads: "9,876",
    difficulty: "Intermediate",
    icon: Users,
    color: "text-purple-400",
    badges: ["social"],
    category: "social",
    author: "SocialMediaPro",
    rating: 4.8,
    detailCategory: "TikTok",
    tutorialTitle: "👥 Fake Friend Method Tutorial",
    tutorialContent: {
      howItWorks:
        "This advanced social engineering method involves using an already compromised Roblox account to target the victim's friends list. By impersonating someone they already trust, you can convince them to click malicious links or share sensitive information. This method has an exceptionally high success rate because it exploits pre-established trust relationships.",
      requirements: [
        "Access to a previously beamed Roblox account (ABSOLUTELY REQUIRED)",
        "Strong social engineering skills and ability to mimic the original account owner's communication style",
        "Discord account for off-platform communication",
        "Patience and attention to detail to maintain the deception",
        "Understanding of relationship dynamics and manipulation techniques",
        "Prepared beaming link disguised as something relevant to your conversation",
      ],
      steps: [
        {
          title: "STEP 1: U HAVE TO BE IN AN ACCOUNT YOU'VE ALREADY BEAMED",
          content: [
            "Log into the previously beamed account and familiarize yourself with their friends list",
            "Check their chat history to understand how they typically communicate with friends",
            "Review their inventory to know what valuable items they have that might interest friends",
            "Look at their recent games and activity to understand their interests and habits",
            "Take note of any inside jokes or specific language they use with friends",
            "Spend time learning about the account's social connections before making any moves",
          ],
        },
        {
          title: "STEP 2: IF YOU SEE A RICH FRIEND IN GAME JOIN THEM, OR TEXT PEOPLE FROM THEIR CHAT",
          content: [
            "Identify the richest or most vulnerable friends from the account's friend list",
            "Join them in-game if you see them online to establish initial contact",
            "Alternatively, message people directly from the account's existing chat history",
            "Start with casual conversation that matches the original account owner's style",
            "Make sure to use similar greeting styles, emojis, and slang that the original account owner would use",
            "If they ask why you haven't been online, have a believable excuse ready (like 'I was grounded' or 'My internet was down')",
          ],
        },
        {
          title: "STEP 3: Tell them to add your new discord. WAYS OF SAYING DISCORD WITHOUT TAG",
          content: [
            "Tell them you have a 'new' Discord account and need them to add you",
            "Use creative spelling to avoid detection by Roblox chat filters",
            "Alternative ways to spell Discord: 'ÐČ', 'Ðǐșćöřð', 'ćöřð', 'Ðïșćô'",
            "Provide a believable reason for having a new Discord (e.g., 'My old one got hacked' or 'I got locked out')",
            "If they ask why you need Discord, say it's for something important you can't explain in Roblox chat",
            "Make sure your Discord profile matches the theme/style of the compromised Roblox account",
          ],
        },
        {
          title:
            "STEP 4: ONCE YOUVE GOTTEN THEM TO ADD U, SAY THE REASON I WANTED YOU TO ADD ME IS BECAUSE IM DOING THIS GIVEAWAY (TRY TO FIND OUT WHAT THEY PLAY) AND IF THEY WANTED TO JOIN",
          content: [
            "Once they've added you on Discord, explain you're hosting an exclusive giveaway",
            "Ask what games they play most frequently to tailor your approach",
            "Offer prizes related to their favorite games to increase interest",
            "Make the giveaway sound exclusive and time-limited to create urgency",
            "Tell them you're only inviting close friends to make them feel special",
            "Show excitement about them potentially winning to build anticipation",
            "If they seem hesitant, emphasize how much you want them specifically to participate",
          ],
        },
        {
          title: "STEP 5: TELL THEM YOU HAVE CURRENTLY PPL, THEN SEND THE LINK",
          content: [
            "Create a sense of urgency by saying you already have several people participating",
            "Mention that spots are filling up quickly to pressure them into acting fast",
            "Send them your beaming link disguised as a giveaway entry form or special server invite",
            "If they question the link, reassure them it's safe and that other friends have already joined",
            "Follow up immediately asking if they clicked it to maintain engagement",
            "If they seem suspicious, have a backup story ready to explain the link",
            "Once they click the link and you gain access to their account, act quickly to secure valuable items",
          ],
        },
      ],
      importantTips: [
        "Study the original account owner's typing style and try to mimic it perfectly",
        "Be patient and don't rush the conversation - building trust takes time",
        "If they seem suspicious, back off and try a different approach or target",
        "Keep conversations focused on the games they play to maintain authenticity",
        "Have a believable story prepared for why you need them to click your link",
        "Don't be too aggressive or you'll raise suspicion - subtle manipulation works best",
        "If one friend doesn't work out, move on to another rather than pushing too hard",
        "Remember details about their previous conversations to maintain the illusion",
      ],
      warnings: [
        "Don't be too aggressive or you'll raise suspicion",
        "Avoid using the same compromised account for too long",
        "Be aware that friends of the original account owner might communicate outside of Roblox",
        "This method requires good social skills and adaptability",
        "Success rates vary greatly depending on your ability to build trust",
        "Some targets may verify your identity through voice chat or other means",
        "The original account owner might try to recover their account while you're using it",
        "Friends may become suspicious if you don't know inside jokes or shared experiences",
      ],
    },
  },
]

export default function MethodsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedDifficulty, setSelectedDifficulty] = useState("all")
  const [showFilters, setShowFilters] = useState(false)
  const [selectedMethod, setSelectedMethod] = useState<(typeof methods)[0] | null>(null)

  const filteredMethods = useMemo(() => {
    return methods.filter((method) => {
      const matchesSearch =
        method.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        method.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        method.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

      const matchesCategory = selectedCategory === "all" || method.category === selectedCategory
      const matchesDifficulty = selectedDifficulty === "all" || method.difficulty === selectedDifficulty

      return matchesSearch && matchesCategory && matchesDifficulty
    })
  }, [searchTerm, selectedCategory, selectedDifficulty])

  const openMethodModal = (method: (typeof methods)[0]) => {
    setSelectedMethod(method)
  }

  const closeMethodModal = () => {
    setSelectedMethod(null)
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
        <div className="flex items-center justify-center gap-3 mb-8">
          <Shield className="w-8 h-8 text-red-400 animate-pulse" />
          <h1 className="text-4xl font-bold text-red-400 drop-shadow-2xl tracking-wide">Flapes Methods</h1>
          <Shield className="w-8 h-8 text-red-400 animate-pulse" />
        </div>

        {/* Search and Filter with enhanced functionality */}
        <div className="flex gap-4 mb-6 max-w-6xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search methods..."
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-white mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full bg-red-800/30 border border-red-600/50 text-white rounded-lg px-3 py-2 hover:bg-red-800/40 transition-colors"
                >
                  <option value="all">All Categories</option>
                  <option value="social">Social Engineering</option>
                  <option value="technical">Technical</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">Difficulty</label>
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="w-full bg-red-800/30 border border-red-600/50 text-white rounded-lg px-3 py-2 hover:bg-red-800/40 transition-colors"
                >
                  <option value="all">All Difficulties</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>
            </div>
          </div>
        )}

        <p className="text-gray-400 text-sm mb-8 max-w-6xl mx-auto">
          Showing {filteredMethods.length} beaming method{filteredMethods.length !== 1 ? "s" : ""}
          {searchTerm && ` matching "${searchTerm}"`}
        </p>

        {/* Methods Grid with enhanced cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredMethods.map((method, index) => (
            <div
              key={method.id}
              onClick={() => openMethodModal(method)}
              className="border border-red-400/30 rounded-lg p-6 bg-black/40 backdrop-blur-sm hover:border-red-400/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-red-500/20 group cursor-pointer relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Hover overlay with "View Tutorial" */}
              <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <div className="flex items-center gap-2 text-white font-medium bg-red-600 px-4 py-2 rounded-lg">
                  <ExternalLink className="w-5 h-5 text-white" />
                  <span>View Tutorial</span>
                </div>
              </div>

              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2 rounded-lg bg-gray-800/50 ${method.color} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <method.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg group-hover:text-red-300 transition-colors">
                      {method.title}
                    </h3>
                    {method.trending && (
                      <div className="flex items-center gap-1 text-xs text-orange-400">
                        <TrendingUp className="w-3 h-3" />
                        Trending
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  {method.badges?.map((badge, badgeIndex) => (
                    <Badge
                      key={badgeIndex}
                      className={`text-xs px-2 py-1 animate-pulse ${
                        badge === "NEW"
                          ? "bg-red-600 text-white"
                          : badge === "viral"
                            ? "bg-pink-600 text-white"
                            : badge === "technical"
                              ? "bg-blue-600 text-white"
                              : "bg-green-600 text-white"
                      }`}
                    >
                      {badge}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm mb-4 line-clamp-3 group-hover:text-gray-200 transition-colors">
                {method.description}
              </p>

              {/* Stats */}
              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-orange-400 text-sm">⚡ Effectiveness:</span>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < method.effectiveness ? "text-yellow-400 fill-current" : "text-gray-600"}`}
                      />
                    ))}
                    <span className="text-gray-400 text-sm ml-1">({method.effectiveness.toFixed(1)})</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-red-400 text-sm">💀 Success Rate:</span>
                  <span className="text-white text-sm font-semibold">{method.successRate}</span>
                </div>
              </div>

              {/* Features */}
              <div className="mb-4">
                <span className="text-orange-400 text-sm font-medium">Key Features:</span>
                <ul className="mt-2 space-y-1">
                  {method.features.slice(0, 3).map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-300 text-sm flex items-center gap-2">
                      <span className="w-1 h-1 bg-red-400 rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                  {method.features.length > 3 && (
                    <li className="text-gray-400 text-sm flex items-center gap-2">
                      <span className="w-1 h-1 bg-gray-400 rounded-full"></span>+{method.features.length - 3} more
                      features
                    </li>
                  )}
                </ul>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {method.tags.map((tag, tagIndex) => (
                  <Badge
                    key={tagIndex}
                    className="bg-red-800/30 text-red-300 text-xs px-2 py-1 border border-red-600/30 hover:bg-red-700/30 transition-colors"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Download className="w-4 h-4" />
                  <span>{method.downloads}</span>
                </div>
                <Badge
                  className={`text-xs px-2 py-1 ${
                    method.difficulty === "Advanced"
                      ? "bg-red-600 text-white"
                      : method.difficulty === "Intermediate"
                        ? "bg-yellow-600 text-white"
                        : "bg-green-600 text-white"
                  }`}
                >
                  {method.difficulty}
                </Badge>
              </div>
            </div>
          ))}
        </div>

        {filteredMethods.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg mb-2">No methods found</div>
            <div className="text-gray-500 text-sm">Try adjusting your search or filter criteria</div>
          </div>
        )}

        {/* Private Methods Notice */}
        <div className="text-center py-12 border-t border-red-400/30 mt-12">
          <p className="text-white text-lg font-semibold">
            GIVING PRIVATE METHODS IF YOU GET INSANE BEAMER ROLE IN THE SERVER, JUST GO{" "}
            <a
              href="https://discord.com/channels/1300166057746632795/1379716017621565461"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 hover:text-red-300 underline transition-colors duration-300"
            >
              HERE
            </a>{" "}
            TO CHECK REQUIREMENTS
          </p>
        </div>
      </div>

      {/* Method Detail Modal */}
      {selectedMethod && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeMethodModal}
        >
          <div
            className="bg-gray-900 border border-red-400/30 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-red-400/30">
              <div className="flex items-center gap-3">
                <selectedMethod.icon className={`w-6 h-6 ${selectedMethod.color}`} />
                <h2 className="text-xl font-bold text-white">{selectedMethod.title}</h2>
                {selectedMethod.badges?.includes("NEW") && (
                  <Badge className="bg-red-600 text-white text-xs px-2 py-1">NEW</Badge>
                )}
                {selectedMethod.id === 4 && <span className="text-yellow-400 text-xl">👑</span>}
              </div>
              <Button
                onClick={closeMethodModal}
                className="bg-transparent hover:bg-red-600/20 text-white p-2 rounded-lg"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {selectedMethod.isAutohar ? (
                /* Autohar Special Layout */
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-red-400 mb-4">{selectedMethod.autoharContent?.title}</h3>
                    <p className="text-white mb-4">{selectedMethod.autoharContent?.description}</p>

                    <p className="text-gray-300 mb-4 italic">Here's how it works:</p>
                    <p className="text-gray-300 mb-4">{selectedMethod.autoharContent?.howItWorks}</p>

                    <div className="mb-4">
                      <p className="text-red-400 font-semibold mb-2">The fake tutorial tells the victim to:</p>
                      <ul className="space-y-2">
                        {selectedMethod.autoharContent?.steps.map((step, index) => (
                          <li key={index} className="text-gray-300 flex items-start gap-2">
                            <span className="text-red-400 mt-1">→</span>
                            {step}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <p className="text-gray-300 mb-6">{selectedMethod.autoharContent?.conclusion}</p>

                    <div>
                      <h4 className="text-red-400 font-semibold mb-3">Videos to post</h4>
                      <div className="space-y-2">
                        {selectedMethod.autoharContent?.videos.map((video, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-blue-400" />
                            <span className="text-blue-400 hover:text-blue-300 transition-colors">{video}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {selectedMethod.autoharContent?.thumbnails && (
                      <div className="mt-6">
                        <h4 className="text-red-400 font-semibold mb-3">Thumbnails</h4>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {selectedMethod.autoharContent.thumbnails.map((thumbnail, index) => (
                            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
                              <div className="h-24 bg-gray-700 flex items-center justify-center">
                                <span className="text-gray-400 text-xs">Thumbnail {index + 1}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-1 gap-3 mt-6">
                    <Button className="bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-medium">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Tutorial
                    </Button>
                    <Button className="bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-lg font-medium">
                      <Download className="w-4 h-4 mr-2" />
                      Download Method
                    </Button>
                  </div>
                </div>
              ) : (
                /* Standard Method Layout */
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Left Column */}
                  <div className="space-y-6">
                    {/* Effectiveness Rating */}
                    <div>
                      <h3 className="text-red-400 font-semibold mb-2">⚡ Effectiveness Rating</h3>
                      <div className="flex items-center gap-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${i < selectedMethod.effectiveness ? "text-yellow-400 fill-current" : "text-gray-600"}`}
                          />
                        ))}
                        <span className="text-white font-semibold">{selectedMethod.effectiveness}/5</span>
                      </div>
                    </div>

                    {/* Success Rate */}
                    <div>
                      <h3 className="text-red-400 font-semibold mb-2">💀 Success Rate:</h3>
                      <p className="text-white font-semibold text-lg">{selectedMethod.successRate}</p>
                    </div>

                    {/* Tags */}
                    <div>
                      <h3 className="text-red-400 font-semibold mb-2">Tags:</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedMethod.tags.map((tag, index) => (
                          <Badge
                            key={index}
                            className="bg-red-800/30 text-red-300 text-xs px-2 py-1 border border-red-600/30"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-1 gap-3">
                      <Button className="bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-medium">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Tutorial
                      </Button>
                      <Button className="bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-lg font-medium">
                        <Download className="w-4 h-4 mr-2" />
                        Download Method
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
                          <span className="text-white">{selectedMethod.author}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Downloads:</span>
                          <span className="text-white">{selectedMethod.downloads}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Rating:</span>
                          <span className="text-white">{selectedMethod.rating} ⭐</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Difficulty:</span>
                          <span className="text-yellow-400">{selectedMethod.difficulty}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Category:</span>
                          <span className="text-green-400">{selectedMethod.detailCategory}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Features - Full Width */}
                  <div className="lg:col-span-2">
                    <h3 className="text-red-400 font-semibold mb-4">✓ Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedMethod.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-gray-300">
                          <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Implementation Instructions - Full Width */}
                  <div className="lg:col-span-2">
                    <h3 className="text-red-400 font-semibold mb-4">⚠ Implementation Instructions</h3>
                    {selectedMethod.tutorialContent && (
                      <div className="mb-4">
                        <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                          {selectedMethod.tutorialTitle}
                        </h4>
                        <div className="text-gray-300 mb-2 font-semibold">How It Works</div>
                        <p className="text-gray-300 mb-6">{selectedMethod.tutorialContent.howItWorks}</p>

                        {selectedMethod.tutorialContent.requirements && (
                          <div className="mb-6">
                            <div className="text-gray-300 mb-2 font-semibold">Requirements</div>
                            <ul className="list-disc pl-5 space-y-1">
                              {selectedMethod.tutorialContent.requirements.map((req, index) => (
                                <li key={index} className="text-gray-300">
                                  {req}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {selectedMethod.tutorialContent.steps && (
                          <div className="space-y-6">
                            {selectedMethod.tutorialContent.steps.map((step, index) => (
                              <div key={index}>
                                <div className="text-gray-300 mb-2 font-semibold">{step.title}</div>
                                <ul className="list-disc pl-5 space-y-1">
                                  {step.content.map((item, itemIndex) => (
                                    <li key={itemIndex} className="text-gray-300">
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        )}

                        {selectedMethod.tutorialContent.importantTips && (
                          <div className="mt-6">
                            <div className="text-gray-300 mb-2 font-semibold">Important Tips</div>
                            <ul className="list-disc pl-5 space-y-1">
                              {selectedMethod.tutorialContent.importantTips.map((tip, index) => (
                                <li key={index} className="text-gray-300">
                                  {tip}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {selectedMethod.tutorialContent.warnings && (
                          <div className="mt-6">
                            <div className="text-red-400 mb-2 font-semibold">Warnings</div>
                            <ul className="list-disc pl-5 space-y-1">
                              {selectedMethod.tutorialContent.warnings.map((warning, index) => (
                                <li key={index} className="text-red-300">
                                  {warning}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}
                    {selectedMethod.implementationText && (
                      <p className="text-gray-300">{selectedMethod.implementationText}</p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
