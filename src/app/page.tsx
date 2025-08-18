'use client';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4">
      <div className="text-center space-y-8 max-w-2xl mx-auto">
        {/* Main Heading */}
        <div className="space-y-4">
                      <h1 className="text-xl md:text-3xl bg-gradient-to-r from-slate-900 to-slate-600 dark:from-slate-100 dark:to-slate-400 bg-clip-text text-transparent">
              <span className="font-thin">TIMCAMPBELL</span><span className="font-black">WORKS</span>
            </h1>
          <div className="h-0.5 w-24 bg-gradient-to-r from-teal-500 to-rose-500 mx-auto rounded-full"></div>
        </div>

        {/* Coming Soon Message */}
        <div className="space-y-6">
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Online soon. Stay tuned for updates.
          </p>
        </div>


        {/* Contact Info */}
        <div className="pt-12 text-sm text-slate-500 dark:text-slate-500">
          <p>Questions? Get in touch</p>
          <button 
            onClick={() => {
              const email = 'tim' + '@' + 'timcampbellworks' + '.com';
              window.location.href = 'mailto:' + email;
            }}
            className="text-rose-500 dark:text-rose-400 hover:underline transition-colors cursor-pointer bg-transparent border-none p-0 font-inherit"
          >
            Click to email me
          </button>
        </div>
      </div>
    </div>
  );
}
