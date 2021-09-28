<template>
    <div>
        <v-btn
            class="btn-submit"
            large
            :loading="btnLoadingStatus"
        ><span class="white--text">{{ buttonText }}</span></v-btn>
    </div>
</template>

<script>
export default {
    props: {
        buttonText: {
            type: String
        }
    },
    computed: {
        btnLoadingStatus() {
            return this.$store.state.btnStatus;
        }
    }
}
</script>