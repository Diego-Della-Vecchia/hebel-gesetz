<script lang="ts">
  import Scale from "./lib/scale.svelte";
  import "./app.css";
  import Paragraph from "./lib/paragraph.svelte"
</script>


<Scale />
<div class="-translate-y-20">
  <Paragraph title="Das Hebelgesetz " text="Alle Hebel drehen sich um einen Punkt, genannt Drehpunkt. Die Hebelarme eines Hebels beschriftet man l1 und l2. Für das Hebelgesetz wichtig ist das Produkt von l * F. In der Formel beschreibt l den Abstand zwischen Drehpunkt und dem Gewicht, das am zugehörigen Hebelarm hängt. Diese Formel kann man brauchen, um zu entscheiden, ob ein Hebelarm ausgeglichen ist.
"/>
<Paragraph title="Ausgeglichene Hebel" text="Wenn das Produkt Kraft und Hebelarm beider Arme gleich groß ist, ist der Hebel ausgeglichen. Ein Beispiel davon ist eine Wippe, wenn zwei gleich schwere Kinder auf beiden Seiten sitzen, ist die Wippe ausgeglichen."/>
<Paragraph title="Kraft- und Lastarm" text="Diese Gesetzlichkeiten können aber auch gebraucht werden, um Kraft zu sparen.  Man unterscheidet zwischen Kraft- und Lastarm. Der Lastarm ist der Hebelarm, auf der sich die zu bewegende Last befindet, bei einer Astschere sind das die Klingen, der Kraftarm ist der Hebelarm, der versucht die Last zu bewegen, bei einer Astschere ist das der Griff. Der Lastarm muss dabei immer kürzer sein als der Kraftarm, damit das Produkt von dem Kraftarm * F gleich groß ist wie Lastarm * F, obwohl weniger Gewicht am Kraftarm hängt. Deshalb nennt man Hebel auch Kraftwandler."/>
<Paragraph title="Hebelarte" text="Weiter unterscheidet man zwischen einseitigen und zweiseitigen Hebeln. Wenn beide Hebel sich auf der gleichen Seite befinden, bezeichnet man dies als einseitiger Hebel, wenn das nicht der Fall ist, spricht man jedoch von einem zweiseitigen Hebel. Als Beispiele für zweiseitige Hebel zählen Wippen, Astscheren, Waage, Zange, einseitige Hebel sind zum Beispiel Nussknacker, Türklinken, Flaschenöffner und Schubkarren."/>
</div>
<style lang="postcss"></style>
 