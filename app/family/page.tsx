import {
  Header,
  Hero,
  Greeting,
  Concept,
  Place,
  Schedule,
  Price,
  Outfit,
  Logo,
  InvitationForm,
  Footer,
  FamilySchedule,
} from '@/components/organisms';

export default function Home() {
  return (
    <div>
      <Header />
      <main className="font-serif">
        <Hero />
        <Greeting />
        <Concept />
        <Place />
        <FamilySchedule />
        <Price />
        <Outfit />
        <Logo />
        <InvitationForm />
      </main>
      <Footer />
    </div>
  );
}
