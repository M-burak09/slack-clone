<template lang="">
    <details open class="pt-2">
        <summary class="py-2 px-4">{{title}}</summary>
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