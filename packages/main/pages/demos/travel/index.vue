<script setup lang="ts">
import Header from '@/layouts/header/CenterHeader.vue';
import HeroBanner from '@/components/demos/travel/HeroBanner.vue';
import TopDestinations from '@/components/demos/travel/TopDestinations.vue';
import  Features from '@/components/demos/travel/Features.vue';
import LiveAnywhere from '@/components/demos/travel/LiveAnywhere.vue';
import PopularCountries from '@/components/demos/travel/PopularCountries.vue';
import Testimonials from '@/components/demos/travel/Testimonials.vue';
import RecentBlog from '@/components/demos/travel/RecentBlog.vue';
import Appblock from '@/components/demos/travel/Appblock.vue';
import Footer from '@/layouts/footer/nftFooter.vue';
</script>
<template>
    <!--Header-->
    <Header />
        <HeroBanner/>
        <TopDestinations/>
        <Features/>
        <LiveAnywhere/>
        <PopularCountries/>
        <Testimonials/>
        <RecentBlog/>
        <Appblock/>
    <Footer />
</template>
