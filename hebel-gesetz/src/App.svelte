<script lang="ts">
  import Scale from "./lib/scale.svelte";
  import "./app.css";
  import Paragraph from "./lib/paragraph.svelte";
  import Table from "./lib/table.svelte";
  import { left, right } from "./lib/store";
  import Images from "./lib/images.svelte";

  function Balance() {
    const leftSide: [number, number, number] = [0, 0, 0];
    const rightSide: [number, number, number] = [0, 0, 0];

    let balanced = false;

    let reversed = [0, 0, 0];

    while (!balanced || JSON.stringify(leftSide) == JSON.stringify(reversed)) {
      for (let i = 0; i < 3; i++) {
        leftSide[i] = Math.floor(Math.random() * 5);
        rightSide[i] = Math.floor(Math.random() * 5);
      }

      let leftTotal = 0;
      let rightTotal = 0;
      for (let i = 0; i < 3; i++) {
        leftTotal += leftSide[i] * (leftSide.length - i);
        rightTotal += rightSide[i] * (i + 1);
      }

      reversed = [...rightSide].reverse();

      if (
        leftTotal == rightTotal &&
        JSON.stringify(leftSide) != JSON.stringify(reversed)
      )
        balanced = true;
    }

    left.set(leftSide);
    right.set(rightSide);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function unBalance() {
    const leftSide: [number, number, number] = [0, 0, 0];
    const rightSide: [number, number, number] = [0, 0, 0];

    let balanced = true;

    while (balanced && leftSide.reverse() != rightSide) {
      for (let i = 0; i < 3; i++) {
        leftSide[i] = Math.floor(Math.random() * 5);
        rightSide[i] = Math.floor(Math.random() * 5);
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

      if (leftTotal != rightTotal && tilt < 60 && tilt > -60) balanced = false;
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
    text={[
      [
        {
          text: "Alle Hebel drehen sich um einen Punkt, genannt Drehpunkt. Die Hebelarme eines Hebels beschriftet man ",
          type: "",
        },
        { text: "l1 und l2.", type: "formel" },
        {
          text: " Für das Hebelgesetz entscheidend ist das Produkt von ",
          type: "",
        },
        { text: "l * F.", type: "formel" },
      ],
      [
        { text: "In der Formel beschreibt ", type: "" },
        { text: "l", type: "formel" },
        {
          text: " den Abstand zwischen Drehpunkt und der Kraft, also dem Gewicht, das am zugehörigen Hebelarm hängt. ",
          type: "",
        },
        { text: "F", type: "formel" },
        {
          text: " steht für die Kraft die auf den jeweiligen Hebel wirkt. ",
          type: "",
        },
        {
          text: "Diese Formel kann verwendet werden, um zu entscheiden, ob ein Hebelarm ausgeglichen ist.",
          type: "",
        },
      ],
    ]}
  />

  <Paragraph
    title="Ausgeglichene Hebel"
    text={[
      [
        {
          text: "Wenn das Produkt von Kraft und Hebelarm beider Arme gleich groß ist, ist der Hebel ausgeglichen. Ein Beispiel davon ist eine Wippe, wenn zwei gleich schwere Kinder auf beiden Seiten sitzen, ist die Wippe ausgeglichen.",
          type: "",
        },
      ],
    ]}
  />
  <p class="text-center font-popppins font-bold p-2 text-orange-500 text-xl">
    Beispiele von ausgeglichenen Hebeln
  </p>
  <Table
    formels={[
      [2, 6, 1, 12],
      [4, 2, 1, 8],
      [5, 4, 4, 5],
      [1, 6, 2, 3],
      [1, 20, 4, 5],
    ]}
  ></Table>
  <button
    class="text-xl font-poppins rounded-md bg-gradient-to-r from-orange-500 to-yellow-500 p-2 block mx-auto m-5 active:scale-110 transition-transform"
    on:click={Balance}>Hebel ausgleichen</button
  >
  <Paragraph
    title="Kraft- und Lastarm"
    text={[
      [
        {
          text: "Das Hebelgesetz kann aber auch gebraucht werden, um Kraft zu sparen.  Man unterscheidet zwischen Kraft- und Lastarm. Der Lastarm ist der Hebelarm, auf der sich die zu bewegende Last befindet, bei einer Astschere sind das die Klingen, der Kraftarm ist der Hebelarm, der versucht die Last zu bewegen, bei einer Astschere ist das der Griff.",
          type: "",
        },
      ],
      [
        {
          text: "Um Kraft zu sparen, muss der Lastarm dabei immer kürzer sein als der Kraftarm, damit das Produkt von ",
          type: "",
        },
        { text: "Kraftarm * F", type: "formel" },
        { text: " gleich groß ist wie ", type: "" },
        { text: "Lastarm * F", type: "formel" },
        {
          text: " obwohl weniger Kraft auf Kraftarm wirkt. Deshalb nennt man Hebel auch Kraftwandler.",
          type: "",
        },
      ],
    ]}
  />
  <p class="text-center font-popppins font-bold p-2 text-orange-500 text-xl">
    Beispiele von unausgeglichenen Hebeln
  </p>
  <Table
    formels={[
      [2, 7, 1, 9],
      [3, 4, 2, 7],
      [8, 1, 3, 5],
      [6, 3, 2, 14],
      [5, 2, 3, 4],
    ]}
  ></Table>
  <button
    class="text-xl font-poppins rounded-md bg-gradient-to-r from-orange-500 to-yellow-500 p-2 block mx-auto m-5 active:scale-110 transition-transform"
    on:click={unBalance}>Hebel kippen</button
  >
  <Images
    images={[
      [
        "https://www.jungheinrich-profishop.ch/wp-content/uploads/2022/05/Jungheinrich-Grafik-Nr.-125-Hebelkraft-berechnen-02-1024x534.jpg",
        "",
      ],
    ]}
  />

  <Paragraph
    title="Arten von Hebeln"
    text={[
      [
        {
          text: "Weiter unterscheidet man zwischen einseitigen und zweiseitigen Hebeln. Wenn beide Hebelarne sich auf der gleichen Seite befinden, bezeichnet man dies als einseitiger Hebel, wenn das nicht der Fall ist, spricht man jedoch von einem zweiseitigen Hebel.",
          type: "",
        },
      ],
      [
        {
          text: "Als Beispiele für zweiseitige Hebel zählen Wippen, Astscheren, Waage, Zange, einseitige Hebel sind zum Beispiel Nussknacker, Türklinken, Flaschenöffner und Schubkarren.",
          type: "",
        },
      ],
    ]}
  />
  <Images
    images={[
      [
        "https://physics.lakschool.com/de/themen/mechanik_hebel/images/zweiseitiger_hebel.png",
        "Zweiseitiger Hebel",
      ],
      [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwJB8XOIc_XI_jO8N3QGu3u03fO9ziySJ1_g&s",
        "Einseitiger Hebel",
      ],
    ]}
  />
</div>

<style lang="postcss"></style>
