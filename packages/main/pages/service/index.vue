<script setup lang="ts">
import Header from '@/layouts/header/RightHeader.vue';
import Footer from '@/layouts/footer/nftFooter.vue';
import HumanResource from '@/components/pages/service/HumanResource.vue';
import ServiceSpeciality from '@/components/pages/service/ServiceSpeciality.vue';
import Specialities from '@/components/pages/service/Specialities.vue';
import WorkingProcessService from '@/components/pages/service/WorkingProcessService.vue';
import PricingPlans from '@/components/pages/service/PricingPlans.vue';
import Profile from '@/components/pages/service/Profile.vue';
</script>
<template>
    <!--Header-->
    <Header  />
        <HumanResource />
        <ServiceSpeciality />
        <Specialities />
        <WorkingProcessService />
        <PricingPlans/>
        <Profile/>
    <Footer />
</template>
