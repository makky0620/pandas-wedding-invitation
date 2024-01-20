import {
  Hero,
  Greeting,
  Concept,
  Place,
  Schedule,
  Price,
  Outfit,
  InvitationForm,
} from '@/components/organisms';

export default function Home() {
  return (
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
  );
}
