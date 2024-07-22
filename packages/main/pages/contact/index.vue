<script setup lang="ts">
import Header from '@/layouts/header/RightHeader.vue';
import ContactUs from '@/components/pages/contact/ContactUs.vue';
import OnlineConsultation from '@/components/pages/contact/OnlineConsultation.vue';
import HeadOffice from '@/components/pages/contact/HeadOffice.vue';
import Footer from '@/layouts/footer/nftFooter.vue';
</script>
<template>
    <!--Header-->
    <Header />
        <ContactUs/>
        <OnlineConsultation/>
        <HeadOffice/>
    <Footer />
</template>