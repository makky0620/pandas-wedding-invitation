import Concept from '@/components/organisms/concept';
import Greeting from '@/components/organisms/greeting';
import Place from '@/components/organisms/place';

export default function Home() {
  return (
    <main>
      <Greeting />
      <Concept />
      <Place />
    </main>
  );
}
