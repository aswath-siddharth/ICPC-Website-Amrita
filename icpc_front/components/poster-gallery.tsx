"use client"

import { useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { X, Share2, Download, Copy } from "lucide-react"
import { FaWhatsapp, FaLinkedin, FaTwitter, FaShare } from "react-icons/fa"


// Sample poster data
const samplePosters = [
	{
		id: 1,
		title: "Poster 1",
		imageUrl: "/socials_1.png",
		date: new Date("2025-08-25"),
	},
	{
		id: 2,
		title: "Poster 2",
		imageUrl: "/socials_2.png",
		date: new Date("2025-08-25"),
	},
	{
		id: 3,
		title: "Poster 3",
		imageUrl: "/socials_3.png",
		date: new Date("2025-08-25"),
	},
	{
		id: 4,
		title: "Poster 4",
		imageUrl: "/socials_4.png",
		date: new Date("2025-08-25"),
	},
	{
		id: 5,
		title: "Poster 5",
		imageUrl: "/socials_5.png",
		date: new Date("2025-08-27"),
	},
	{
		id: 6,
		title: "Poster 6",
		imageUrl: "/socials_6.png",
		date: new Date("2025-08-29"),
	},
	{
		id: 7,
		title: "Poster 7",
		imageUrl: "/socials_7.png",
		date: new Date("2025-09-09"),
	},
	{
		id: 8,
		title: "Poster 8",
		imageUrl: "/socials_8.png",
		date: new Date("2025-09-09"),
	},
	{
		id: 9,
		title: "Poster 9",
		imageUrl: "/socials_9.png",
		date: new Date("2025-09-09"),
	},
	{
		id: 10,
		title: "Poster 10",
		imageUrl: "/socials_10.png",
		date: new Date("2025-09-09"),
	},
	{
		id: 11,
		title: "Poster 11",
		imageUrl: "/socials_11.png",
		date: new Date("2025-09-09"),
	},
	{
		id: 12,
		title: "Poster 12",
		imageUrl: "/socials_12.png",
		date: new Date("2025-09-22"),
	},
	{
		id: 13,
		title: "Poster 13",
		imageUrl: "/socials_13.png",
		date: new Date("2025-09-22"),
	},
	{
		id: 14,
		title: "Poster 14",
		imageUrl: "/socials_14.png",
		date: new Date("2025-09-22"),
	},
	{
		id: 15,
		title: "Poster 15",
		imageUrl: "/socials_15.png",
		date: new Date("2025-09-22"),
	},
	{
		id: 16,
		title: "Poster 16",
		imageUrl: "/socials_16.png",
		date: new Date("2025-09-22"),
	}
]

type SortOption = "newest" | "oldest"

interface Poster {
	id: number
	title: string
	imageUrl: string
	date: Date
}

export default function PosterGallery() {
    const [sortBy, setSortBy] = useState<SortOption>("newest")
    const [selectedPoster, setSelectedPoster] = useState<Poster | null>(null)
    const [copied, setCopied] = useState(false)
    const [copying, setCopying] = useState(false)

    // Sort posters based on selected option
    const sortedPosters = [...samplePosters].sort((a, b) => {
        if (sortBy === "newest") {
            return b.date.getTime() - a.date.getTime()
        } else {
            return a.date.getTime() - b.date.getTime()
        }
    })

    // Check if device is mobile
    const isMobile = () => {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    }

    // Convert image to blob
    const getImageBlob = async (imageUrl: string): Promise<Blob> => {
        try {
            const response = await fetch(imageUrl)
            if (!response.ok) throw new Error('Failed to fetch image')
            return await response.blob()
        } catch (error) {
            console.error('Error fetching image:', error)
            throw error
        }
    }

	// Download image function
	const downloadImage = (poster: Poster) => {
		const link = document.createElement('a')
		link.href = poster.imageUrl
		link.download = `icpc-poster-${poster.id}.png`
		document.body.appendChild(link)
		link.click()
		document.body.removeChild(link)
	}

	// Web Share API for mobile (with actual image file)
	const shareWithWebAPI = async (poster: Poster) => {
        try {
            const imageUrl = `${window.location.origin}${poster.imageUrl}`
            const imageBlob = await getImageBlob(imageUrl)
            
            const text = `🚀 Get Ready, Coders!
The first phase of the world's biggest and oldest coding competition is here – ICPC Asia West Amritapuri site 2025! 🎉

🔥 With 350+ onsite slots, this is your golden chance to battle it out and feel the adrenaline of the regionals on your way to the World Finals.

💡 Why you shouldn't miss this:
✅ Compete with the best coding minds across the country
✅ Sharpen your problem-solving & algorithmic skills
✅ Unlock internship & career opportunities with top tech firms

👉 Register today and choose Amritapuri as your regionals site!
🔗 https://amritaicpc.in/

⏳ Don't wait — the journey to the ICPC Finals starts here!`

            const shareData = {
                title: poster.title,
                text: text,
                url: `${window.location.origin}/poster/${poster.id}`,
                files: [new File([imageBlob], `icpc-poster-${poster.id}.png`, { type: imageBlob.type })]
            }

            // Check if files can be shared
            if (navigator.canShare && navigator.canShare(shareData)) {
                await navigator.share(shareData)
            } else {
                // Fallback without files
                await navigator.share({
                    title: shareData.title,
                    text: shareData.text,
                    url: shareData.url
                })
            }
        } catch (error) {
            console.error('Error sharing:', error)
            // Fallback to copy to clipboard
            copyImageToClipboard(poster)
        }
    }
	const shareToOtherAppsMobile = async (poster: Poster) => {
    try {
        setCopying(true)
        
        const text = `🚀 Get Ready, Coders!
The first phase of the world's biggest and oldest coding competition is here – ICPC Asia West Amritapuri site 2025! 🎉

🔥 With 350+ onsite slots, this is your golden chance to battle it out and feel the adrenaline of the regionals on your way to the World Finals.

💡 Why you shouldn't miss this:
✅ Compete with the best coding minds across the country
✅ Sharpen your problem-solving & algorithmic skills
✅ Unlock internship & career opportunities with top tech firms

👉 Register today and choose Amritapuri as your regionals site!
🔗 https://amritaicpc.in/

⏳ Don't wait — the journey to the ICPC Finals starts here!`

        // Copy text to clipboard
        await navigator.clipboard.writeText(text)
        
        setCopying(false)
        setCopied(true)
        setTimeout(() => setCopied(false), 5000)
        
    } catch (error) {
        console.error('Error copying text:', error)
        setCopying(false)
    }
}

    // Improved copy image to clipboard function
    const copyImageToClipboard = async (poster: Poster) => {
        try {
            setCopying(true)
            const imageUrl = `${window.location.origin}${poster.imageUrl}`
            const imageBlob = await getImageBlob(imageUrl)
            
            const text = `🚀 Get Ready, Coders!
The first phase of the world's biggest and oldest coding competition is here – ICPC Asia West Amritapuri site 2025! 🎉

🔥 With 350+ onsite slots, this is your golden chance to battle it out and feel the adrenaline of the regionals on your way to the World Finals.

💡 Why you shouldn't miss this:
✅ Compete with the best coding minds across the country
✅ Sharpen your problem-solving & algorithmic skills
✅ Unlock internship & career opportunities with top tech firms

👉 Register today and choose Amritapuri as your regionals site!
🔗 https://amritaicpc.in/

⏳ Don't wait — the journey to the ICPC Finals starts here!`

            // Check if Clipboard API is supported
            if (navigator.clipboard && navigator.clipboard.write) {
                try {
                    // Try to copy both image and text
                    await navigator.clipboard.write([
                        new ClipboardItem({
                            [imageBlob.type]: imageBlob,
                            'text/plain': new Blob([text], { type: 'text/plain' })
                        })
                    ])
                } catch (error) {
                    // If image clipboard fails, try text only
                    try {
                        await navigator.clipboard.writeText(text)
                    } catch (textError) {
                        throw new Error('Clipboard not supported')
                    }
                }
            } else {
                throw new Error('Clipboard API not supported')
            }
            
            setCopying(false)
            setCopied(true)
            setTimeout(() => setCopied(false), 3000)
        } catch (error) {
            console.error('Error copying to clipboard:', error)
            setCopying(false)
            // Final fallback: download image
            downloadImage(poster)
        }
    }

    // Copy image and open WhatsApp
    const copyAndShareWhatsApp = async (poster: Poster) => {
        try {
            setCopying(true)
            const imageUrl = `${window.location.origin}${poster.imageUrl}`
            const imageBlob = await getImageBlob(imageUrl)
            
            // Copy image to clipboard
            if (navigator.clipboard && navigator.clipboard.write) {
                try {
                    await navigator.clipboard.write([
                        new ClipboardItem({
                            [imageBlob.type]: imageBlob
                        })
                    ])
                } catch (error) {
                    console.log('Image copy failed, downloading instead')
                    downloadImage(poster)
                }
            }
            
            // Open WhatsApp with text
            setTimeout(() => {
                const text = `🚀 Get Ready, Coders!
The first phase of the world's biggest and oldest coding competition is here – ICPC Asia West Amritapuri site 2025! 🎉

🔥 With 350+ onsite slots, this is your golden chance to battle it out and feel the adrenaline of the regionals on your way to the World Finals.

💡 Why you shouldn't miss this:
✅ Compete with the best coding minds across the country
✅ Sharpen your problem-solving & algorithmic skills
✅ Unlock internship & career opportunities with top tech firms

👉 Register today and choose Amritapuri as your regionals site!
🔗 https://amritaicpc.in/

⏳ Don't wait — the journey to the ICPC Finals starts here!`

                if (isMobile()) {
                    window.open(`whatsapp://send?text=${encodeURIComponent(text)}`, "_blank")
                } else {
                    window.open(`https://web.whatsapp.com/send?text=${encodeURIComponent(text)}`, "_blank")
                }
                
                setCopying(false)
                setCopied(true)
                setTimeout(() => setCopied(false), 5000)
            }, 300)
            
				} catch (error) {
					console.error('Error copying and sharing:', error)
					setCopying(false)
					// Fallback to simple WhatsApp share
					const text = `🚀 Get Ready, Coders!
		The first phase of the world's biggest and oldest coding competition is here – ICPC Asia West Amritapuri site 2025! 🎉
		
		🔥 With 350+ onsite slots, this is your golden chance to battle it out and feel the adrenaline of the regionals on your way to the World Finals.
		
		💡 Why you shouldn't miss this:
		✅ Compete with the best coding minds across the country
		✅ Sharpen your problem-solving & algorithmic skills
		✅ Unlock internship & career opportunities with top tech firms
		
		👉 Register today and choose Amritapuri as your regionals site!
		🔗 https://amritaicpc.in/
		
		⏳ Don't wait — the journey to the ICPC Finals starts here!`
		
					if (isMobile()) {
						window.open(`whatsapp://send?text=${encodeURIComponent(text)}`, "_blank")
					} else {
						window.open(`https://web.whatsapp.com/send?text=${encodeURIComponent(text)}`, "_blank")
					}
				}
    }

    // Copy image and open LinkedIn
    const copyAndShareLinkedIn = async (poster: Poster) => {
        try {
            setCopying(true)
            const imageUrl = `${window.location.origin}${poster.imageUrl}`
            const imageBlob = await getImageBlob(imageUrl)
            
            // Copy image to clipboard
            if (navigator.clipboard && navigator.clipboard.write) {
                try {
                    await navigator.clipboard.write([
                        new ClipboardItem({
                            [imageBlob.type]: imageBlob
                        })
                    ])
                } catch (error) {
                    console.log('Image copy failed, downloading instead')
                    downloadImage(poster)
                }
            }
            
            // Open LinkedIn
            setTimeout(() => {
   const text = `🚀 Get Ready, Coders!
The first phase of the world's biggest and oldest coding competition is here – ICPC Asia West Amritapuri site 2025! 🎉

🔥 With 350+ onsite slots, this is your golden chance to battle it out and feel the adrenaline of the regionals on your way to the World Finals.

💡 Why you shouldn't miss this:
✅ Compete with the best coding minds across the country
✅ Sharpen your problem-solving & algorithmic skills
✅ Unlock internship & career opportunities with top tech firms

👉 Register today and choose Amritapuri as your regionals site!
🔗 https://amritaicpc.in/

⏳ Don't wait — the journey to the ICPC Finals starts here!`
                const shareUrl = `https://www.linkedin.com/feed/?shareActive=true&text=${encodeURIComponent(text)}`
                window.open(shareUrl, "_blank")
                
                setCopying(false)
                setCopied(true)
                setTimeout(() => setCopied(false), 5000)
            }, 300)
            
		} catch (error) {
			console.error('Error copying and sharing:', error)
			setCopying(false)
			// Fallback to simple LinkedIn share
			  const text = `🚀 Get Ready, Coders!
The first phase of the world's biggest and oldest coding competition is here – ICPC Asia West Amritapuri site 2025! 🎉

🔥 With 350+ onsite slots, this is your golden chance to battle it out and feel the adrenaline of the regionals on your way to the World Finals.

💡 Why you shouldn't miss this:
✅ Compete with the best coding minds across the country
✅ Sharpen your problem-solving & algorithmic skills
✅ Unlock internship & career opportunities with top tech firms

👉 Register today and choose Amritapuri as your regionals site!
🔗 https://amritaicpc.in/

⏳ Don't wait — the journey to the ICPC Finals starts here!`
			const shareUrl = `https://www.linkedin.com/feed/?shareActive=true&text=${encodeURIComponent(text)}`
			window.open(shareUrl, "_blank")
		}
    }

    // Copy image and open Twitter
    const copyAndShareTwitter = async (poster: Poster) => {
        try {
            setCopying(true)
            const imageUrl = `${window.location.origin}${poster.imageUrl}`
            const imageBlob = await getImageBlob(imageUrl)
            
            // Copy image to clipboard
            if (navigator.clipboard && navigator.clipboard.write) {
                try {
                    await navigator.clipboard.write([
                        new ClipboardItem({
                            [imageBlob.type]: imageBlob
                        })
                    ])
                } catch (error) {
                    console.log('Image copy failed, downloading instead')
                    downloadImage(poster)
                }
            }
            
            // Open Twitter
            setTimeout(() => {
              
                        const text = `🚀 Get Ready, Coders!
The first phase of the world's biggest and oldest coding competition is here – ICPC Asia West Amritapuri site 2025! 🎉

🔥 With 350+ onsite slots, this is your golden chance to battle it out and feel the adrenaline of the regionals on your way to the World Finals.

💡 Why you shouldn't miss this:
✅ Compete with the best coding minds across the country
✅ Sharpen your problem-solving & algorithmic skills
✅ Unlock internship & career opportunities with top tech firms

👉 Register today and choose Amritapuri as your regionals site!
🔗 https://amritaicpc.in/

⏳ Don't wait — the journey to the ICPC Finals starts here!`
                const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`
                window.open(twitterUrl, "_blank")
                
                setCopying(false)
                setCopied(true)
                setTimeout(() => setCopied(false), 5000)
            }, 300)
            
		} catch (error) {
			console.error('Error copying and sharing:', error)
			setCopying(false)
			// Fallback to simple Twitter share
			const text = `🚀 Get Ready, Coders! ICPC Asia West Amritapuri site 2025! #ICPC #Programming #Coding`
			const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`
			window.open(twitterUrl, "_blank")
		}
	}

	return (
		<div className="w-full">
			{/* Sort Dropdown */}
			<div className="flex justify-end mb-6">
				<Select value={sortBy} onValueChange={(value: SortOption) => setSortBy(value)}>
					<SelectTrigger className="w-48">
						<SelectValue placeholder="Sort by date" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="newest">Newest First</SelectItem>
						<SelectItem value="oldest">Oldest First</SelectItem>
					</SelectContent>
				</Select>
			</div>

			{/* Poster Grid */}
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
				{sortedPosters.map((poster) => (
					<Card
						key={poster.id}
						className="group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105"
						onClick={() => setSelectedPoster(poster)}
					>
						<div className="relative h-64">
							<Image
								src={poster.imageUrl || "/placeholder.svg"}
								alt={poster.title}
								fill
								className="object-cover transition-transform duration-300 group-hover:scale-110"
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
								priority={poster.id <= 4} // Prioritize first 4 images
								placeholder="blur"
								blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
							/>
							<div className="absolute bottom-2 right-2 bg-black/70 rounded-full w-8 h-8 flex items-center justify-center">
								<FaShare
									className="text-white"
									size={16}
								/>
							</div>
						</div>
						<div className="p-4">
							<p className="text-sm text-muted-foreground">
								{poster.date.toLocaleDateString("en-US", {
									year: "numeric",
									month: "long",
									day: "numeric",
								})}
							</p>
						</div>
					</Card>
				))}
			</div>

			{/* Social Share Modal */}
			{selectedPoster && (
				<div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
					<div className="bg-card rounded-lg p-6 w-full max-w-md relative">
						<Button
							variant="ghost"
							size="icon"
							className="absolute top-2 right-2"
							onClick={() => setSelectedPoster(null)}
						>
							<X size={20} />
						</Button>

						<div className="text-center mb-6">
							<div className="relative w-32 h-40 mx-auto mb-4">
								<Image
									src={selectedPoster.imageUrl || "/placeholder.svg"}
									alt={selectedPoster.title}
									fill
									className="object-cover rounded-lg"
									sizes="128px"
								/>
							</div>
							<p className="text-muted-foreground text-sm">Share this poster</p>
							{copying && (
                                <p className="text-xs text-blue-600 mt-2">Copying image...</p>
                            )}
                            {copied && (
                                <p className="text-xs text-green-600 mt-2">
                                </p>
                            )}
						</div>

						{/* Mobile: Web Share API */}
						{navigator.share && isMobile() ? (
							<div className="flex flex-col gap-4">
								<Button
									className="flex items-center justify-center gap-2 h-12"
									onClick={() => shareWithWebAPI(selectedPoster)}
								>
									<Share2 className="w-5 h-5" />
									Share
								</Button>
								  <Button
                variant="outline"
                className="flex flex-col items-center justify-center gap-1 h-20 p-2"
                onClick={() => shareToOtherAppsMobile(selectedPoster)}
                disabled={copying}
            >
                <Copy className="w-6 h-6 text-gray-600" />
                <span className="text-xs">Copy Promotional Text</span>
                {copied && !copying && <span className="text-xs text-green-600">Copied!</span>}
            </Button>
								<Button
									variant="outline"
									className="flex items-center justify-center gap-2 h-12"
									onClick={() => downloadImage(selectedPoster)}
								>
									<Download className="w-5 h-5" />
									Download Only
								</Button>
								<p className="text-xs text-muted-foreground mt-2 text-center">
									{copied 
										? 'Now paste in your social media app!' 
										: 'Copy the text, share the poster, and paste the promo text on social media.'
									}
								</p>
							</div>
						) : (
							/* Desktop: Smart Copy + Share */
							<>
								{/* Copy to Clipboard Section */}
								{/* <div className="mb-6">
									<Button
										variant="outline"
										className={`w-full flex items-center justify-center gap-2 h-12 transition-colors ${
											copied 
												? 'bg-green-50 border-green-200 text-green-700 dark:bg-green-900/20 dark:border-green-800 dark:text-green-400' 
												: copying
												? 'bg-blue-50 border-blue-200 text-blue-700 dark:bg-blue-900/20 dark:border-blue-800 dark:text-blue-400'
												: 'hover:bg-gray-50 dark:hover:bg-gray-800'
										}`}
										onClick={() => copyImageToClipboard(selectedPoster)}
										disabled={copying}
									>
										<Copy className="w-5 h-5" />
										{copying ? 'Copying...' : copied ? 'Copied to Clipboard!' : 'Copy Image & Text'}
									</Button>
									<p className="text-xs text-muted-foreground mt-2 text-center">
										{copied 
											? 'Now paste in your social media app!' 
											: 'Copy image & text, then paste in any social media app'
										}
									</p>
								</div> */}

								{/* Smart Social Media Options */}
								<div className="grid grid-cols-2 gap-4">
									<Button
										variant="outline"
										className="flex items-center justify-center gap-2 h-12 bg-transparent hover:bg-green-50 dark:hover:bg-green-900/20"
										onClick={() => copyAndShareWhatsApp(selectedPoster)}
										disabled={copying}
									>
										<FaWhatsapp className="w-5 h-5 text-green-500" />
										{copying ? 'Copying...' : 'WhatsApp'}
									</Button>

									<Button
										variant="outline"
										className="flex items-center justify-center gap-2 h-12 bg-transparent hover:bg-blue-50 dark:hover:bg-blue-900/20"
										onClick={() => copyAndShareLinkedIn(selectedPoster)}
										disabled={copying}
									>
										<FaLinkedin className="w-5 h-5 text-blue-600" />
										{copying ? 'Copying...' : 'LinkedIn'}
									</Button>

									<Button
										variant="outline"
										className="flex items-center justify-center gap-2 h-12 bg-transparent hover:bg-blue-50 dark:hover:bg-blue-900/20"
										onClick={() => copyAndShareTwitter(selectedPoster)}
										disabled={copying}
									>
										<FaTwitter className="w-5 h-5 text-blue-400" />
										{copying ? 'Copying...' : 'Twitter'}
									</Button>

									<Button
										variant="outline"
										className="flex items-center justify-center gap-2 h-12 bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800"
										onClick={() => downloadImage(selectedPoster)}
									>
										<Download className="w-5 h-5 text-gray-600" />
										Download Only
									</Button>
								</div>

								{/* Instructions */}
								<div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                                    <p className="text-xs text-blue-700 dark:text-blue-300 text-center">
                                        💡 Click social media buttons to copy image + open app, then paste (Ctrl+V)
                                    </p>
                                </div>
							</>
						)}
					</div>
				</div>
			)}
		</div>
	)
}

