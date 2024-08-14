<script>
  let left = [0, 0, 0];
  let right = [0, 0, 0];
  let tilt = 0;

  function calculateTotals() {
    let leftTotal = 0;
    let rightTotal = 0;
    for (let i = 0; i < 3; i++) {
      leftTotal += left[i] * (left.length - i);
      rightTotal += right[i] * (i + 1);
    }
    return { leftTotal, rightTotal };
  }

  $: {
    const { leftTotal, rightTotal } = calculateTotals();
    tilt = Math.min(
      90,
      leftTotal > rightTotal
        ? (leftTotal - rightTotal) * 10
        : (rightTotal - leftTotal) * 10,
    );
    tilt = leftTotal > rightTotal ? -tilt : tilt;
    console.log(left, right, leftTotal, rightTotal);
  }
</script>

<div class="flex justify-start flex-col items-center py-20">
  <div
    class=" bg-orange-500 scale absolute top-40 w-full h-24 md:w-3/4 flex transition-transform justify-between items-start overflow-y-visible p-5"
    style="--tilt:{tilt}"
  >
    {#each left as _, index}
      <div class="flex justify-center items-center flex-col">
        <button
          class="size-10 bg-white p-1 rounded-full transition-transform active:scale-110"
          on:click={() => {
            if (left[index] == 4) return;
            left[index] = left[index] + 1;
          }}
        >
          <img src="/add.svg" alt="" />
          {#each Array(left[index]) as _}
            <div class="flex justify-center w-12 flex-col items-center">
              <div class="w-4 h-12 bg-zinc-700 mx-auto"></div>
              <div class="bg-orange-700 size-12 rounded-md mx-auto"></div>
            </div>
          {/each}
        </button>
      </div>
    {/each}
    <div class="bg-zinc-800 p-5 rounded-full"></div>
    {#each right as _, index}
      <div>
        <button
          class="size-10 bg-white p-1 rounded-full transition-transform active:scale-110"
          on:click={() => {
            if (right[index] == 4) return;
            right[index] = right[index] + 1;
          }}
        >
          <img src="/add.svg" alt="" />
          {#each Array(right[index]) as _}
            <div class="flex justify-center w-12 flex-col items-center">
              <div class="w-4 h-12 bg-zinc-700 mx-auto"></div>
              <div class="bg-orange-700 size-12 rounded-md mx-auto"></div>
            </div>
          {/each}
        </button>
      </div>
    {/each}
  </div>
  <div class="bg-zinc-800 h-[70vh] w-24"></div>
  <button
    class="bg-gradient-to-r from-orange-500 to-yellow-500 m-5 p-2 text-xl font-poppins rounded-md transition-transform active:scale-110"
    on:click={() => {
      left = [0, 0, 0];
      right = [0, 0, 0];
    }}>Zurücksetzen</button
  >
</div>

<style>
  .scale {
    transform: rotate(calc(var(--tilt) * 1deg));
  }
</style>
