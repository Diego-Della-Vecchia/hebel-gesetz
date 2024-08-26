<script lang="ts">
    export let title : string
    export let text : {text: string, type : string}[][]
</script>

<div class="flex justify-center items-center flex-col">
    <h1 class="text-5xl text-orange-500 p-5 font-poppins font-bold  text-center">{title}</h1>
    {#each text as paragraph }
    <p class="p-5 md:mx-40 md:w-2/3 text-left font-poppins text-xl">

    {#each paragraph as text}
        {#if text.type == "formel"}
    
        <span class="font-bold font-serif bg-gray-200 rounded-md p-1 text-nowrap text-base">{text.text}</span> 
        {:else}
        {text.text}

        {/if}

    
    {/each}
    </p>

    {/each}
</div>
