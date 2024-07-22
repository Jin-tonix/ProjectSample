<script setup lang="ts">
import { ref } from 'vue';
// common components
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import UiChildCard from '@/components/shared/UiChildCard.vue';
import Header from '@/layouts/header/RightHeader.vue';
import Footer from '@/layouts/footer/nftFooter.vue';

import FilledColor from '@/components/ui-components/chip/FilledColor.vue';
import Outlined from '@/components/ui-components/chip/Outlined.vue';
import CustomIcon from '@/components/ui-components/chip/CustomIcon.vue';
import CustomIconOutlined from '@/components/ui-components/chip/CustomIconOutlined.vue';
import Disabled from '@/components/ui-components/chip/Disabled.vue';
import Sizes from '@/components/ui-components/chip/Sizes.vue';
import Closable from '@/components/ui-components/chip/Closable.vue';
import ReadyTostart from '@/components/pages/portfolio/grid/ReadyTostart.vue';

// theme breadcrumb
const page = ref({ title: 'Chip' });
const breadcrumbs = ref([
    {
        text: 'Home',
        disabled: false,
        to: '/'
    },
    {
        text: 'Chip',
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
                <v-col cols="12">

                    <v-row>
                        <!-- Filled Color -->
                        <v-col cols="12">
                            <UiChildCard title="Filled">
                                <FilledColor />
                            </UiChildCard>
                        </v-col>
                        <!-- Outlined -->
                        <v-col cols="12">
                            <UiChildCard title="Outlined">
                                <Outlined />
                            </UiChildCard>
                        </v-col>
                        <!-- Label with Icon -->
                        <v-col cols="12" lg="6">
                            <UiChildCard title="Custom Icon">
                                <CustomIcon />
                            </UiChildCard>
                        </v-col>
                        <!-- Outlined Color -->
                        <v-col cols="12" lg="6">
                            <UiChildCard title="Custom Outlined Icon">
                                <CustomIconOutlined />
                            </UiChildCard>
                        </v-col>
                        <!-- Disabled -->
                        <v-col cols="12" lg="6">
                            <UiChildCard title="Disabled">
                                <Disabled />
                            </UiChildCard>
                        </v-col>
                        <!-- Sizes -->
                        <v-col cols="12" lg="6">
                            <UiChildCard title="Sizes">
                                <Sizes />
                            </UiChildCard>
                        </v-col>
                        <!-- Closable -->
                        <v-col cols="12">
                            <UiChildCard title="Closable">
                                <Closable />
                            </UiChildCard>
                        </v-col>
                    </v-row>

                </v-col>
                <ReadyTostart />
            </v-row>
        </v-container>
    </div>
    <Footer />
</template>
