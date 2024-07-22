<script setup lang="ts">
import { ref } from 'vue';
// common components
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import UiChildCard from '@/components/shared/UiChildCard.vue';
import Header from '@/layouts/header/RightHeader.vue';
import Footer from '@/layouts/footer/nftFooter.vue';

import MenusAnchor from "@/components/ui-components/menus/MenusAnchor.vue";
import MenusHover from "@/components/ui-components/menus/MenusHover.vue";
import MenusActivatorTooltip from "@/components/ui-components/menus/MenusActivatorTooltip.vue";
import MenusPopover from "@/components/ui-components/menus/MenusPopover.vue";
import ReadyTostart from '@/components/pages/portfolio/grid/ReadyTostart.vue';

// theme breadcrumb
const page = ref({ title: 'Menus' });
const breadcrumbs = ref([
    {
        text: 'Home',
        disabled: false,
        to: '/'
    },
    {
        text: 'Menus',
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
                    <v-col cols="12" sm="12" lg="6">
                        <UiChildCard title="Anchor">
                            <MenusAnchor />
                        </UiChildCard>
                    </v-col>
                    <v-col cols="12" sm="12" lg="6">
                        <UiChildCard title="Hover">
                            <MenusHover />
                        </UiChildCard>
                    </v-col>
                    <v-col cols="12" sm="12" lg="6">
                        <UiChildCard title="Activator and tooltip">
                            <MenusActivatorTooltip />
                        </UiChildCard>
                    </v-col>
                    <v-col cols="12" sm="12" lg="6">
                        <UiChildCard title="Popover">
                            <MenusPopover />
                        </UiChildCard>
                    </v-col>
                    <ReadyTostart />
                </v-row>
        </v-container>
        <Footer />
    </div>
</template>
