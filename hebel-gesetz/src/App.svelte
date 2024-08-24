<script lang="ts">
  import Scale from "./lib/scale.svelte";
  import "./app.css";
  import Paragraph from "./lib/paragraph.svelte";
  import Rechnung from "./lib/rechnung.svelte";
  import { left, right } from "./lib/store";

  function Balance() {
    const leftSide: [number, number, number] = [0, 0, 0];
    const rightSide: [number, number, number] = [0, 0, 0];

    let balanced = false;

    while (!balanced) {
      for (let i = 0; i < 3; i++) {
        leftSide[i] = Math.floor(Math.random() * 4) + 1;
        rightSide[i] = Math.floor(Math.random() * 4) + 1;
      }

      let leftTotal = 0;
      let rightTotal = 0;
      for (let i = 0; i < 3; i++) {
        leftTotal += leftSide[i] * (leftSide.length - i);
        rightTotal += rightSide[i] * (i + 1);
      }

      if (leftTotal == rightTotal) balanced = true;
    }

    left.set(leftSide);
    right.set(rightSide);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function unBalance() {
    const leftSide: [number, number, number] = [0, 0, 0];
    const rightSide: [number, number, number] = [0, 0, 0];

    let balanced = false;

    while (!balanced) {
      for (let i = 0; i < 3; i++) {
        leftSide[i] = Math.floor(Math.random() * 4) + 1;
        rightSide[i] = Math.floor(Math.random() * 4) + 1;
      }

      let leftTotal = 0;
      let rightTotal = 0;
      for (let i = 0; i < 3; i++) {
        leftTotal += leftSide[i] * (leftSide.length - i);
        rightTotal += rightSide[i] * (i + 1);
      }

      let tilt = Math.min(
        90,
        leftTotal > rightTotal
          ? (leftTotal - rightTotal) * 10
          : (rightTotal - leftTotal) * 10,
      );
      tilt = leftTotal > rightTotal ? -tilt : tilt;

      if (leftTotal != rightTotal && tilt < 60 && tilt > -60) balanced = true;
    }

    left.set(leftSide);
    right.set(rightSide);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
</script>

<h1
  class="text-5xl md:text-7xl font-poppins font-bold text-center text-transparent bg-gradient-to-t from-orange-500 to-yellow-500 bg-clip-text w-full p-2"
>
  Das Hebelgesetz
</h1>

<Scale />
<div class="-translate-y-20">
  <Paragraph
    title=""
    text="Alle Hebel drehen sich um einen Punkt, genannt Drehpunkt. Die Hebelarme eines Hebels beschriftet man l1 und l2. Für das Hebelgesetz wichtig ist das Produkt von l * F. In der Formel beschreibt l den Abstand zwischen Drehpunkt und dem Gewicht, das am zugehörigen Hebelarm hängt. Diese Formel kann man brauchen, um zu entscheiden, ob ein Hebelarm ausgeglichen ist.
"
  />

  <Paragraph
    title="Ausgeglichene Hebel"
    text="Wenn das Produkt Kraft und Hebelarm beider Arme gleich groß ist, ist der Hebel ausgeglichen. Ein Beispiel davon ist eine Wippe, wenn zwei gleich schwere Kinder auf beiden Seiten sitzen, ist die Wippe ausgeglichen."
  />
  <p class="text-center font-popppins font-bold p-2 text-orange-500 text-xl">
    Beispiele von ausgeglichenen Hebeln
  </p>
  <Rechnung
    formel={[
      [2, 6, 1, 12],
      [4, 2, 1, 8],
      [5, 4, 4, 5],
      [1, 6, 2, 3],
      [1, 20, 4, 5],
    ]}
  ></Rechnung>
  <button
    class="text-xl font-poppins rounded-md bg-gradient-to-r from-orange-500 to-yellow-500 p-2 block mx-auto m-5 active:scale-110 transition-transform"
    on:click={Balance}>Hebel ausgleichen</button
  >
  <Paragraph
    title="Kraft- und Lastarm"
    text="Diese Gesetzlichkeiten können aber auch gebraucht werden, um Kraft zu sparen.  Man unterscheidet zwischen Kraft- und Lastarm. Der Lastarm ist der Hebelarm, auf der sich die zu bewegende Last befindet, bei einer Astschere sind das die Klingen, der Kraftarm ist der Hebelarm, der versucht die Last zu bewegen, bei einer Astschere ist das der Griff. Der Lastarm muss dabei immer kürzer sein als der Kraftarm, damit das Produkt von dem Kraftarm * F gleich groß ist wie Lastarm * F, obwohl weniger Gewicht am Kraftarm hängt. Deshalb nennt man Hebel auch Kraftwandler."
  />
  <p class="text-center font-popppins font-bold p-2 text-orange-500 text-xl">
    Beispiele von unausgeglichenen Hebeln
  </p>
  <Rechnung
    formel={[
      [2, 7, 1, 9],
      [3, 4, 2, 7],
      [8, 1, 3, 5],
      [6, 3, 2, 14],
      [5, 2, 3, 4],
    ]}
  ></Rechnung>
  <button
    class="text-xl font-poppins rounded-md bg-gradient-to-r from-orange-500 to-yellow-500 p-2 block mx-auto m-5 active:scale-110 transition-transform"
    on:click={unBalance}>Hebel unausgleichen</button
  >
  <Paragraph
    title="Hebelarte"
    text="Weiter unterscheidet man zwischen einseitigen und zweiseitigen Hebeln. Wenn beide Hebel sich auf der gleichen Seite befinden, bezeichnet man dies als einseitiger Hebel, wenn das nicht der Fall ist, spricht man jedoch von einem zweiseitigen Hebel. Als Beispiele für zweiseitige Hebel zählen Wippen, Astscheren, Waage, Zange, einseitige Hebel sind zum Beispiel Nussknacker, Türklinken, Flaschenöffner und Schubkarren."
  />
</div>

<style lang="postcss"></style>
