<template>
  <q-page>
    <div class="q-pa-md">
      <div class="row q-pb-md">
        <div class="col">
          <div class="q-gutter-sm">
            <q-breadcrumbs>
              <q-breadcrumbs-el label="Home" to="/" />
              <q-breadcrumbs-el label="Asignación de Breakers" to="/breakers" />
              <q-breadcrumbs-el label="Asignación" />
            </q-breadcrumbs>
          </div>
        </div>
      </div>

      <div class="row fit justify-center">
        <div class="col-xs-12 col-md-10">
          <q-table
            dark
            row-key="id"
            :data="data"
            :columns="columns"
            :filter="filter"
            :loading="loading"
          >
            <template v-slot:top>
              <div class="q-table__title">
                Breakers asignados
              </div>

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
                <q-td key="canales" :props="props">
                  <div :key="canal" v-for="canal in props.row.canales">
                    <q-badge color="green">
                      {{ canal }}
                    </q-badge>
                  </div>
                </q-td>
                <q-td key="lado" :props="props">{{ props.row.lado }}</q-td>
                <q-td key="estado" :props="props">{{ props.row.estado }}</q-td>
                <q-td key="botones" :props="props">
                  <div class="q-gutter-sm">
                    <q-btn color="primary" label="Asignar" size="sm" @click="dialogAsignar(props.row.codigo, props.row.polos)" />
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
import AsignarBreaker from '../../components/Dialog/AsignarBreaker.vue'

export default {
  name: 'Asignacion',

  props: {
    idCliente: {
      type: String,
      required: true
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
      { name: 'canales', align: 'left', label: 'Canales', field: 'canales' },
      { name: 'lado', align: 'left', label: 'Lado', field: 'lado' },
      { name: 'estado', align: 'left', label: 'Estado', field: 'estado' },
      { name: 'botones', align: 'left', label: '' }
    ],
    data: [
      {
        codigo: '1',
        polos: '1',
        ampacidad: '30',
        marca: 'GE',
        alimentador: 'THWN',
        calibre: '3x2 AWG',
        canales: ['CH1'],
        lado: '1',
        estado: 'activo'
      },
      {
        codigo: '1',
        polos: '3',
        ampacidad: '30',
        marca: 'GE',
        alimentador: 'THWN',
        calibre: '3x2 AWG',
        canales: ['CH1', 'CH2', 'CH3'],
        lado: '1',
        estado: 'activo'
      },
      {
        codigo: '1',
        polos: '3',
        ampacidad: '30',
        marca: 'GE',
        alimentador: 'THWN',
        calibre: '3x2 AWG',
        canales: ['CH1', 'CH2', 'CH3'],
        lado: '1',
        estado: 'activo'
      },
      {
        codigo: '1',
        polos: '3',
        ampacidad: '30',
        marca: 'GE',
        alimentador: 'THWN',
        calibre: '3x2 AWG',
        canales: ['CH1', 'CH2', 'CH3'],
        lado: '1',
        estado: 'activo'
      },
      {
        codigo: '1',
        polos: '3',
        ampacidad: '30',
        marca: 'GE',
        alimentador: 'THWN',
        calibre: '3x2 AWG',
        canales: ['CH1', 'CH2', 'CH3'],
        lado: '1',
        estado: 'activo'
      },
      {
        codigo: '1',
        polos: '3',
        ampacidad: '30',
        marca: 'GE',
        alimentador: 'THWN',
        calibre: '3x2 AWG',
        canales: ['CH1', 'CH2', 'CH3'],
        lado: '1',
        estado: 'activo'
      },
      {
        codigo: '1',
        polos: '3',
        ampacidad: '30',
        marca: 'GE',
        alimentador: 'THWN',
        calibre: '3x2 AWG',
        canales: ['CH1', 'CH2', 'CH3'],
        lado: '1',
        estado: 'activo'
      },
      {
        codigo: '1',
        polos: '3',
        ampacidad: '30',
        marca: 'GE',
        alimentador: 'THWN',
        calibre: '3x2 AWG',
        canales: ['CH1', 'CH2', 'CH3'],
        lado: '1',
        estado: 'activo'
      },
      {
        codigo: '1',
        polos: '3',
        ampacidad: '30',
        marca: 'GE',
        alimentador: 'THWN',
        calibre: '3x2 AWG',
        canales: ['CH1', 'CH2', 'CH3'],
        lado: '1',
        estado: 'activo'
      },
      {
        codigo: '1',
        polos: '3',
        ampacidad: '30',
        marca: 'GE',
        alimentador: 'THWN',
        calibre: '3x2 AWG',
        canales: ['CH1', 'CH2', 'CH3'],
        lado: '1',
        estado: 'activo'
      }
    ]
  }),

  methods: {
    dialogAsignar (idBreaker, polos) {
      this.$q.dialog({
        component: AsignarBreaker,
        parent: this,
        idBreaker,
        polos
      }).onOk((data) => {
        console.log('ok', data)
      })
    }
  }
}
</script>

<style>

</style>
