<script setup lang="ts">
import Header from '@/layouts/header/CenterHeader.vue';
import MainBanner from '@/components/demos/sass-demo/MainBanner.vue';
import VisualGrowth from '@/components/demos/sass-demo/VisualGrowth.vue';
import ProductWorking from '@/components/demos/sass-demo/ProductWorking.vue'
import Reviews from '@/components/demos/sass-demo/Reviews.vue'
import PricingCards from '@/components/demos/sass-demo/PricingCards.vue';
import FAQ from '@/components/demos/sass-demo/FAQ.vue';
import RecentBlogs from '@/components/demos/sass-demo/RecentBlogs.vue';
import AppBlock from '~/components/demos/sass-demo/AppBlock.vue';
import Footer from '@/layouts/footer/RealEstateFooter.vue';
</script>
<template>
    <!--Header-->
    <Header />
        <MainBanner />
        <VisualGrowth />
        <ProductWorking />
        <Reviews />
        <PricingCards />
        <FAQ />
        <RecentBlogs />
        <AppBlock />
    <Footer />
</template>
