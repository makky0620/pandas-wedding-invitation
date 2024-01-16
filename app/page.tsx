import Concept from '@/components/organisms/concept';
import Greeting from '@/components/organisms/greeting';
import Hero from '@/components/organisms/hero';
import InvitationForm from '@/components/organisms/invitationForm';
import Outfit from '@/components/organisms/outfit';
import Place from '@/components/organisms/place';
import Price from '@/components/organisms/price';
import Schedule from '@/components/organisms/schedule';

export default function Home() {
  return (
    <main>
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
