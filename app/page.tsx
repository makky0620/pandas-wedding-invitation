import Concept from '@/components/organisms/concept';
import Greeting from '@/components/organisms/greeting';
import Place from '@/components/organisms/place';
import Schedule from '@/components/organisms/schedule';

export default function Home() {
  return (
    <main>
      <Greeting />
      <Concept />
      <Place />
      <Schedule />
    </main>
  );
}
