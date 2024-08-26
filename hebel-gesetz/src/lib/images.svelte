<script lang="ts">
  export let images: string[][];
</script>

<div class="overflow-x-auto p-5  flex w-full  mx-auto items-center">
    {#each images as image}
    <div class="p-5 flex-shrink-0 mx-auto">
      <img class="rounded-md h-32  border-2 border-black" src={image[0]} alt="" />
      <p class="font-poppins text-center text-xl text-orange-500">{image[1]}</p>
    </div>
    {/each}
</div>