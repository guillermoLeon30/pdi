<template>
  <q-page>
    <div class="q-pa-md">
      <div class="row">
        <div class="col">
          <div class="q-gutter-sm">
            <q-breadcrumbs>
              <q-breadcrumbs-el label="Home" to="/" />
              <q-breadcrumbs-el label="Clientes" to="/configuracion/clientes" />
              <q-breadcrumbs-el label="Racks" :to="rutaAnterior" />
              <q-breadcrumbs-el label="Breakers" />
            </q-breadcrumbs>
          </div>
        </div>
      </div>

      <div class="row text-center q-pa-md">
        <div class="col">
          <div class="text-h3">
            Breakers
          </div>
        </div>
      </div>

      <div class="row fit justify-center">
        <div class="col-xs-12 col-md-9">
          <q-table
            dark
            row-key="id"
            :data="data"
            :columns="columns"
            :filter="filter"
            :loading="loading"
          >
            <template v-slot:top>
              <q-btn round color="primary" :disable="loading" icon="add" @click="dialogBreaker" />
              <q-space />
              <q-input dark standout dense debounce="300" v-model="filter">
                <template v-slot:append>
                  <q-icon name="search" />
                </template>
              </q-input>
            </template>

            <template v-slot:body="props">
              <q-tr :props="props">
                <q-td key="codigo" :props="props">{{ props.row.codigo }}</q-td>
                <q-td key="polos" :props="props">{{ props.row.polos }}</q-td>
                <q-td key="ampacidad" :props="props">{{ props.row.ampacidad }}</q-td>
                <q-td key="marca" :props="props">{{ props.row.marca }}</q-td>
                <q-td key="alimentador" :props="props">{{ props.row.alimentador }}</q-td>
                <q-td key="calibre" :props="props">{{ props.row.calibre }}</q-td>
                <q-td key="botones" :props="props">
                  <div class="q-gutter-sm">
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
import AgregarBreaker from '../../../components/Dialog/AgregarBreaker.vue'

export default {
  name: 'Breakers',

  props: {
    idCliente: {
      type: String,
      required: true
    },
    idRack: {
      type: String,
      required: true
    }
  },

  computed: {
    rutaAnterior () {
      return `/configuracion/clientes/${this.idCliente}/racks`
    }
  },

  data: () => ({
    loading: false,
    filter: '',
    rowCount: 10,
    columns: [
      { name: 'codigo', align: 'left', label: 'Codigo', field: 'codigo', sortable: true },
      { name: 'polos', align: 'left', label: 'Polos', field: 'polos', sortable: true },
      { name: 'ampacidad', align: 'left', label: 'Ampacidad', field: 'ampacidad', sortable: true },
      { name: 'marca', align: 'left', label: 'Marca', field: 'marca' },
      { name: 'alimentador', align: 'left', label: 'Tipo Alimentador', field: 'alimentador' },
      { name: 'calibre', align: 'left', label: 'Calibre Alimentador', field: 'calibre' },
      { name: 'botones', align: 'left', label: '' }
    ],
    data: [
      {
        codigo: '1',
        polos: '3',
        ampacidad: '30',
        marca: 'GE',
        alimentador: 'THWN',
        calibre: '3x2 AWG'
      },
      {
        codigo: '1',
        polos: '3',
        ampacidad: '30',
        marca: 'GE',
        alimentador: 'THWN',
        calibre: '3x2 AWG'
      },
      {
        codigo: '1',
        polos: '3',
        ampacidad: '30',
        marca: 'GE',
        alimentador: 'THWN',
        calibre: '3x2 AWG'
      },
      {
        codigo: '1',
        polos: '3',
        ampacidad: '30',
        marca: 'GE',
        alimentador: 'THWN',
        calibre: '3x2 AWG'
      },
      {
        codigo: '1',
        polos: '3',
        ampacidad: '30',
        marca: 'GE',
        alimentador: 'THWN',
        calibre: '3x2 AWG'
      },
      {
        codigo: '1',
        polos: '3',
        ampacidad: '30',
        marca: 'GE',
        alimentador: 'THWN',
        calibre: '3x2 AWG'
      },
      {
        codigo: '1',
        polos: '3',
        ampacidad: '30',
        marca: 'GE',
        alimentador: 'THWN',
        calibre: '3x2 AWG'
      },
      {
        codigo: '1',
        polos: '3',
        ampacidad: '30',
        marca: 'GE',
        alimentador: 'THWN',
        calibre: '3x2 AWG'
      },
      {
        codigo: '1',
        polos: '3',
        ampacidad: '30',
        marca: 'GE',
        alimentador: 'THWN',
        calibre: '3x2 AWG'
      },
      {
        codigo: '1',
        polos: '3',
        ampacidad: '30',
        marca: 'GE',
        alimentador: 'THWN',
        calibre: '3x2 AWG'
      }
    ]
  }),

  methods: {
    dialogBreaker () {
      this.$q.dialog({
        component: AgregarBreaker,
        parent: this
      }).onOk((data) => {
        console.log('ok', data)
      })
    }
  }
}
</script>

<style>

</style>
