<template lang="">
    <details open class="pt-2">
        <summary class="py-2">{{title}}</summary>
        <ul>
            <li>General</li>
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