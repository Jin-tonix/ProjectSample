<script setup lang="ts">
import { ref } from 'vue';
// common components
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import UiChildCard from '@/components/shared/UiChildCard.vue';
import Header from '@/layouts/header/RightHeader.vue';
import Footer from '@/layouts/footer/nftFooter.vue';

import SimpleList from '@/components/ui-components/list/SimpleList.vue';
import NestedList from '@/components/ui-components/list/NestedList.vue';
import FolderList from '@/components/ui-components/list/FolderList.vue';
import DisabledList from '@/components/ui-components/list/DisabledList.vue';
import SwitchList from '@/components/ui-components/list/SwitchList.vue';
import RoundedList from '@/components/ui-components/list/RoundedList.vue';
import CustomAlignList from '@/components/ui-components/list/CustomAlignList.vue';
import ScrollableList from '@/components/ui-components/list/ScrollableList.vue';
import ReadyTostart from '@/components/pages/portfolio/grid/ReadyTostart.vue';

// theme breadcrumb
const page = ref({ title: 'List' });
const breadcrumbs = ref([
    {
        text: 'Home',
        disabled: false,
        to: '/'
    },
    {
        text: 'List',
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
                        <v-col cols="12" lg="6">
                            <UiChildCard title="Simple List">
                                <SimpleList />
                            </UiChildCard>
                        </v-col>
                        <!-- Nested List -->
                        <v-col cols="12" lg="6">
                            <UiChildCard title="Nested List">
                                <NestedList />
                            </UiChildCard>
                        </v-col>
                        <!-- Folder List -->
                        <v-col cols="12" lg="6">
                            <UiChildCard title="Folder List">
                                <FolderList />
                            </UiChildCard>
                        </v-col>
                        <!-- DisabledList-->
                        <v-col cols="12" lg="6">
                            <UiChildCard title="Disabled List">
                                <DisabledList />
                            </UiChildCard>
                        </v-col>
                        <!-- Radio Button List -->
                        <v-col cols="12" lg="6">
                            <UiChildCard title="Switch List">
                                <SwitchList />
                            </UiChildCard>
                        </v-col>

                        <!-- Rounded List -->
                        <v-col cols="12" lg="6">
                            <UiChildCard title="Rounded List">
                                <RoundedList />
                            </UiChildCard>
                        </v-col>
                        <!-- Custom Aligned List -->
                        <v-col cols="12" lg="6">
                            <UiChildCard title="Custom Aligned List">
                                <CustomAlignList />
                            </UiChildCard>
                        </v-col>
                        <!-- Scrollable List -->
                        <v-col cols="12" lg="6">
                            <UiChildCard title="Scrollable List">
                                <ScrollableList />
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
