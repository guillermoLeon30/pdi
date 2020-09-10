<template>
  <q-page>
    <div class="q-pa-md">
      <div class="row">
        <div class="col">
          <div class="q-gutter-sm">
            <q-breadcrumbs>
              <q-breadcrumbs-el label="Home" to="/" />
              <q-breadcrumbs-el label="PDI" to="/configuracion/pdis" />
              <q-breadcrumbs-el label="Canales" />
            </q-breadcrumbs>
          </div>
        </div>
      </div>

      <div class="row text-center q-pa-md">
        <div class="col">
          <div class="text-h3">
            Canales
          </div>
        </div>
      </div>

      <div class="row fit justify-center">
        <div class="col-xs-12 col-md-6">
          <q-table
            title="Treats"
            dark
            row-key="id"
            :data="data"
            :columns="columns"
            :filter="filter"
            :loading="loading"
          >
            <template v-slot:top>
              <q-btn round color="primary" :disable="loading" icon="add" @click="dialogPDI" />
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
                <q-td key="lado" :props="props">{{ props.row.lado }}</q-td>
                <q-td key="botones" :props="props">
                  <q-btn color="red" label="Eliminar" size="sm" />
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
import AgregarCanales from '../../../components/Dialog/AgregarCanales'

export default {
  name: 'Canales',

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
      { name: 'lado', align: 'left', label: 'Lado', field: 'lado', sortable: true },
      { name: 'botones', align: 'left', label: '' }
    ],
    data: [
      {
        nombre: 1,
        lado: 159
      },
      {
        nombre: 2,
        lado: 237
      },
      {
        nombre: 3,
        lado: 262
      },
      {
        nombre: 4,
        lado: 305
      },
      {
        nombre: 5,
        lado: 356
      },
      {
        nombre: 6,
        lado: 375
      },
      {
        nombre: 7,
        lado: 392
      },
      {
        nombre: 8,
        lado: 408
      },
      {
        nombre: 9,
        lado: 452
      },
      {
        nombre: 10,
        lado: 518
      }
    ]
  }),

  methods: {
    dialogPDI () {
      this.$q.dialog({
        component: AgregarCanales,
        parent: this
      }).onOk((data) => {
        console.log('ok', data)
      })
    }
  }
}
</script>
