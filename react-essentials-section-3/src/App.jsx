import { CORE_CONCEPTS } from './data';

import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton';

function App() {
  function handleClick(selectedButton) {
    console.log(selectedButton);
  }

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
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton
              onClick={() => {
                handleClick('components');
              }}
            >
              Components
            </TabButton>
            <TabButton
              onClick={() => {
                handleClick('jsx');
              }}
            >
              JSX
            </TabButton>
            <TabButton
              onClick={() => {
                handleClick('props');
              }}
            >
              Props
            </TabButton>
            <TabButton
              onClick={() => {
                handleClick('state');
              }}
            >
              State
            </TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
