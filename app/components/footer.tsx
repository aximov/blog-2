export default function Footer() {
  return (
    <footer className="w-full bg-secondary text-primary border-t-4 border-primary pt-12 pb-24 mt-auto">
      <div className="layout-grid">
        <div className="col-span-full mb-12">
          <h2 className="text-[12vw] leading-none font-bold tracking-tighter opacity-10 select-none">
            AXIMOV
          </h2>
        </div>

        <div className="col-span-2 md:col-span-4">
          <p className="font-mono text-sm uppercase mb-4 text-accent">Connect</p>
          <ul className="space-y-2">
            <li><a href="https://x.com/aximovich" target="_blank" rel="noopener noreferrer" className="hover:text-accent font-bold text-xl block">X / TWITTER</a></li>
            <li><a href="https://github.com/aximov" target="_blank" rel="noopener noreferrer" className="hover:text-accent font-bold text-xl block">GITHUB</a></li>
            <li><a href="/rss" className="hover:text-accent font-bold text-xl block">RSS FEED</a></li>
          </ul>
        </div>

        <div className="col-span-2 md:col-span-4 md:col-start-9">
          <p className="font-mono text-sm uppercase mb-4 text-accent">Copyright</p>
          <p className="text-sm opacity-60 font-medium">
            Since 2021 NAKAYAMA DAICHI.<br />
            ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
