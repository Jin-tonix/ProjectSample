<script setup lang="ts">
import Header from '@/layouts/header/CenterHeader.vue';
import HeroBanner from '@/components/demos/corporate/HeroBanner.vue';
import Services from '@/components/demos/corporate/Services.vue';
import BuildAmazing from '@/components/demos/corporate/BuildAmazing.vue';
import BuildFeature from '@/components/demos/corporate/BuildFeature.vue';
import Testimonials from '@/components/demos/corporate/Testimonials.vue';
import StartProject from '@/components/demos/corporate/StartProject.vue';
import Footer from '@/layouts/footer/CorporateFooter.vue';
</script>
<template>
    <!--Header-->
    <Header />
        <HeroBanner />
        <Services />
        <BuildAmazing />
        <BuildFeature />
        <Testimonials />
        <StartProject />
    <Footer />
</template>

