<template>
    <div>
        <v-app-bar
            app
            color="white"
            dark
        >
            <div class="d-flex align-center">
                <v-img
                alt="Vuetify Logo"
                class="shrink mr-2"
                contain
                src="../assets/img/dashboard-logo.png"
                transition="scale-transition"
                width="40"
                />

                <h3 class="font-weight-bold title">HaggleX</h3>
            </div>

            <v-spacer></v-spacer>

            <v-badge
                color="grey"
                content="4"
                overlap
                >
                <v-icon
                style="color: #2E1963;"
                
                >
                    mdi-bell
                </v-icon>
            </v-badge>

            <v-avatar
            size="30"
            class="ml-10 avatar"
            >
                <span class="purple--text text-caption">WO</span>
            </v-avatar>

            <v-menu
                open-on-hover
                top
                offset-y
                >
                <template v-slot:activator="{ on, attrs }">
                    <h4
                    class="black--text text-caption ml-2 mr-4"
                    v-bind="attrs"
                    v-on="on"
                    >Wills Omar
                    <v-icon color="black">mdi-chevron-down</v-icon>
                    </h4>
                </template>

                <v-list class="mt-10">
                    <v-list-item
                    v-for="(item, index) in items1"
                    :key="index"
                    >
                    <v-list-item-title style="cursor: pointer;" @click="goTo(item.title)">{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>

        </v-app-bar>

        <v-navigation-drawer
            v-model="drawer"
            absolute
            :permanent="false"
            width="180"
            >
            
            <v-divider></v-divider>

            <v-list dense>
                <v-list-item
                v-for="item in items"
                :key="item.title"
                link
                class="mt-7"
                >
                <v-list-item-icon class="rounded-circle nav-list">
                    <v-icon small class="ml-1">{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

    </div>
</template>

<script>
export default {
    data () {
        return {
            drawer: true,
            items: [
                { title: 'DASHBOARD', icon: 'mdi-view-dashboard' },
                { title: 'WALLET', icon: 'mdi-wallet' },
                { title: 'OTC', icon: 'mdi-database' },
                { title: 'SAVINGS', icon: 'mdi-beekeeper' },
                { title: 'MORE', icon: 'mdi-plus-box' },
                { title: 'SUPPORT', icon: 'mdi-forum' },
            ],
            items1: [
                {id: 1, title: 'Profile'},
                {id: 2, title: 'Log out'}
            ]
        }
    },
    methods: {
        goTo(val) {
            alert(val)
        }
    }
}
</script>

<style scoped>
.nav-list {
    background: lightgray;
}

.title {
    color: #2E1963;
}
.avatar {
    border: 2px solid #2E1963;
    background: lightgray;
}
</style>