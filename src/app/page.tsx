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
import WhatsappButton from "./WhatsappButton";

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
	return (
		<main className="flex flex-col min-h-screen">
			<Header />

			{/* 1. Hero / Pain Point Section */}
			<section className="relative w-full py-12 md:py-24 lg:py-32">
				<div className="container px-4 md:px-6">
					<div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
						{/* Left: Problem + CTA */}
						<div className="space-y-6 lg:pr-8">
							<h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
								Struggling with User Interviews?
							</h1>
							<p className="md:text-lg max-w-[600px] leading-relaxed">
								You’re not alone. Many university founders find it tough to ask
								the right questions and get real insights from potential
								customers. PainPoint AI is here to help you practice interviews
								without the guesswork—directly on WhatsApp.
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
								alt="A frustrated student founder"
								width={550}
								height={400}
								className="rounded-lg shadow-lg"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* 2. Features Section */}
			<section
				className="w-full py-12 md:py-24 lg:py-32 text-primary-foreground
                bg-gradient-to-b from-primary to-background
                "
			>
				<div className="container px-4 md:px-6 text-foreground">
					<div className="text-center mb-8">
						<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
							Why PainPoint AI?
						</h2>
						<p className="max-w-xl mx-auto">
							Designed for student founders who want real customer insights—
							fast, easy, and stress-free.
						</p>
					</div>

					<div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
						<Card className="relative overflow-hidden hover:shadow-xl transition-shadow">
							<CardContent className="p-6">
								<MessageSquare className="h-12 w-12 mb-4 text-primary" />
								<h3 className="text-xl font-bold mb-2">WhatsApp Integration</h3>
								<p>
									Practice interviews right in WhatsApp. No new apps to download
									or complex setups required.
								</p>
							</CardContent>
						</Card>
						<Card className="relative overflow-hidden hover:shadow-xl transition-shadow">
							<CardContent className="p-6">
								<BookOpen className="h-12 w-12 mb-4 text-primary" />
								<h3 className="text-xl font-bold mb-2">The Mom Test Method</h3>
								<p className="">
									Learn and apply the proven principles from Rob
									Fitzpatrick&apos;s essential startup book.
								</p>
							</CardContent>
						</Card>
						<Card className="relative overflow-hidden hover:shadow-xl transition-shadow">
							<CardContent className="p-6">
								<Brain className="h-12 w-12 mb-4 text-primary" />
								<h3 className="text-xl font-bold mb-2">Instant Feedback</h3>
								<p className="">
									Get actionable feedback on your interview technique and
									question quality in real-time.
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* 3. How It Works */}
			<section
				className="w-full py-12 md:py-24 lg:py-32 "
				id="start-practicing"
			>
				<div className="container px-4 md:px-6">
					<div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
						{/* Steps */}
						<div className="space-y-6">
							<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
								How It Works
							</h2>
							<ul className="grid gap-6">
								<li className="flex items-start gap-4">
									<CheckCircle2 className="h-6 w-6 text-primary mt-1" />
									<span>
										<strong>1.</strong> Register with just your name and target
										user persona
									</span>
								</li>
								<li className="flex items-start gap-4">
									<CheckCircle2 className="h-6 w-6 text-primary mt-1" />
									<span>
										<strong>2.</strong> Start a simulated interview via WhatsApp
									</span>
								</li>
								<li className="flex items-start gap-4">
									<CheckCircle2 className="h-6 w-6 text-primary mt-1" />
									<span>
										<strong>3.</strong> Practice asking effective questions
									</span>
								</li>
								<li className="flex items-start gap-4">
									<CheckCircle2 className="h-6 w-6 text-primary mt-1" />
									<span>
										<strong>4.</strong> Receive detailed feedback on your
										technique
									</span>
								</li>
							</ul>
							<div className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive">
								Start Practicing Free
								<div className="p-3 pr-7 rounded-full">
									<ArrowRight className="ml-2 h-5 w-5 animate-bounce-right" />
								</div>
								<WhatsappButton />
							</div>
						</div>

						{/* Mom Test Book or Additional Info */}
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
									<p className="">
										Learn the art of customer conversations using principles
										from this essential startup handbook.
									</p>
								</div>
							</div>
							{/* Optional: Short testimonial or user success story */}
							{/* <blockquote className="text-gray-600 italic">
                “PainPoint AI transformed how I interview customers.
                 It’s like having a mentor in my pocket!”
                <span className="block mt-2 font-semibold">— Student Founder at XYZ University</span>
              </blockquote> */}
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
