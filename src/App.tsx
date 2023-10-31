import NavBar from "./layout/NavBar";
import Algorithm from "./pages/Algorithm";

function App() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <NavBar />
        <div className="bg-background text-foreground flex-1 overflow-auto mt-1">
          <Algorithm />
        </div>
      </div>
    </>
  );
}

export default App;
