import Navbar from "./components/Navbar";

const App = () => {
  return (
    <main className="min-w-[260px] md:max-w-xl mx-auto min-h-screen flex flex-col items-center gap-8 mt-8 px-10 sm:px-12 md:px-14">
      <h2 className="text-2xl font-semibold">Qtech Todo</h2>
      <Navbar />
    </main>
  );
};

export default App;
