import Navbar from "./components/Navbar";

const App = () => {
  return (
    <main className="main-container flex flex-col items-center gap-8">
      <h2 className="text-2xl font-semibold">Qtech Todo</h2>
      <Navbar />
    </main>
  );
};

export default App;
