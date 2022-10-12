<template lang="">
    <details open class="p-4 pt-2">
        <summary class="py-2">{{title}}</summary>
        <ul>
            <li class="hover:bg-tertiary-color">General</li>
            <li>Random</li>
            <li>Help</li>
            <li>Test</li>
            <li>Yes</li>
        </ul>
    </details>
</template>
<script>
export default {
    props: {
    title: String
  }
}
</script>
<style lang="">
    
</style>