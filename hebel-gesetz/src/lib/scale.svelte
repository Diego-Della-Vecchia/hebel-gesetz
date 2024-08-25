<script>
  import { left, right } from "./store";
  let tilt = 0;

  $: {
    let leftTotal = 0;
    let rightTotal = 0;
    for (let i = 0; i < 3; i++) {
      leftTotal += $left[i] * ($left.length - i);
      rightTotal += $right[i] * (i + 1);
    }
    tilt = Math.min(
      90,
      leftTotal > rightTotal
        ? (leftTotal - rightTotal) * 10
        : (rightTotal - leftTotal) * 10,
    );
    tilt = leftTotal > rightTotal ? -tilt : tilt;
  }
</script>

<div class="flex justify-start flex-col items-center pt-20 p-5 overflow-x-clip">
  <div
    class=" bg-orange-500 rounded-md relative z-10 w-full rotate h-24 xl:w-1/3 md:w-2/4 flex transition-transform justify-between items-start overflow-y-visible p-5"
    style="--tilt:{tilt}"
  >
    {#each $left as _, index}
      <div>
        <button
          class="size-12 bg-white p-1 rounded-full mb-2 transition-transform active:scale-110"
          on:click={() => {
            if ($left[index] == 4) return;
            left.update((n) => {
              n[index] += 1;
              return n;
            });
          }}
        >
          <img src="/add.svg" alt="" />
        </button>
        <div class="rotate-reverse transition-transform h-0 overflow-y-visible">
          {#each Array($left[index]) as _}
            <div class="flex justify-center w-12 flex-col items-center mx-auto">
              <div class="w-4 h-12 bg-zinc-700 mx-auto rounded-t-md"></div>
              <div class="bg-orange-700 size-12 rounded-md mx-auto"></div>
            </div>
          {/each}
        </div>
      </div>
    {/each}
    <div class="bg-zinc-800 p-5 rounded-full"></div>
    {#each $right as _, index}
      <div>
        <button
          class="size-12 bg-white p-1 rounded-full mb-2 transition-transform active:scale-110"
          on:click={() => {
            if ($right[index] == 4) return;
            right.update((n) => {
              n[index] += 1;
              return n;
            });
          }}
        >
          <img src="/add.svg" alt="" />
        </button>
        <div class="rotate-reverse h-0 transition-transform overflow-y-visible">
          {#each Array($right[index]) as _}
            <div class="flex justify-center w-12 flex-col items-center mx-auto">
              <div class="w-4 h-12 bg-zinc-700 mx-auto rounded-t-md"></div>
              <div class="bg-orange-700 size-12 rounded-md mx-auto"></div>
            </div>
          {/each}
        </div>
      </div>
    {/each}
  </div>
  <div
    class="bg-zinc-800 h-96 rounded-md -translate-y-20 relative z-0 w-24"
  ></div>
  <button
    class="bg-gradient-to-r from-orange-500 -translate-y-20 to-yellow-500 m-5 p-2 text-xl font-poppins rounded-md transition-transform active:scale-110"
    on:click={() => {
      left.update(() => [0, 0, 0]);
      right.update(() => [0, 0, 0]);
    }}>Zurücksetzen</button
  >
</div>

<style>
  .rotate {
    transform: rotate(calc(var(--tilt) * 1deg));
  }
  .rotate-reverse {
    transform: rotate(calc(var(--tilt) * -1deg));
  }
</style>
