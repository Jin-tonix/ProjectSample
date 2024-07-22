<script setup lang="ts">
import Header from '@/layouts/header/RightHeader.vue';
import GridView from '@/components/pages/portfolio/grid/index.vue'
import ReadyTostart from '@/components/pages/portfolio/grid/ReadyTostart.vue';
import Footer from '@/layouts/footer/nftFooter.vue';

</script>
<template>
    <!--Header-->
    <Header />
        <GridView />
        <ReadyTostart />
    <Footer />
</template>
