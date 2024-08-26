<script lang="ts">
  export let images: string[][];
</script>

<div class="flex justify-center items-center overflow-x-auto p-5">
  <div class="flex gap-2 items-center">
    {#each images as image}
    <div>
      <img class="rounded-md border-2 border-black h-32" src={image[0]} alt="" />
      <p class="font-poppins text-center text-xl text-orange-500">{image[1]}</p>
    </div>
    {/each}
  </div>
</div>
