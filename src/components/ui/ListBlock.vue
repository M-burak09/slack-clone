<template lang="">
    <details open class="p-4 pt-2">
        <summary class="py-2">{{title}}</summary>
        <ul>
            <slot></slot>
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