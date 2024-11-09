import Feed from "@/components/layout/feed";
import Sidebar from "@/components/layout/sidebar";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <div className="flex min-h-dvh">
      <div className="flex-1 min-w-14">
        <Sidebar />
      </div>
      <div className="w-full max-w-md mx-auto md:max-w-lg">
        <Feed />
      </div>
      <div className="flex-1">{/* Placeholder for another sidebar */}</div>
      <Toaster />
    </div>
  );
}

export default App;
