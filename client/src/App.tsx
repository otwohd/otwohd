// Route system: homepage is a category hub; each category/detail uses independent page navigation with immediate scroll reset.
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { useLayoutEffect } from "react";
import { Route, Router as WouterRouter, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import MainPopup from "./components/MainPopup";
import SiteLayout from "./components/SiteLayout";
import { ThemeProvider } from "./contexts/ThemeContext";
import About from "./pages/About";
import AdminDashboard from "./pages/AdminDashboard";
import AdminLogin from "./pages/AdminLogin";
import Business, { BusinessDetail } from "./pages/Business";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Insight, { InsightDetail } from "./pages/Insight";
import Process from "./pages/Process";

const routerBase = import.meta.env.BASE_URL === "/" ? undefined : import.meta.env.BASE_URL.replace(/\/$/, "");

function ScrollToTop() {
  const [location] = useLocation();

  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const root = document.documentElement;
    const previousScrollBehavior = root.style.scrollBehavior;

    root.style.scrollBehavior = "auto";

    const resetScroll = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      root.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    resetScroll();
    const frame = window.requestAnimationFrame(resetScroll);
    const timer = window.setTimeout(() => {
      resetScroll();
      root.style.scrollBehavior = previousScrollBehavior;
    }, 80);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timer);
      root.style.scrollBehavior = previousScrollBehavior;
    };
  }, [location]);

  return null;
}

function Router() {
  return (
    <WouterRouter base={routerBase}>
      <ScrollToTop />
      <Switch>
        {/* 관리자 전용 라우트 (SiteLayout 없음) */}
        <Route path="/admin/login" component={AdminLogin} />
        <Route path="/admin" component={AdminDashboard} />

        {/* 공개 사이트 라우트 */}
        <Route>
          <SiteLayout>
            <MainPopup />
            <Switch>
              <Route path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/business" component={Business} />
              <Route path="/business/:slug">{(params) => <BusinessDetail slug={params.slug} />}</Route>
              <Route path="/process" component={Process} />
              <Route path="/technology" component={Process} />
              <Route path="/insight" component={Insight} />
              <Route path="/insight/:slug">{(params) => <InsightDetail slug={params.slug} />}</Route>
              <Route path="/contact" component={Contact} />
              <Route path="/404" component={NotFound} />
              <Route component={NotFound} />
            </Switch>
          </SiteLayout>
        </Route>
      </Switch>
    </WouterRouter>
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
