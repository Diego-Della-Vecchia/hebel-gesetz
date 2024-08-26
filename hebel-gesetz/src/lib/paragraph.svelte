<script lang="ts">
    export let title : string
    export let text : {text: string, type : string}[][]
</script>

<div class="flex justify-center items-center flex-col">
    <h1 class="text-5xl text-orange-500 p-5 font-poppins font-bold  text-center">{title}</h1>
    {#each text as paragraph }
    {#each paragraph as text}
    <p class="p-5 md:mx-40 md:w-2/3">
        {#if text.type == "formel"}
    
        <span class="text-left font-poppins text-xl font-bold ">{text.text}</span> 
        {:else}
        <span class="text-left font-poppins text-xl">{text.text}</span> 

        {/if}

    </p>
    
    {/each}
    {/each}
</div>
