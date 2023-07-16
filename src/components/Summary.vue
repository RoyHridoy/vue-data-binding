<script setup>
import { summary } from '../data/data';
</script>

<template>
    <section class="summary bg-theme section-padding text-center">
        <div class="container">
            <div class="row">
                <div class="col-md-3" v-for="item of summary">
                    <div class="summary-content">
                        <i :class="item.icon"></i>
                        {{ item.description }}
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.summary-content {
    font-size: 18px;
}

.summary-content i {
    font-size: 40px;
    position: relative;
    top: 8px;
}
</style>