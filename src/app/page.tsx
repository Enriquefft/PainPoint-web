import { ArrowRight, MessageSquare, BookOpen, CheckCircle2, Brain } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

import WhatsappButton from "./WhatsappButton"
export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-white to-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Master User Interviews with PainPoint
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Practice customer interviews with our AI-powered WhatsApp bot. Get instant feedback based on "The Mom
                  Test" principles.
                </p>
              </div>
              <div >
                <div className=

  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive">

                  Start Practicing Free
                                    <div className="p-3 pr-7 bg-stone-200 rounded-full">
                  <ArrowRight className="ml-2 h-5 w-5 animate-bounce-right" />
                                    </div>
                </div>
                                    <WhatsappButton />

              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card className="relative overflow-hidden">
                <CardContent className="p-6">
                  <MessageSquare className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-2">WhatsApp Integration</h3>
                  <p className="text-gray-500">
                    Practice interviews right in WhatsApp. No new apps to download or complex setups required.
                  </p>
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden">
                <CardContent className="p-6">
                  <BookOpen className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-2">The Mom Test Method</h3>
                  <p className="text-gray-500">
                    Learn and apply the proven principles from Rob Fitzpatrick&apos;s essential startup book.
                  </p>
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden">
                <CardContent className="p-6">
                  <Brain className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-2">Instant Feedback</h3>
                  <p className="text-gray-500">
                    Get actionable feedback on your interview technique and question quality in real-time.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">How It Works</h2>
                <ul className="grid gap-4">
                  <li className="flex items-center gap-4">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                    <span>Register with just your name and target user persona</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                    <span>Start a simulated interview via WhatsApp</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                    <span>Practice asking effective questions</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                    <span>Receive detailed feedback on your technique</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex items-center space-x-4">
                  <Image
                    alt="The Mom Test book cover"
                    className="rounded-lg shadow-lg"
                    src="/book.webp"
                    height="300"
                    width="200"
                  />
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Based on The Mom Test</h3>
                    <p className="text-gray-500">
                      Learn the art of customer conversations using principles from this essential startup handbook.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <footer className="w-full py-6 bg-gray-100">
        <div className="container px-4 md:px-6">
          <p className="text-center text-sm text-gray-500">
            © 2024 PainPoint. All rights reserved. Based on The Mom Test by Rob Fitzpatrick.
          </p>
        </div>
      </footer>
    </div>
  )
}
