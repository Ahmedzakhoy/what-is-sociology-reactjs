import CoreConcept from "./CoreConcept.jsx";
import { CORE_CONCEPTS } from "../data.js";

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <p>
        <b>Sociology</b> is the systematic study of human society, social
        interactions, and social institutions, aiming to understand the
        patterns, structures, and dynamics that shape individuals' lives within
        larger social contexts. It explores a wide range of topics, including
        social institutions such as family, education, economy, and government,
        social inequality based on factors such as class, race, gender, and
        ethnicity, processes of social change, social interaction, and research
        methods.
      </p>
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} {...conceptItem} />
        ))}
      </ul>
    </section>
  );
}
