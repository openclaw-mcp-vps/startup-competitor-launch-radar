export default function Home() {
  const faqs = [
    {
      q: 'Which sources do you monitor?',
      a: 'We monitor competitor websites, changelog pages, GitHub releases, and Product Hunt launches — all automatically once you add a competitor.'
    },
    {
      q: 'How quickly are alerts delivered?',
      a: 'Checks run every 6 hours. When a change is detected, an AI-generated competitive analysis report lands in your inbox within minutes.'
    },
    {
      q: 'Can I cancel anytime?',
      a: 'Yes. Cancel anytime from your billing portal with no questions asked. Your monitoring stops at the end of the billing period.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          Competitive Intelligence
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Get alerts when competitors<br />
          <span className="text-[#58a6ff]">launch new features</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Competitor Launch Radar monitors rival websites, changelogs, and Product Hunt so you never miss a move. AI-powered reports tell you what changed and why it matters.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start monitoring — $39/mo
        </a>
        <p className="mt-3 text-xs text-[#6e7681]">No credit card required for 7-day trial. Cancel anytime.</p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: '🔍', title: 'Auto-detect changes', desc: 'Scrapes competitor sites, changelogs, and Product Hunt every 6 hours.' },
            { icon: '🤖', title: 'AI analysis', desc: 'Each detected change is analyzed and summarized into an actionable report.' },
            { icon: '📬', title: 'Instant email alerts', desc: 'Receive competitive intelligence reports the moment a launch is detected.' }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <div className="font-semibold text-white mb-1">{f.title}</div>
              <div className="text-sm text-[#8b949e]">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$39<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to stay ahead</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Monitor up to 20 competitors',
              'Website, changelog & Product Hunt tracking',
              'AI-generated competitive reports',
              'Instant email alerts',
              'Dashboard with change history',
              '7-day free trial'
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff]">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get started free
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently asked questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{faq.q}</div>
              <div className="text-sm text-[#8b949e]">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} Competitor Launch Radar. All rights reserved.
      </footer>
    </main>
  )
}
