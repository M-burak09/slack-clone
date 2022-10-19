<template lang="">
    <section class="bg-tertiary-color text-white h-[5vh] select-none flex justify-center w-full">
        <font-awesome-icon :icon="['far', 'clock']" class="ml-2 my-auto"/>
        <input type="text" v-model="input" placeholder="Search Hogeschool Leiden" class="rounded-md border border-quartinary-color bg-primary-color ml-4 px-2 my-2 w-1/2 max-w-[600px]"/>
        <font-awesome-icon :icon="['fas', 'xmark']" class="-ml-6 my-auto"/>
        <font-awesome-icon :icon="['far', 'circle-question']" class="my-auto ml-8"/>
    </section>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>