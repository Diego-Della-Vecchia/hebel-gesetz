<script lang="ts">
    export let formel : [number, number, number, number][]
</script>

<div class="flex justify-center items-center" >
    <table class="w-96 text-xl  font-serif bg-gray-200 rounded-md p-2">
        <thead>
            <th class="w-12 border-black border-2">
                N
            </th>
            <th class="w-12 border-black border-2">
                Position
            </th>
            <th class="w-12 border-black border-2">
                N
            </th>
            <th class="w-12 border-black border-2">
                Position
            </th>
</thead>
{#each  formel as formel}
<tr>
    <th class="w-12 border-black border-2">
        { formel[0]}
    </th>
    <th class="w-12 border-black border-2">
        {formel[1]}
    </th>
    <th class="w-12 border-black border-2">
        { formel[2]}
    </th>
    <th class="w-12 border-black border-2">
        {formel[3]}
    </th>
</tr>
{/each}
    </table>
</div>