<template>
  <q-page>
    <div class="q-pa-md">
      <div class="row text-center q-pa-md">
        <div class="col">
          <div class="text-h3">
            PDIs
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
                <q-td key="codigo" :props="props">{{ props.row.codigo }}</q-td>
                <q-td key="potencia" :props="props">{{ props.row.potencia }}</q-td>
                <q-td key="botones" :props="props">
                  <q-btn color="primary" label="Canales" size="sm" @click="irAcanales(props.row.codigo)"/>
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
import AgregarPDI from '../../../components/Dialog/AgregarPDI'

export default {
  name: 'Pdi',

  data: () => ({
    loading: false,
    filter: '',
    rowCount: 10,
    columns: [
      { name: 'codigo', align: 'left', label: 'Codigo', field: 'codigo', sortable: true },
      { name: 'potencia', align: 'left', label: 'Potencia', field: 'potencia', sortable: true },
      { name: 'botones', align: 'left', label: '' }
    ],
    data: [
      {
        id: 1,
        potencia: 'Frozen Yogurt',
        codigo: 159
      },
      {
        id: 2,
        potencia: 'Ice cream sandwich',
        codigo: 237
      },
      {
        id: 3,
        potencia: 'Eclair',
        codigo: 262
      },
      {
        id: 4,
        potencia: 'Cupcake',
        codigo: 305
      },
      {
        id: 5,
        potencia: 'Gingerbread',
        codigo: 356
      },
      {
        id: 6,
        potencia: 'Jelly bean',
        codigo: 375
      },
      {
        id: 7,
        potencia: 'Lollipop',
        codigo: 392
      },
      {
        id: 8,
        potencia: 'Honeycomb',
        codigo: 408
      },
      {
        id: 9,
        potencia: 'Donut',
        codigo: 452
      },
      {
        id: 10,
        potencia: 'KitKat',
        codigo: 518
      }
    ]
  }),

  methods: {
    dialogPDI () {
      this.$q.dialog({
        component: AgregarPDI,
        parent: this
      }).onOk((data) => {
        console.log('ok', data)
      })
    },

    irAcanales (idPdi) {
      this.$router.push({ path: `/configuracion/pdis/${idPdi}/canales` })
    }
  }
}
</script>
