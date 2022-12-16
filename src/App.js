// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="container font-Poppin px-3 pt-8">
      <header className="content-header mt-6 text-center">
        <h1 className="title text-2xl font-extralight">Realiable, efficient delivery</h1>
        <h1 className="sub-title text-2xl font-semibold  mb-4 text-Very-Dark-Blue">Powered by Technology</h1>
        <p className="description text-xs text-center mx-10 tracking-wide text-Grayish-Blue mb-10">Our Artificial powered tools use milliions of project data points to ensure that your project is successful</p>
      </header>

      <section className="cards mt-10 space-y-4 lg:flex lg:flex-row  lg:items-start lg:gap-0 lg:space-x-3 lg:flex-wrap">
        <article className="card rounded-md  border-cyan-500 border-t-4 p-5 lg:flex-1 lg:translate-y-24">
          <h2 className="font-semibold text-Very-Dark-Blue text-lg">Supervisor</h2>
          <p className="text-xs text-Grayish-Blue">Monitors activity to identify project roadblocks</p>
          <div className="icon flex justify-end mt-8">
            <img src=".\images\icon-supervisor.svg" alt="icon-supervisor" />
          </div>
        </article>

        <div className="space-y-4 lg:flex-1">
          <article className="card rounded-md  border-red-500 border-t-4 p-5">
            <h2 className="font-semibold text-Very-Dark-Blue text-lg">Team Builder</h2>
            <p className="text-xs text-Grayish-Blue">Scans our talent network to create the optimal team for your project</p>
            <div className="icon flex justify-end mt-8">
              <img src=".\images\icon-team-builder.svg" alt="icon-team-builder" />
            </div>
          </article>
          <article className="card rounded-md  border-orange-500 border-t-4 p-5">
            <h2 className="font-semibold text-Very-Dark-Blue text-lg">Karma</h2>
            <p className="text-xs text-Grayish-Blue">Regularly evaluates our talent to ensure quality</p>
            <div className="icon flex justify-end mt-8">
              <img src=".\images\icon-karma.svg" alt="icon-karma" />
            </div>
          </article>
        </div>

        <article className="card rounded-md  border-blue-500 border-t-4 p-5 lg:flex-1 lg:translate-y-20">
          <h2 className="font-semibold text-Very-Dark-Blue text-lg">Calculator</h2>
          <p className="text-xs text-Grayish-Blue">Uses data from past projects to provide better delivery estimates</p>
          <div className="icon flex justify-end mt-8">
            <img src=".\images\icon-calculator.svg" alt="icon-calculator" />
          </div>
        </article>
      </section>
    </div>
  );
}

export default App;
