<template>
    <details open class="pt-2">
        <summary class="py-2 px-4 cursor-pointer">{{title}}</summary>
        <ul class="cursor-pointer">
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