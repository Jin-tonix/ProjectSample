<script setup lang="ts">
import Header from '@/layouts/header/CenterHeader.vue';
import MainBanner from '@/components/demos/payment/MainBanner.vue';
import BusinessPayment from '@/components/demos/payment/BusinessPayment.vue';
import OnlinePayment from '@/components/demos/payment/OnlinePayment.vue';
import SpendAndSave from '@/components/demos/payment/SpenAndSave.vue';
import ManagePayment from '@/components/demos/payment/ManagePayment.vue';
import MobileWallet from '@/components/demos/payment/MobileWallet.vue';
import NewsletterMail from '@/components/demos/payment/NewsletterMail.vue';
import EnterPriseSolution from '@/components/demos/payment/EnterPriseSolution.vue';
import Footer from '@/layouts/footer/PaymentFooter.vue';
import PreferredPlan from '@/components/demos/payment/PreferredPlan.vue';
</script>
<template>
    <!--Header-->
    <Header />
        <MainBanner />
        <BusinessPayment />
        <OnlinePayment />
        <SpendAndSave />
        <ManagePayment />
        <MobileWallet />
        <NewsletterMail />
        <PreferredPlan />
        <EnterPriseSolution />
    <Footer />
</template>
