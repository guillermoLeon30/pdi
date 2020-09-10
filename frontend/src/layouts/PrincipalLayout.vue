<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-9 text-white">

    <q-header elevated class="bg-grey-6">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title>
          <!--
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
          -->
          Energia
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer content-class="bg-grey-8" v-model="left" side="left" >
      <q-list class="rounded-borders" dark>
        <q-item clickable @click="left = !left" v-ripple :to="{ path: '/breakers' }">
          <q-item-section avatar>
            <q-icon name="library_add" />
          </q-item-section>

          <q-item-section>Asignar Breakers</q-item-section>
        </q-item>

        <q-expansion-item
          expand-separator
          icon="settings"
          label="Configuracion"
          :content-inset-level="0.3"
        >
          <q-item clickable @click="left = !left" v-ripple :to="{ path: '/configuracion/clientes' }">
            <q-item-section avatar>
              <q-icon name="people" />
            </q-item-section>

            <q-item-section>Clientes</q-item-section>
          </q-item>

          <q-item clickable @click="left = !left" v-ripple :to="{ path: '/configuracion/Pdis' }">
            <q-item-section avatar>
              <q-icon name="all_inbox" />
            </q-item-section>

            <q-item-section>PDI</q-item-section>
          </q-item>
        </q-expansion-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  name: 'PrincipalLayout',

  data () {
    return {
      left: false
    }
  }
}
</script>
