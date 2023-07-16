<script setup>
import heroImg from '../assets/images/hero.png';
import { hero } from '../data/data';
</script>

<template>
    <section class="hero-area" id="home">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="hero-text">
                        <div class="display-table">
                            <div class="display-table-cell">
                                <h1 class="text-uppercase">{{ hero.title }}</h1>
                                <h3>{{ hero.subTitle }}</h3>
                                <p class="m-40">{{ hero.description }}</p>
                                <a href="#feature" class="btn btn-default">features</a>
                                <a href="#newsletter" class="btn btn-secondary ml-10">install</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="hero-img float-end">
                        <div class="display-table">
                            <div class="display-table-cell">
                                <img :src="heroImg" alt="" class="img-responsive">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.hero-img,
.hero-text {
    height: calc(100vh);
}

.hero-text h1 {
    font-size: 56px;
    font-weight: 500;
}

.hero-text h3 {
    font-size: 36px;
    color: #7F11F2;
}

.hero-text {
    font-size: 22px;
}
</style>
