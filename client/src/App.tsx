import { Route, Switch } from "wouter";
import Home from "./pages/Home";
import ReviewPage from "./pages/ReviewPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import AffiliateDisclosure from "./pages/AffiliateDisclosure";
import { publishedReviews } from "./data/reviewCatalog";
function App(){return <Switch><Route path="/" component={Home}/><Route path="/privacy-policy" component={PrivacyPolicy}/><Route path="/terms-of-service" component={TermsOfService}/><Route path="/affiliate-disclosure" component={AffiliateDisclosure}/>{publishedReviews.map(r=><Route key={r.href} path={r.href}>{()=> <ReviewPage review={r}/>}</Route>)}<Route>{()=> <Home/>}</Route></Switch>}
export default App;
