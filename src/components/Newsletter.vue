<script setup>
import newsletterBG from '../assets/images/newsletter.jpg';
</script>

<template>
    <section class="section-padding overlay fixed-bg" :style="{ backgroundImage: `url(${newsletterBG})` }" id="newsletter">
        <div class="container">
            <div class="row">
                <div class="col-md-8 offset-2 text-center">
                    <div class="section-heading">
                        <h2>get <span> discount</span></h2>
                    </div>
                    <form action="#" method="post">
                        <input type="email" name="email" placeholder="Your email address..." required>
                        <button type="submit" class="btn btn-default mt-30">subscribe</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<style></style>