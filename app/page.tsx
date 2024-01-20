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
        <InvitationForm />
      </main>
    </div>
  );
}
