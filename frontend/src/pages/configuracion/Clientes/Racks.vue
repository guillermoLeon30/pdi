<template>
  <q-page>
    <div class="q-pa-md">
      <div class="row">
        <div class="col">
          <div class="q-gutter-sm">
            <q-breadcrumbs>
              <q-breadcrumbs-el label="Home" to="/" />
              <q-breadcrumbs-el label="Clientes" to="/configuracion/clientes" />
              <q-breadcrumbs-el label="Racks" />
            </q-breadcrumbs>
          </div>
        </div>
      </div>

      <div class="row text-center q-pa-md">
        <div class="col">
          <div class="text-h3">
            Racks
          </div>
        </div>
      </div>

      <div class="row fit justify-center">
        <div class="col-xs-12 col-md-6">
          <q-table
            dark
            row-key="id"
            :data="data"
            :columns="columns"
            :filter="filter"
            :loading="loading"
          >
            <template v-slot:top>
              <q-btn round color="primary" :disable="loading" icon="add" @click="dialogRack" />
              <q-space />
              <q-input dark standout dense debounce="300" v-model="filter">
                <template v-slot:append>
                  <q-icon name="search" />
                </template>
              </q-input>
            </template>

            <template v-slot:body="props">
              <q-tr :props="props">
                <q-td key="nombre" :props="props">{{ props.row.nombre }}</q-td>
                <q-td key="coordenada" :props="props">{{ props.row.coordenada }}</q-td>
                <q-td key="botones" :props="props">
                  <div class="q-gutter-sm">
                    <q-btn color="primary" label="Breakers" size="sm" @click="irAbreakers(props.row.nombre)" />
                    <q-btn color="red" label="Eliminar" size="sm" />
                  </div>
                </q-td>
              </q-tr>
            </template>

            <template v-slot:bottom="scope">
              <q-space />

              <q-btn
                icon="chevron_left"
                color="grey-8"
                round
                dense
                flat
                :disable="scope.isFirstPage"
                @click="scope.prevPage"
              />

              <q-btn
                icon="chevron_right"
                color="grey-8"
                round
                dense
                flat
                :disable="scope.isLastPage"
                @click="scope.nextPage"
              />

            </template>
          </q-table>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import AgrearRack from '../../../components/Dialog/AgregarRack'

export default {
  name: 'Racks',

  props: {
    id: {
      type: String,
      required: true
    }
  },

  data: () => ({
    loading: false,
    filter: '',
    rowCount: 10,
    columns: [
      { name: 'nombre', align: 'left', label: 'Nombre', field: 'nombre', sortable: true },
      { name: 'coordenada', align: 'left', label: 'Coordenada', field: 'coordenada', sortable: true },
      { name: 'botones', align: 'left', label: '' }
    ],
    data: [
      {
        nombre: 1,
        coordenada: 159
      },
      {
        nombre: 2,
        coordenada: 237
      },
      {
        nombre: 3,
        coordenada: 262
      },
      {
        nombre: 4,
        coordenada: 305
      },
      {
        nombre: 5,
        coordenada: 356
      },
      {
        nombre: 6,
        coordenada: 375
      },
      {
        nombre: 7,
        coordenada: 392
      },
      {
        nombre: 8,
        coordenada: 408
      },
      {
        nombre: 9,
        coordenada: 452
      },
      {
        nombre: 10,
        coordenada: 518
      }
    ]
  }),

  methods: {
    dialogRack () {
      this.$q.dialog({
        component: AgrearRack,
        parent: this
      }).onOk((data) => {
        console.log('ok', data)
      })
    },

    irAbreakers (idRack) {
      this.$router.push({ path: `/configuracion/clientes/${this.id}/racks/${idRack}/breakers` })
    }
  }
}
</script>

<style>

</style>
