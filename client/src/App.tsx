// Style reminder: Soft Futurism Corporate Minimalism — routes must preserve independent page navigation rather than single-page scroll jumps.
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import SiteLayout from "./components/SiteLayout";
import { ThemeProvider } from "./contexts/ThemeContext";
import About from "./pages/About";
import Business from "./pages/Business";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Insight, { InsightDetail } from "./pages/Insight";
import Technology from "./pages/Technology";

function Router() {
  return (
    <SiteLayout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/business" component={Business} />
        <Route path="/technology" component={Technology} />
        <Route path="/insight" component={Insight} />
        <Route path="/insight/:slug">{(params) => <InsightDetail slug={params.slug} />}</Route>
        <Route path="/contact" component={Contact} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </SiteLayout>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster richColors position="top-center" />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
