
import { Link } from "react-router-dom";

export default function Motivation() {
  return (
    <div className="min-h-screen bg-white dark:bg-black pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">

        {/* HERO SECTION */}
        <div className="text-center mb-16 pt-8">
          <div className="inline-block mb-6">
            <span className="text-sm font-semibold tracking-wider uppercase text-gray-500 dark:text-gray-400">
              Our Story
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-6 leading-tight">
            Why We Do What We Do
          </h1>
          <p className="text-lg sm:text-xl text-black dark:text-white max-w-3xl mx-auto leading-relaxed opacity-90">
            Your money, your choice, our honest opinion.
          </p>
        </div>

        {/* MISSION STATEMENT */}
        <div className="bg-gray-100 dark:bg-gray-900 rounded-2xl p-8 sm:p-12 mb-12 border border-gray-200 dark:border-gray-800">
          <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-6 text-center">
            Our Mission
          </h2>
          <p className="text-lg sm:text-xl text-black dark:text-white leading-relaxed text-center max-w-4xl mx-auto">
            We test tech the way you actually use it—in your hands, in real life, not in some sterile lab. 
            We compare, we question, we dig deep. No fluff, no bias, just pure facts that help you decide 
            what's truly worth your investment.
          </p>
        </div>

        {/* CORE VALUES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          
          {/* Card 1 */}
          <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border-2 border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300">
            <div className="w-12 h-12 bg-gray-900 dark:bg-white rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
              Real-World Testing
            </h3>
            <p className="text-black dark:text-white leading-relaxed opacity-90">
              We don't rely on lab benchmarks or manufacturer claims. Every device we review is tested 
              in real-world scenarios—the way you'll actually use it. From battery drain during your 
              daily commute to camera performance in low light, we experience it all firsthand.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border-2 border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300">
            <div className="w-12 h-12 bg-gray-900 dark:bg-white rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
              Value Over Hype
            </h3>
            <p className="text-black dark:text-white leading-relaxed opacity-90">
              Your hard-earned money deserves respect. We focus on whether a device delivers genuine 
              value for its price, not just flashy features. We compare alternatives, highlight better 
              deals, and always ask: is this really worth your investment?
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border-2 border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300">
            <div className="w-12 h-12 bg-gray-900 dark:bg-white rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
              Unbiased Transparency
            </h3>
            <p className="text-black dark:text-white leading-relaxed opacity-90">
              No sponsors dictate our opinions. No brand partnerships influence our ratings. We call 
              out flaws even in popular devices and celebrate excellence wherever we find it. Our 
              loyalty is to you, the reader, not to any manufacturer or advertiser.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border-2 border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300">
            <div className="w-12 h-12 bg-gray-900 dark:bg-white rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
              Deep Investigations
            </h3>
            <p className="text-black dark:text-white leading-relaxed opacity-90">
              We don't scratch the surface—we dig deep. From teardown analyses to long-term durability 
              tests, we investigate every angle. We compare specifications, challenge marketing claims, 
              and provide context that helps you understand what really matters.
            </p>
          </div>
        </div>

        {/* PHILOSOPHY SECTION */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black rounded-2xl p-8 sm:p-12 mb-12 border border-gray-200 dark:border-gray-800">
          <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-8 text-center">
            Our Philosophy
          </h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-gray-900 dark:bg-white flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white dark:text-black font-bold text-sm">1</span>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-black dark:text-white mb-2">Question Everything</h4>
                <p className="text-black dark:text-white opacity-90">
                  We challenge manufacturer claims, scrutinize marketing speak, and verify every specification. 
                  If something sounds too good to be true, we test it until we have answers.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-gray-900 dark:bg-white flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white dark:text-black font-bold text-sm">2</span>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-black dark:text-white mb-2">Context Matters</h4>
                <p className="text-black dark:text-white opacity-90">
                  A flagship phone isn't automatically better than a mid-ranger. We evaluate each device 
                  in its price segment and use case, giving you comparisons that actually matter.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-gray-900 dark:bg-white flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white dark:text-black font-bold text-sm">3</span>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-black dark:text-white mb-2">Respect Your Choice</h4>
                <p className="text-black dark:text-white opacity-90">
                  We provide facts and insights, but the final decision is always yours. Different people 
                  have different needs, and we respect that. Our goal is to inform, not dictate.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* VISION SECTION */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-6">
            Looking Forward
          </h2>
          <p className="text-lg text-black dark:text-white max-w-3xl mx-auto leading-relaxed opacity-90 mb-8">
            Technology moves fast, but our commitment remains constant. We'll continue to test, compare, 
            and question—always putting your interests first. Because when you make a tech purchase, 
            it should be based on truth, not trends.
          </p>
          <p className="text-xl font-semibold text-black dark:text-white">
            Your money, your choice, our honest opinion.
          </p>
        </div>

        {/* CTA SECTION */}
        <div className="text-center pt-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-80 transition-all duration-300 shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}