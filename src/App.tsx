import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import WhyKiaq from './pages/WhyKiaq'
import UseCases from './pages/UseCases'
import StartupScaling from './pages/StartupScaling'
import EnterpriseProjects from './pages/EnterpriseProjects'
import DigitalTransformation from './pages/DigitalTransformation'
import Solutions from './pages/Solutions'
import DedicatedTeams from './pages/DedicatedTeams'
import StaffAugmentation from './pages/StaffAugmentation'
import ProjectBased from './pages/ProjectBased'
import Platform from './pages/Platform'
import TalentMatching from './pages/TalentMatching'
import ProjectManagement from './pages/ProjectManagement'
import CollaborationTools from './pages/CollaborationTools'
import Resources from './pages/Resources'
import Blog from './pages/Blog'
import CaseStudies from './pages/CaseStudies'
import Whitepapers from './pages/Whitepapers'
import Webinars from './pages/Webinars'
import Videos from './pages/Videos'
import EBooks from './pages/EBooks'
import WhitePapers from './pages/Whitepapers'
import Talent from './pages/Talent'
import Apply from './pages/Apply'
import TalentSuccess from './pages/TalentSuccess'
import SkillDevelopment from './pages/SkillDevelopment'
import About from './pages/About'
import Mission from './pages/Mission'
import Team from './pages/Team'
import Careers from './pages/Careers'
import CustomerStories from './pages/CustomerStories'
import RequestConsultation from './pages/RequestConsultation'
import SignIn from './pages/SignIn'
import GetStarted from './pages/GetStarted'
import Insights from './pages/Insights'
import TalentCommunity from './pages/TalentCommunity'
import UntappedMarkets from './pages/UntappedMarkets'
import CloudDevops from './pages/CloudDevops'
import AdaptiveHiring from './pages/AdaptiveHiring'
import HowItWorks from './pages/HowItWorks'
import ManageRemoteTeams from './pages/ManageRemoteTeams'
// import CaseStudyDetail from './pages/CaseStudyDetail'
import MissionFocused from './pages/mission-focused'
import ImpactPage from './pages/impact'
import ApplicationDevelopment from './pages/ApplicationDevelopment'
import DataSciencePage from './pages/Datascience'
import DataEngineering from './pages/DataEngineering'
import PlatformOverview from './pages/platform-overview'
import Integrations from './pages/integrations'
import Customerdevelopment from './pages/customsoftware'
import LegacyModernization from './pages/LegacyModernization'
import WebAppDevelopment from './pages/WebAppdevelopment'
import GenaiEngagement from './pages/genai-engagement'
import CloudMigrations from './pages/Cloud-Migrations'
import Infographics from './pages/Infographics'
import HumansOfKiaq from './pages/humans-of-Kiaq'
import ProfilesInBrilliance from './pages/profiles-in-brilliance'
import Ourprocess from './pages/our-process'
import FindOpportunities from './pages/find-opportunities'
import TalentExperience from './pages/talent-experience'
import Perks from './pages/perks'
import Codewars from './pages/codewars'
import Helpcenter from './pages/help-center'
import Leadership from './pages/leadership'
import Sustainbility from './pages/sustainability'
import PressMedia from './pages/press-media'
import ContactUs from './pages/Contact-us'
import LegacySystems from './pages/legacy-system-modernization'

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<WhyKiaq />} />
          <Route path="/use-cases" element={<UseCases />} />
          <Route path="/startup-scaling" element={<StartupScaling />} />
          <Route path="/enterprise-projects" element={<EnterpriseProjects />} />
          <Route path="/digital-transformation" element={<DigitalTransformation />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/dedicated-teams" element={<DedicatedTeams />} />
          <Route path="/how-kiaq-works" element={<StaffAugmentation />} />
          <Route path="/successfully-manage-remote" element={<ProjectBased />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/talent-matching" element={<TalentMatching />} />
          <Route path="/project-management" element={<ProjectManagement />} />
          <Route path="/collaboration-tools" element={<CollaborationTools />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/whitepapers" element={<Whitepapers />} />
          <Route path="/webinars" element={<Webinars />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/ebooks" element={<EBooks />} />
          <Route path="/white-papers" element={<WhitePapers />} />
          <Route path="/talent" element={<Talent />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/talent-success" element={<TalentSuccess />} />
          <Route path="/skill-development" element={<SkillDevelopment />} />
          <Route path="/about" element={<About />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/team" element={<Team />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/customer-stories" element={<CustomerStories />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/talent-community" element={<TalentCommunity />} />
          <Route path="/untapped-markets" element={<UntappedMarkets />} />
          <Route path="/cloud-devops" element={<CloudDevops />} />
          <Route path="/adaptive-hiring" element={<AdaptiveHiring />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/manage-remote-teams" element={<ManageRemoteTeams />} />
          <Route path="/Contact-us" element={<RequestConsultation />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/get-started" element={<GetStarted />} />
          {/* <Route path="/case-study" element={<CaseStudyDetail />} /> */}
          <Route path="/mission-focused" element={<MissionFocused />} />
          <Route path="/impact" element={<ImpactPage />} />
          <Route path="/ourservices" element={<ApplicationDevelopment />} />
          <Route path="/testimonials" element={<DataSciencePage />} />
          <Route path="/contactus" element={<DataEngineering />} />
          <Route path="/platform-overview" element={<PlatformOverview />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/custom-software-development" element={<Customerdevelopment />} />
          <Route path="/legacy-modernization" element={<LegacyModernization />} />
          <Route path="/web-app-development" element={<WebAppDevelopment />} />
          <Route path="/genai-engagement" element={<GenaiEngagement />} />
          <Route path="/cloud-migrations" element={<CloudMigrations />} />
          <Route path="/infographics" element={<Infographics />} />
          <Route path="/our-expertise" element={<HumansOfKiaq />} />
          <Route path="/profiles-in-brilliance" element={<ProfilesInBrilliance />} />
          <Route path="/our-process" element={<Ourprocess />} />
          <Route path="/find-opportunities" element={<FindOpportunities />} />
          <Route path="/talent-experience" element={<TalentExperience />} />
          <Route path="/perks" element={<Perks />} />
          <Route path="/codewars" element={<Codewars />} />
          <Route path="/help-center" element={<Helpcenter />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/sustainability" element={<Sustainbility />} />
          <Route path="/press-media" element={<PressMedia />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/legacy-system-modernization" element={<LegacySystems />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
