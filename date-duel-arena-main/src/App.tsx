import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import HowItWorks from "./pages/HowItWorks";
import ChooseBattle from "./pages/ChooseBattle";
import DaterArena from "./pages/DaterArena";
import SpectatorProtocol from "./pages/SpectatorProtocol";
import SpectatorArena from "./pages/SpectatorArena";
import NotFound from "./pages/NotFound";
import BackButton from "./components/BackButton";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <BackButton />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/choose-battle" element={<ChooseBattle />} />
          <Route path="/arena" element={<DaterArena />} />
          <Route path="/spectator-protocol" element={<SpectatorProtocol />} />
          <Route path="/spectator-arena" element={<SpectatorArena />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
