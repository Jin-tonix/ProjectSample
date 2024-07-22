<script setup lang="ts">
import { ref } from 'vue';
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import UiChildCard from '@/components/shared/UiChildCard.vue';
import Header from '@/layouts/header/RightHeader.vue';
import Footer from '@/layouts/footer/nftFooter.vue';

import Heading from "@/components/style-components/typography/Heading.vue";
import Opacity from "@/components/style-components/typography/Opacity.vue";
import TextAlignment from "@/components/style-components/typography/TextAlignment.vue";
import TextDecoration from "@/components/style-components/typography/TextDecoration.vue";
import Default from "@/components/style-components/typography/DefaultText.vue";
import ReadyTostart from '@/components/pages/portfolio/grid/ReadyTostart.vue';

// theme breadcrumb
const page = ref({ title: 'Typography' });
const breadcrumbs = ref([
    {
        text: 'Home',
        disabled: false,
        to: '/'
    },
    {
        text: 'Typography',
        disabled: true,
        color: 'primary',
        to: '/'
    }
]);
</script>

<template>
    <!--Header-->
    <Header />
    <div class="mt-95 border-top">
        <v-container class="pt-10">
            <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
            <h2 class="text-h2 mb-7">{{ page.title }}</h2>
            <v-row>
                <v-col cols="12" md="12">
                    <UiChildCard title="Heading">
                        <Heading />
                    </UiChildCard>
                    <UiChildCard title="Default Text" class="mt-5">
                        <Default />
                    </UiChildCard>
                    <UiChildCard title="Text-alignment" class="mt-5">
                        <TextAlignment />
                    </UiChildCard>
                    <UiChildCard title="Decoration" class="mt-5">
                        <TextDecoration />
                    </UiChildCard>
                    <UiChildCard title="Opacity" class="mt-5">
                        <Opacity />
                    </UiChildCard>
                </v-col>
                <ReadyTostart />
            </v-row>
        </v-container>
        <Footer />
    </div>
</template>
