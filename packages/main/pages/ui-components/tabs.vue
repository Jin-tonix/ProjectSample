
<script setup lang="ts">
import { ref } from 'vue';
// common components
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import UiChildCard from '@/components/shared/UiChildCard.vue';
import Header from '@/layouts/header/RightHeader.vue';
import Footer from '@/layouts/footer/nftFooter.vue';
// icons
import { UserIcon, UserPlusIcon, UsersIcon, PhotoIcon, StarIcon, FileDescriptionIcon, CreditCardIcon, KeyIcon } from 'vue-tabler-icons';

import BasicTabs from "@/components/ui-components/tabs/BasicTabs.vue";
import CenterTabs from "@/components/ui-components/tabs/CenterTabs.vue";
import ColorTabs from "@/components/ui-components/tabs/ColorTabs.vue";
import DisableTabs from "@/components/ui-components/tabs/DisableTabs.vue";
import IconsWithLabelTabs from "@/components/ui-components/tabs/IconsWithLabelTabs.vue";
import IconTabs from "@/components/ui-components/tabs/IconTabs.vue";
import CustomIcons from "@/components/ui-components/tabs/CustomIcons.vue";
import AlignCenterTabs from "@/components/ui-components/tabs/AlignCenterTabs.vue";
import AlignEndTabs from "@/components/ui-components/tabs/AlignEndTabs.vue";
import ReadyTostart from '@/components/pages/portfolio/grid/ReadyTostart.vue';

// theme breadcrumb
const page = ref({ title: 'Tabs' });
const breadcrumbs = ref([
    {
        text: 'Home',
        disabled: false,
        to: '/'
    },
    {
        text: 'Tabs',
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
                        <v-col cols="12" lg="12">
                            <UiChildCard title="Basic">
                                <BasicTabs />
                            </UiChildCard>
                        </v-col>
                        <!-- With Icons -->
                        <v-col cols="12" lg="12">
                            <UiChildCard title="Stacked">
                                <IconsWithLabelTabs />
                            </UiChildCard>
                        </v-col>
                        <!-- Center -->
                        <v-col cols="12" lg="12">
                            <UiChildCard title="Center Active">
                                <CenterTabs />
                            </UiChildCard>
                        </v-col>
                        <!-- Custom Icons -->
                        <v-col cols="12" lg="12">
                            <UiChildCard title="Custom Icons">
                                <CustomIcons />
                            </UiChildCard>
                        </v-col>
                        <!-- Align Center -->
                        <v-col cols="12" lg="12">
                            <UiChildCard title="Align Center">
                                <AlignCenterTabs />
                            </UiChildCard>
                        </v-col>
                        <!-- Align End -->
                        <v-col cols="12" lg="12">
                            <UiChildCard title="Align End">
                                <AlignEndTabs />
                            </UiChildCard>
                        </v-col>
                        <!-- Icons -->
                        <v-col cols="12" lg="12">
                            <UiChildCard title="Icon">
                                <IconTabs />
                            </UiChildCard>
                        </v-col>
                        <!-- Disabled -->
                        <v-col cols="12" lg="12">
                            <UiChildCard title="Disabled">
                                <DisableTabs />
                            </UiChildCard>
                        </v-col>
                        <!-- Colors -->
                        <v-col cols="12" lg="12">
                            <UiChildCard title="Colors">
                                <ColorTabs />
                            </UiChildCard>
                        </v-col>
                    </v-row>

                </v-col>
                <ReadyTostart />
            </v-row>
        </v-container>
        <Footer />
    </div>
</template>
