<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
export default {
  name: 'MyButton'
}
</script>

<style>
.btn{
    font-family: Georgia, serif;
    font-size: 10pt;
    color: white;
    border-radius: 50px;
    background-color: #D276FD;
    border-color: #D276FD;
    text-align: center;
    cursor: pointer;
}
</style>