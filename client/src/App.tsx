import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import PublicNotice from "./components/PublicNotice";
import { ThemeProvider } from "./contexts/ThemeContext";

import ReviewOperations from "./pages/ReviewOperations";
import Home from "./pages/Home";
import UpcomingReviews from "./pages/UpcomingReviews";
import AmpJoint10Review from "./pages/AmpJoint10Review";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import AffiliateDisclosure from "./pages/AffiliateDisclosure";
import CuralinReview from "./pages/CuralinReview";
import ProstaViveReview from "./pages/ProstaViveReview";
import AlphaTonicAdvertorial from "./pages/AlphaTonicAdvertorial";
import JointGlideReview from "./pages/JointGlideReview";
import ProstadineReview from "./pages/ProstadineReview";
import NitricBoostUltraReview from "./pages/NitricBoostUltraReview";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />

      <Route path="/review-operations" component={ReviewOperations} />
      <Route path="/upcoming-reviews" component={UpcomingReviews} />

      <Route path="/amp-joint-10-review" component={AmpJoint10Review} />
      <Route path="/curalin-review" component={CuralinReview} />
      <Route path="/prostavive-review" component={ProstaViveReview} />
      <Route path="/alpha-tonic" component={AlphaTonicAdvertorial} />
      <Route path="/joint-glide-review" component={JointGlideReview} />
      <Route path="/prostadine-review" component={ProstadineReview} />
      <Route path="/nitric-boost-ultra-review" component={NitricBoostUltraReview} />

      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-of-service" component={TermsOfService} />
      <Route path="/affiliate-disclosure" component={AffiliateDisclosure} />

      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <PublicNotice />
          <Router />
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;