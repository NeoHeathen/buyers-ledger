import { Route, Switch } from "wouter";
import { ThemeProvider } from "./contexts/ThemeContext";
import { publishedReviews } from "./data/reviewCatalog";
import AffiliateDisclosure from "./pages/AffiliateDisclosure";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ReviewPage from "./pages/ReviewPage";
import TermsOfService from "./pages/TermsOfService";

function NotFound() {
  return (
    <main className="site-shell">
      <section className="section">
        <p className="kicker">404</p>
        <h1>Page not found.</h1>
        <p>The page you requested is not in the current ledger.</p>
        <a className="button" href="/">Return home</a>
      </section>
    </main>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />

      {publishedReviews.map((review) => (
        <Route
          key={review.href}
          path={review.href}
          component={() => <ReviewPage review={review} />}
        />
      ))}

      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-of-service" component={TermsOfService} />
      <Route path="/affiliate-disclosure" component={AffiliateDisclosure} />

      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <Router />
    </ThemeProvider>
  );
}

export default App;
