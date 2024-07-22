<script setup lang="ts">
import { ref } from 'vue';
import Header from '@/layouts/header/RightHeader.vue';
import Footer from '@/layouts/footer/nftFooter.vue';
import PortfolioDetail from '@/components/pages/portfolio/portfolio-detail/PortfolioDetail.vue';
</script>
<template>
  <!--Header-->
  <Header />
  <v-row>
    <v-col cols="12">
      <PortfolioDetail />
    </v-col>
  </v-row>
  <Footer />
</template>
