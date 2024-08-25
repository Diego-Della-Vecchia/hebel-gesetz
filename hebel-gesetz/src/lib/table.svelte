<script lang="ts">
  export let formels: [number, number, number, number][];
</script>

<div class="flex justify-center items-center">
  <table class="w-96 text-xl font-serif bg-gray-200 rounded-md p-2">
    <thead>
      <th class="w-12 border-black border-2"> Gewicht </th>
      <th class="w-12 border-black border-2"> Position </th>
      <th class="w-12 border-black border-2"> Gewicht </th>
      <th class="w-12 border-black border-2"> Position </th>
    </thead>
    {#each formels as formel}
      <tr class="text-center text-xl">
        <td class="w-12 p-1 border-black border-2">
          {formel[0]}
        </td>
        <td class="w-12 p-1 border-black border-2">
          {formel[1]}
        </td>

        <td class="w-12 p-1 border-black border-2">
          {formel[3]}
        </td>
        <td class="w-12 p-1 border-black border-2">
          {formel[2]}
        </td>
      </tr>
    {/each}
  </table>
</div>
