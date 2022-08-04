export default function Index() {
  return (
    <main className="grid items-start gap-2 text-slate-800">
      <img
        className="grid place-items-center"
        src="https://barantonio.me/6a929c034cae36316af2b7c5f6078772a73040a3.png"
        alt="antonio"
      />
      <h1 className="text-3xl font-bold">Privet!</h1>
      <p className="inline-block w-screen">
        I’m Anton and I’m a software developer. I try to make world a better
        place with automation & electronic music.
      </p>
      <div className="flex flex-wrap gap-2 w-screen text-slate-600">
        <a href="https://github.com/noneinnon" target="_blank">
          github
        </a>
        <a
          href="https://www.linkedin.com/in/anton-baranov-2a415837/"
          target="_blank"
        >
          linkedin
        </a>
        <a href="http://dev.to/" target="_blank">
          dev.to
        </a>
        <a
          href="https://www.youtube.com/channel/UCbHoIDLoi138jso5nwGPPDg"
          target="_blank"
        >
          youtube
        </a>
        <a href="https://vimeo.com/baranovsound" target="_blank">
          vimeo
        </a>
        <a href="https://angel.co/u/anton-baranov-5" target="_blank">
          angellist
        </a>
      </div>
      <div>
        <h2 className="text-2xl font-bold">Reach out</h2>
        <div className="flex flex-wrap gap-2 w-screen text-slate-600">
          <a href="mailto:antbrw@gmail.com">antbrw@gmail.com</a>
          <a
            href="https://barantonio.me/c81614fcc0bb44779965ae3241451cba.html"
            target="_blank"
          >
            cv
          </a>
        </div>
      </div>
    </main>
  );
}
