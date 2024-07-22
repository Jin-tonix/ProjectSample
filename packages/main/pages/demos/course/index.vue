<script setup lang="ts">
import Header from '@/layouts/header/CenterHeader.vue';
import Footer from '@/layouts/footer/CourseFooter.vue';
import HeroBanner from '@/components/demos/course/HeroBanner.vue';
import Category from '@/components/demos/course/Category.vue';
import FeaturedCourses from '@/components/demos/course/FeaturedCourses.vue';
import BecomeInstructor from '@/components/demos/course/BecomeInstructor.vue';
import CompaniesLogos from '@/components/demos/course/CompaniesLogos.vue';
import LearnFromExports from '@/components/demos/course/LearnFromExport.vue';
import StartLearning from '@/components/demos/course/StartLearning.vue';
</script>
<template>
    <!--Header-->
    <Header />
        <HeroBanner />
        <Category />
        <FeaturedCourses />
        <BecomeInstructor />
        <CompaniesLogos />
        <LearnFromExports />
        <StartLearning />
    <Footer />
</template>
