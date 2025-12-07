'use client'
import { useEffect, useState } from "react";
import MeetsAgenda from "@/components/MeetsAgenda";
import { ModeToggle } from "@/components/ModeToogle";
import { Card, CardContent } from "@/components/ui/card";
import {
	ArrowRight,
	BookOpen,
	Brain,
	CheckCircle2,
	MessageSquare,
} from "lucide-react";
import Image from "next/image";
import WhatsappButton from "@/components/WhatsappButton";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"; // Assuming you have a Tabs component

function Header() {
	return (
		<header className="w-full shadow-md py-4 top-0">
			<div className="container px-4 md:px-6 flex items-center justify-between">
				<div className="flex items-center space-x-2">
					<span className="text-4xl font-bold">PainPoint AI</span>
				</div>
				<ModeToggle />
			</div>
		</header>
	);
}

export default function LandingPage() {
	const [defaultTab, setDefaultTab] = useState("startup");

	// Read saved tab from localStorage on mount
	useEffect(() => {
		const savedTab = localStorage.getItem("preferredTab");
		if (savedTab) setDefaultTab(savedTab);
	}, []);

	// Save tab preference whenever it changes
	const handleTabChange = (value) => {
		setDefaultTab(value);
		if (typeof window !== "undefined") {
			localStorage.setItem("preferredTab", value);
		}
	};

	return (
		<main className="flex flex-col min-h-screen">
			<Header />
			{/* Tab component wrapping the two distinct client experiences */}
			<Tabs defaultValue={defaultTab} onValueChange={handleTabChange} className="w-full">
				<TabsList className="container px-4 md:px-6 flex justify-center my-6">
					<TabsTrigger value="startup" className="mx-2">
						Startup Founders
					</TabsTrigger>
					<TabsTrigger value="recruitment" className="mx-2">
						Recruitment Companies
					</TabsTrigger>
				</TabsList>

				{/* Client 1: Startup Founders */}
				<TabsContent value="startup">
					{/* 1. Hero / Pain Point Section for Founders */}
					<section className="relative w-full py-12 md:py-24 lg:py-32">
						<div className="container px-4 md:px-6">
							<div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
								{/* Left: Problem + CTA */}
								<div className="space-y-6 lg:pr-8">
									<h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
										Struggling with User Interviews?
									</h1>
									<p className="md:text-lg max-w-[600px] leading-relaxed">
										Many startup founders find it tough to ask the right questions to uncover real customer pains. PainPoint AI helps you practice your user interviews—directly on WhatsApp.
									</p>
									<div className="flex space-x-4 items-center">
										<WhatsappButton />
										<p className="inline-block align-middle">or</p>
										<MeetsAgenda className="h-13" />
									</div>
								</div>
								{/* Right: Illustration / Image */}
								<div className="flex justify-center lg:justify-end">
									<Image
										src="/mark_zuckerberg.png"
										alt="A determined startup founder"
										width={550}
										height={400}
										className="rounded-lg shadow-lg"
									/>
								</div>
							</div>
						</div>
					</section>

					{/* 2. Features Section for Founders */}
					<section className="w-full py-12 md:py-24 lg:py-32 text-primary-foreground bg-gradient-to-b from-primary/70 from-40% to-background">
						<div className="container px-4 md:px-6 text-foreground">
							<div className="text-center mb-8">
								<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
									Why PainPoint AI?
								</h2>
								<p className="max-w-xl mx-auto">
									Designed for founders who want real customer insights—fast, easy, and stress-free.
								</p>
							</div>
							<div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
								<Card className="relative overflow-hidden hover:shadow-xl transition-shadow">
									<CardContent className="p-6">
										<MessageSquare className="h-12 w-12 mb-4 text-primary" />
										<h3 className="text-xl font-bold mb-2">WhatsApp Integration</h3>
										<p>
											Practice interviews directly in WhatsApp without extra downloads or setups.
										</p>
									</CardContent>
								</Card>
								<Card className="relative overflow-hidden hover:shadow-xl transition-shadow">
									<CardContent className="p-6">
										<BookOpen className="h-12 w-12 mb-4 text-primary" />
										<h3 className="text-xl font-bold mb-2">The Mom Test Method</h3>
										<p>
											Apply proven interview principles from Rob Fitzpatrick’s essential startup guide.
										</p>
									</CardContent>
								</Card>
								<Card className="relative overflow-hidden hover:shadow-xl transition-shadow">
									<CardContent className="p-6">
										<Brain className="h-12 w-12 mb-4 text-primary" />
										<h3 className="text-xl font-bold mb-2">Instant Feedback</h3>
										<p>
											Get actionable feedback on your interview technique and question quality in real time.
										</p>
									</CardContent>
								</Card>
							</div>
						</div>
					</section>

					{/* 3. How It Works for Founders */}
					<section className="w-full py-12 md:py-24 lg:py-32" id="start-practicing">
						<div className="container px-4 md:px-6">
							<div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
								<div className="space-y-6">
									<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">How It Works</h2>
									<ul className="grid gap-6">
										<li className="flex items-start gap-4">
											<CheckCircle2 className="h-6 w-6 text-primary mt-1" />
											<span><strong>1.</strong> Register with your name</span>
										</li>
										<li className="flex items-start gap-4">
											<CheckCircle2 className="h-6 w-6 text-primary mt-1" />
											<span><strong>2.</strong> Start a conversation by writing your target user persona</span>
										</li>
										<li className="flex items-start gap-4">
											<CheckCircle2 className="h-6 w-6 text-primary mt-1" />
											<span><strong>3.</strong> Chat and discover valuable insights</span>
										</li>
										<li className="flex items-start gap-4">
											<CheckCircle2 className="h-6 w-6 text-primary mt-1" />
											<span><strong>4.</strong> Receive detailed feedback on your questions and findings</span>
										</li>
									</ul>
									<div className="inline-flex items-center justify-center gap-2 text-sm font-medium">
										<span>Start Practicing Free</span>
										<div className="p-3 pr-7 rounded-full">
											<ArrowRight className="ml-2 h-5 w-5 animate-bounce-right" />
										</div>
										<WhatsappButton />
									</div>
								</div>
								<div className="flex flex-col justify-center space-y-6">
									<div className="flex items-center gap-4">
										<Image
											alt="The Mom Test book cover"
											className="rounded-lg shadow-lg"
											src="/book.webp"
											height={300}
											width={200}
										/>
										<div className="space-y-2">
											<h3 className="text-xl font-bold">Based on The Mom Test</h3>
											<p>
												Learn the art of customer conversations using proven principles from this startup handbook.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</TabsContent>

				{/* Client 2: Recruitment Companies */}
				<TabsContent value="recruitment">
					{/* 1. Hero / Pain Point Section for Recruiters */}
					<section className="relative w-full py-12 md:py-24 lg:py-32">
						<div className="container px-4 md:px-6">
							<div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
								{/* Left: Problem + CTA */}
								<div className="space-y-6 lg:pr-8">
									<h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
										Need to Validate Soft-Skills?
									</h1>
									<p className="md:text-lg max-w-[600px] leading-relaxed">
										Recruitment companies understand that technical skills are only part of the picture. PainPoint AI helps you verify and even enhance your talent’s soft-skills – all via a seamless WhatsApp experience.
									</p>
									<div className="flex space-x-4 items-center">
										<WhatsappButton />
										<p className="inline-block align-middle">or</p>
										<MeetsAgenda className="h-13" />
									</div>
								</div>
								{/* Right: Illustration / Image */}
								<div className="flex justify-center lg:justify-end">
									<Image
										src="/recruitment_image.png"
										alt="Recruitment process illustration"
										width={550}
										height={400}
										className="rounded-lg shadow-lg"
									/>
								</div>
							</div>
						</div>
					</section>

					{/* 2. Features Section for Recruiters */}
					<section className="w-full py-12 md:py-24 lg:py-32 text-primary-foreground bg-gradient-to-b from-primary/70 from-40% to-background">
						<div className="container px-4 md:px-6 text-foreground">
							<div className="text-center mb-8">
								<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
									Why PainPoint AI?
								</h2>
								<p className="max-w-xl mx-auto">
									Optimized for recruitment companies – validate and improve your candidates' soft-skills efficiently.
								</p>
							</div>
							<div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
								<Card className="relative overflow-hidden hover:shadow-xl transition-shadow">
									<CardContent className="p-6">
										<MessageSquare className="h-12 w-12 mb-4 text-primary" />
										<h3 className="text-xl font-bold mb-2">WhatsApp Integration</h3>
										<p>
											Use WhatsApp for smooth, no-hassle conversations with candidates.
										</p>
									</CardContent>
								</Card>
								<Card className="relative overflow-hidden hover:shadow-xl transition-shadow">
									<CardContent className="p-6">
										<BookOpen className="h-12 w-12 mb-4 text-primary" />
										<h3 className="text-xl font-bold mb-2">Soft-Skills Insights</h3>
										<p>
											Focus on UI/UX and software soft-skills – get real insights into candidate communication.
										</p>
									</CardContent>
								</Card>
								<Card className="relative overflow-hidden hover:shadow-xl transition-shadow">
									<CardContent className="p-6">
										<Brain className="h-12 w-12 mb-4 text-primary" />
										<h3 className="text-xl font-bold mb-2">Actionable Feedback</h3>
										<p>
											Provide candidates with feedback to improve their soft-skills over time.
										</p>
									</CardContent>
								</Card>
							</div>
						</div>
					</section>

					{/* 3. How It Works for Recruiters */}
					<section className="w-full py-12 md:py-24 lg:py-32" id="start-practicing">
						<div className="container px-4 md:px-6">
							<div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
								<div className="space-y-6">
									<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">How It Works</h2>
									<ul className="grid gap-6">
										<li className="flex items-start gap-4">
											<CheckCircle2 className="h-6 w-6 text-primary mt-1" />
											<span><strong>1.</strong> Register your company details</span>
										</li>
										<li className="flex items-start gap-4">
											<CheckCircle2 className="h-6 w-6 text-primary mt-1" />
											<span><strong>2.</strong> Start a conversation to evaluate candidates’ soft-skills</span>
										</li>
										<li className="flex items-start gap-4">
											<CheckCircle2 className="h-6 w-6 text-primary mt-1" />
											<span><strong>3.</strong> Receive feedback on communication and interpersonal abilities</span>
										</li>
										<li className="flex items-start gap-4">
											<CheckCircle2 className="h-6 w-6 text-primary mt-1" />
											<span><strong>4.</strong> Empower your talent to improve their soft-skills through targeted practice</span>
										</li>
									</ul>
									<div className="inline-flex items-center justify-center gap-2 text-sm font-medium">
										<span>Start Improving Today</span>
										<div className="p-3 pr-7 rounded-full">
											<ArrowRight className="ml-2 h-5 w-5 animate-bounce-right" />
										</div>
										<WhatsappButton />
									</div>
								</div>
								<div className="flex flex-col justify-center space-y-6">
									<div className="flex items-center gap-4">
										<Image
											alt="Soft-skills improvement illustration"
											className="rounded-lg shadow-lg"
											src="/softskills_improvement.png"
											height={300}
											width={200}
										/>
										<div className="space-y-2">
											<h3 className="text-xl font-bold">Empower Your Talent</h3>
											<p>
												Not only do you evaluate, but your candidates also get a chance to refine their soft-skills using our platform.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</TabsContent>
			</Tabs>
		</main>
	);
}
