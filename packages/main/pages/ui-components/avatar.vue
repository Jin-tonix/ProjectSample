<script setup lang="ts">
import { ref } from 'vue';
// common components
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import UiChildCard from '@/components/shared/UiChildCard.vue';
import Header from '@/layouts/header/RightHeader.vue';
import Footer from '@/layouts/footer/nftFooter.vue';

// icons
import { UserIcon, SearchIcon, FolderIcon, ContrastIcon } from 'vue-tabler-icons';
import ImageAvatar from '@/components/ui-components/avatar/ImageAvatar.vue';
import LetterAvatar from '@/components/ui-components/avatar/LetterAvatar.vue';
import IconAvatar from '@/components/ui-components/avatar/IconAvatar.vue';
import VariantAvatar from '@/components/ui-components/avatar/VariantAvatar.vue';
import SizeAvatar from '@/components/ui-components/avatar/SizeAvatar.vue';
import ReadyTostart from '@/components/pages/portfolio/grid/ReadyTostart.vue';

// theme breadcrumb
const page = ref({ title: 'Avatar' });
const breadcrumbs = ref([
    {
        text: 'Home',
        disabled: false,
        to: '/'
    },
    {
        text: 'Avatar',
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
                        <!-- Image Avatar -->
                        <v-col cols="12" lg="4">
                            <UiChildCard title="Image Avatars">
                                <ImageAvatar />
                            </UiChildCard>
                        </v-col>
                        <!-- Letter Avatar -->
                        <v-col cols="12" lg="4">
                            <UiChildCard title="Letter Avatars">
                                <LetterAvatar />
                            </UiChildCard>
                        </v-col>
                        <!-- Icon Avatar -->
                        <v-col cols="12" lg="4">
                            <UiChildCard title="Icon Avatars">
                                <IconAvatar />
                            </UiChildCard>
                        </v-col>
                        <!-- Variant Avatar -->
                        <v-col cols="12" lg="4">
                            <UiChildCard title="Variant" class="pb-10">
                                <VariantAvatar />
                            </UiChildCard>
                        </v-col>
                        <!-- Size Avatar -->
                        <v-col cols="12" lg="8">
                            <UiChildCard title="Sizes">
                                <SizeAvatar />
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
