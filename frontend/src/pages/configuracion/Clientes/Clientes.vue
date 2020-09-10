<template>
  <q-page>
    <div class="q-pa-md">
      <div class="row text-center q-pa-md">
        <div class="col">
          <div class="text-h3">
            Clientes
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
              <q-btn round color="primary" :disable="loading" icon="add" @click="dialogCliente" />
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
                <q-td key="empresa" :props="props">{{ props.row.empresa }}</q-td>
                <q-td key="botones" :props="props">
                  <q-btn color="primary" label="Racks" size="sm" @click="irArack(props.row.codigo)"/>
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
import AgregarCliente from '../../../components/Dialog/AgregarClientes.vue'

export default {
  name: 'Clientes',

  data: () => ({
    loading: false,
    filter: '',
    rowCount: 10,
    columns: [
      { name: 'codigo', align: 'left', label: 'Codigo', field: 'codigo', sortable: true },
      { name: 'empresa', align: 'left', label: 'Empresa', field: 'empresa', sortable: true },
      { name: 'botones', align: 'left', field: 'botones' }
    ],
    data: [
      {
        id: 1,
        empresa: 'Frozen Yogurt',
        codigo: 159
      },
      {
        id: 2,
        empresa: 'Ice cream sandwich',
        codigo: 237
      },
      {
        id: 3,
        empresa: 'Eclair',
        codigo: 262
      },
      {
        id: 4,
        empresa: 'Cupcake',
        codigo: 305
      },
      {
        id: 5,
        empresa: 'Gingerbread',
        codigo: 356
      },
      {
        id: 6,
        empresa: 'Jelly bean',
        codigo: 375
      },
      {
        id: 7,
        empresa: 'Lollipop',
        codigo: 392
      },
      {
        id: 8,
        empresa: 'Honeycomb',
        codigo: 408
      },
      {
        id: 9,
        empresa: 'Donut',
        codigo: 452
      },
      {
        id: 10,
        empresa: 'KitKat',
        codigo: 518
      }
    ]
  }),

  methods: {
    dialogCliente () {
      this.$q.dialog({
        component: AgregarCliente,
        parent: this
      }).onOk((data) => {
        console.log('ok', data)
      })
    },

    irArack (id) {
      this.$router.push({ path: `/configuracion/clientes/${id}/racks` })
    }
  }
}
</script>
