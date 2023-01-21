function App() {
  return (
    <section className="max-w-sm m-4 bg-white rounded-md xl:max-w-2xl xl:grid xl:grid-cols-2 shadow-2xl">
      <div className="p-4 xl:col-span-2 xl:p-10  ">
        <h1 className="text-customcyan text-xl xl:text-2xl font-bold pb-2">
          Join our community
        </h1>
        <h2 className="text-customyellow font-bold py-2 xl:text-lg">
          30-day, hassle-free money back guarantee
        </h2>

        <p className="text-customgrayishblue text-xs pr-3 pb-4 leading-loose xl:text-base xl:p-0 xl:pr-4">
          Gain access to our full library of tutorials along with expert code
          reviews. Perfect for any developers who are serious about honing their
          skills.
        </p>
      </div>

      <div className="bg-customcyan p-4 xl:rounded-bl-lg xl:px-10 xl:pt-6 xl:text-lg">
        <h2 className="text-white">Monthly Subscription</h2>
        <h1 className="text-white text-2xl flex items-center gap-3 xl:text-3xl xl:py-2">
          $29 <span className="text-customlightgray text-sm">per month</span>
        </h1>

        <p className=" text-sm text-customlightgray xl:text-base">
          Full access for less than $1 a day
        </p>
        <button className="bg-customyellow w-full rounded-md p-3 mt-6 mb-2 text-white shadow-xl">
          Sign Up
        </button>
      </div>

      <div className="bg-customcyancard p-4 rounded-b-xl xl:rounded-none xl:rounded-br-lg xl:pt-6 xl:px-10">
        <h1 className="text-white">Why us</h1>
        <ul className="text-customlightgray text-sm xl:pb-4 ">
          <li className="pt-4">Tutorials by industry experts</li>
          <li>Peer &amp; expert code review</li>
          <li>Coding exercises</li>
          <li>Access to our GitHub repos</li>
          <li>Community forum</li>
          <li>Flashcard decks</li>
          <li>New videos every week</li>
        </ul>
      </div>
    </section>
  );
}

export default App;
