<script setup lang="ts">
import { ref } from 'vue';
// common components

import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import UiChildCard from '@/components/shared/UiChildCard.vue';

import Header from '@/layouts/header/RightHeader.vue';
import Footer from '@/layouts/footer/nftFooter.vue';
import Basic from '@/components/ui-components/alert/Basic.vue';
import Filled from '@/components/ui-components/alert/Filled.vue';
import Description from '@/components/ui-components/alert/Description.vue';
import Action from '@/components/ui-components/alert/Action.vue';
import Icons from '@/components/ui-components/alert/Icons.vue';
import Outlined from '@/components/ui-components/alert/Outlined.vue';
import Closable from '@/components/ui-components/alert/Closable.vue';
import ReadyTostart from '@/components/pages/portfolio/grid/ReadyTostart.vue';

// theme breadcrumb
const page = ref({ title: 'Alert' });
const breadcrumbs = ref([
    {
        text: 'Home',
        disabled: false,
        to: '/'
    },
    {
        text: 'Alert',
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
                        <!-- Basic -->
                        <v-col cols="12">
                            <UiChildCard title="Basic">
                                <Basic />
                            </UiChildCard>
                        </v-col>
                        <!-- Filled -->
                        <v-col cols="12">
                            <UiChildCard title="Filled">
                                <Filled />
                            </UiChildCard>
                        </v-col>
                        <!-- Outlined -->
                        <v-col cols="12">
                            <UiChildCard title="Outlined">
                                <Outlined />
                            </UiChildCard>
                        </v-col>

                        <!-- Description -->
                        <v-col cols="12">
                            <UiChildCard title="Description">
                                <Description />
                            </UiChildCard>
                        </v-col>
                        <!-- With Action -->
                        <v-col cols="12">
                            <UiChildCard title="Action">
                                <Action />
                            </UiChildCard>
                        </v-col>
                        <!-- With Icons -->
                        <v-col cols="12">
                            <UiChildCard title="With Icons">
                                <Icons />
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
