<script setup lang="ts">
import { ref } from 'vue';
// common components
import UiChildCard from '@/components/shared/UiChildCard.vue';
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import Header from '@/layouts/header/RightHeader.vue';
import Footer from '@/layouts/footer/nftFooter.vue';

import SimpleTooltip from "@/components/ui-components/tooltip/SimpleTooltip.vue";
import IconTooltip from "@/components/ui-components/tooltip/IconTooltip.vue";
import ToggleTolltip from "@/components/ui-components/tooltip/ToggleTolltip.vue";
import ReadyTostart from '@/components/pages/portfolio/grid/ReadyTostart.vue';

// theme breadcrumb
const page = ref({ title: 'Tooltip' });
const breadcrumbs = ref([
    {
        text: 'Home',
        disabled: false,
        to: '/'
    },
    {
        text: 'Tooltip',
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
                <v-col cols="12" md="6">
                    <UiChildCard title="Simple">
                        <SimpleTooltip />
                    </UiChildCard>
                </v-col>
                <v-col cols="12" md="6">
                    <UiChildCard title="Icon">
                        <IconTooltip />
                    </UiChildCard>
                </v-col>
                <v-col cols="12">
                    <UiChildCard title="Toggle Tolltip">
                        <ToggleTolltip />
                    </UiChildCard>
                </v-col>
                <ReadyTostart />
            </v-row>
        </v-container>
        <Footer />
    </div>
</template>
