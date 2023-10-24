import { CORE_CONCEPTS } from './data';

import Header from './components/Header';
import CoreConcept from './components/CoreConcept';

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => {
              return (
                <CoreConcept
                  {...concept}
                  key={concept.title}
                  // title={concept.title}
                  // alt={concept.title}
                  // description={concept.description}
                  // image={concept.image}
                />
              );
            })}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
