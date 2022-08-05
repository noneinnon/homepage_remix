import Nav from "./nav";

export default function Index() {
  return (
    <>
      <Nav />
      <main className="grid gap-2 text-slate-800 sm:items-start md:place-items-center">
        <img
          className="m-auto mb-10 grid w-40 place-items-center rounded-md"
          src="https://media.giphy.com/media/wwrRPRP8c4F46kEVqM/giphy.gif"
          alt="antonio"
        />
        <h1 className="text-3xl font-bold">Privet!</h1>
        <p className="inline-block">I’m Anton and I’m a web developer.</p>
        <div className="flex flex-wrap gap-2 text-slate-600 sm:justify-start md:justify-center">
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
        <h2 className="text-2xl font-bold">Reach out</h2>
        <div className="flex flex-wrap gap-2 text-slate-600 sm:justify-start md:justify-center">
          <a href="mailto:antbrw@gmail.com">antbrw@gmail.com</a>
          <a
            href="https://barantonio.me/c81614fcc0bb44779965ae3241451cba.html"
            target="_blank"
          >
            cv
          </a>
        </div>
      </main>
    </>
  );
}
