<script setup>
import { socialInfo } from '../data/data';
const year = new Date()
</script>

<template>
    <footer class="footer-area section-padding">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center">
                    <p class="copyright-text">Copyright {{ year.getFullYear() }} &copy; <a href=""
                            target="_blank">RoyHridoy</a> ALL Right
                        Reserved </p>
                    <ul class="footer-social">
                        <li v-for="item of socialInfo"><a href="#" target="_blank"><i :class="item.icon"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.section-padding {
    padding: 40px 0;
}

.footer-area {
    box-shadow: 0 0 25px -10px #ddd;
}

.copyright-text {
    margin: 0;
}

.copyright-text a {
    color: #454545;
    font-family: "Roboto Slab", serif;
}

.footer-social {
    margin-top: 20px;
}

.footer-social li {
    display: inline-block;
    margin: 0 5px;
}

.footer-social li a {
    background-color: #7F11F2;
    color: #fff;
    display: block;
    font-size: 18px;
    height: 45px;
    line-height: 45px;
    width: 45px;
}

.footer-social li a:hover {
    border-radius: 50%;
}
</style>