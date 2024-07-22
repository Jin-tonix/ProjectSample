<script setup lang="ts">
import Header from '@/layouts/header/RightHeader.vue';
import BlogGrid from '@/components/pages/blog/blog-grid/Index.vue'
import DontMiss from '@/components/pages/blog/blog-grid/DontMiss.vue';
import Footer from '@/layouts/footer/nftFooter.vue';

</script>
<template>
    <!--Header-->
    <Header />
        <BlogGrid/>
        <DontMiss/>
    <Footer />
</template>