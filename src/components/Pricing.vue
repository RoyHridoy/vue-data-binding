<script setup>
import { pricing } from '../data/data';
</script>

<template>
    <section class="section-padding" id="pricing">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="section-heading text-center">
                        <h2>our <span>pricing</span></h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4" v-for="price of pricing">
                    <div class="single-price-table" :class="price.class">
                        <div class="plan-info">
                            <h2>{{ price.name }}<span>{{ price.price }}</span></h2>
                            <p>{{ price.type }}</p>
                        </div>
                        <div class="plan-details">
                            <ul>
                                <li><b>{{ price.access }}</b> Access <span><i
                                            :class="0 != price.access ? 'bi-check-circle-fill' : 'bi-x-circle-fill'"></i></span>
                                </li>
                                <li><b>{{ price.domains }}</b> Domains <span><i
                                            :class="0 != price.domains ? 'bi-check-circle-fill' : 'bi-x-circle-fill'"></i></span>
                                </li>
                                <li><b>{{ price.support }}</b> Support <span><i
                                            :class="0 != price.support ? 'bi-check-circle-fill' : 'bi-x-circle-fill'"></i></span>
                                </li>
                                <li>Montly Documents <b>{{ price.montlyDocuments }}</b> <span><i
                                            :class="0 != price.montlyDocuments ? 'bi-check-circle-fill' : 'bi-x-circle-fill'"></i></span>
                                </li>
                                <li>Custom Hosting <b> {{ price.customHosting }}</b> <span><i
                                            :class="0 != price.customHosting ? 'bi-check-circle-fill' : 'bi-x-circle-fill'"></i></span>
                                </li>
                            </ul>
                            <div class="text-center mt-30">
                                <a href="#" class="btn btn-default">subscribe now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.single-price-table {
    background-color: #F9F9F9;
    transition: 0.3s;
}

.single-price-table:hover {
    box-shadow: 2px 1px 20px #ddd;
}

.plan-info {
    text-align: center;
    padding: 50px 0px;
    color: #fff;
    border-radius: 5px 5px 0px 0px;
}

.basic .plan-info {
    background-color: #FF8C4B;
    border: 1px solid #FF8C4B;
    border-bottom: 0px;
}

.standard .plan-info {
    background-color: #00B2FD;
    border: 1px solid #00B2FD;
    border-bottom: 0px;
}

.premium .plan-info {
    background-color: #FC575E;
    border: 1px solid #FC575E;
    border-bottom: 0px;
}

.plan-info p {
    text-transform: capitalize;
    margin: 0;
}

.plan-info h2 span {
    display: block;
}

.plan-info h2 {
    text-transform: uppercase;
    font-size: 18px;
    margin: 0;
}

.plan-info h2 span {
    font-size: 40px;
    font-weight: 500;
}

.plan-details {
    padding: 30px;
    border: 1px solid #dddddd;
    border-top: 0px;
    border-radius: 0px 0px 5px 5px;
}

.plan-details li {
    border-bottom: 1px solid #cccccc;
    padding: 14px 0px;
}

.plan-details li:first-child {
    border-top: 1px solid #cccccc;
}

.plan-details li span {
    float: right;
}

.plan-details li span i.bi-check-circle-fill {
    color: #04AA6D;
}

.plan-details li span i.bi-x-circle-fill {
    color: #E11820;
}
</style>