<script setup lang="ts">
import Header from '@/layouts/header/RightHeader.vue';
import Footer from '@/layouts/footer/MedicalFooter.vue';
import HeroBanner from '@/components/demos/medical/HeroBanner.vue';
import WhyChooseUs from '@/components/demos/medical/WhyChooseUs.vue';
import StepsAndGet from '@/components/demos/medical/StepsAndGet.vue';
import ClientsReviews from '@/components/demos/medical/ClientsReviews.vue';
import Newsletter from '@/components/demos/medical/Newsletter.vue';
</script>
<template>
    <!--Header-->
    <Header />
        <HeroBanner />
        <WhyChooseUs />
        <StepsAndGet />
        <ClientsReviews />
        <Newsletter />
    <Footer />
</template>
