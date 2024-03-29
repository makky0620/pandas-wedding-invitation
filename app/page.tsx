import {
  Hero,
  Greeting,
  Concept,
  Place,
  Schedule,
  Price,
  Outfit,
  InvitationForm,
  Header,
  Logo,
  Footer,
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
        <Schedule />
        <Price />
        <Outfit />
        <Logo />
        <InvitationForm />
      </main>
      <Footer />
    </div>
  );
}
