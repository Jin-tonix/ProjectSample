<script setup lang="ts">
import Header from '@/layouts/header/CenterHeader.vue';
import FindRealEstate from '@/components/demos/real-estate/FindRealEstate.vue'
import DiscoverProperties from '@/components/demos/real-estate/DiscoverProperties.vue';
import FeaturedProperties from '@/components/demos/real-estate/FeaturedProperties.vue';
import SaveMoney from '@/components/demos/real-estate/SaveMoney.vue';
import WhyChoose from '@/components/demos/real-estate/WhyChoose.vue';
import History from '@/components/demos/real-estate/History.vue';
import Testimonoials from '@/components/demos/real-estate/TestimonialsBlock.vue';
import SummaryBlock from '@/components/demos/real-estate/Summary.vue';
import BlogPost from '@/components/demos/real-estate/BlogPost.vue';
import Footer from '@/layouts/footer/RealEstateFooter.vue';
</script>
<template>
    <!--Header-->
    <Header />
    <FindRealEstate />
    <DiscoverProperties />
    <FeaturedProperties />
    <SaveMoney />
    <WhyChoose />
    <History />
    <Testimonoials />
    <SummaryBlock />
    <BlogPost />
    <Footer />
</template>
