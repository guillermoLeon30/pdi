<template>
  <!-- <q-dialog ref="dialog" @hide="onDialogHide"> -->
  <q-dialog ref="dialog">
    <q-card class="q-dialog-plugin" dark>
      <q-card-section>
        <div class="text-h6">Ingresar Breaker</div>
      </q-card-section>

      <q-card-section>
        <q-select
          dark
          v-model="pdi"
          :options="selectPdis"
          label="PDI"
        />

        <q-select
          dark
          v-model="lado"
          :options="selectLados"
          label="Lado"
        />

        <q-select
          dark
          v-model="canal"
          multiple
          :options="selectCanales"
          counter
          :max-values="this.polos"
          :hint="limiteCanales"
        />
      </q-card-section>

      <q-card-actions align="right">
        <q-btn color="primary" label="Guardar" @click="onGuardarClick" :disable="error" />
        <q-btn color="primary" label="Cancelar" @click="onCancelClick" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { required } from 'vuelidate/lib/validators'

export default {
  name: 'AsignarBreaker',

  props: {
    idBreaker: {
      type: String
    },
    polos: {
      type: String
    }
  },

  data: () => ({
    selectPdis: ['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'],
    pdi: null,
    selectLados: ['Lado 1', 'Lado 2'],
    lado: null,
    selectCanales: ['CH1', 'CH2', 'CH3', 'CH4', 'CH5'],
    canal: null
  }),

  validations: {
    pdi: {
      required
    },
    lado: {
      required
    },
    canal: {
      required
    }
  },

  computed: {
    error () {
      return this.$v.pdi.$invalid || this.$v.lado.$invalid || this.$v.canal.$invalid
    },
    limiteCanales () {
      return `Maximo ${this.polos} seleccion`
    }
  },

  methods: {
    // following method is REQUIRED
    // (don't change its name --> "show")
    show () {
      this.$refs.dialog.show()
    },

    // following method is REQUIRED
    // (don't change its name --> "hide")
    hide () {
      this.$refs.dialog.hide()
    },

    // con la etiqueta superior de arriva
    // onDialogHide () {
    //   // required to be emitted
    //   // when QDialog emits "hide" event
    //   this.$emit('hide')
    // },

    onGuardarClick () {
      this.$emit('ok', {
        codigo: this.codigo,
        polos: this.polos,
        ampacidad: this.ampacidad,
        marca: this.marca,
        alimentador: this.alimentador,
        calibre: this.calibre
      })

      this.hide()
    },

    onCancelClick () {
      this.hide()
    }
  }
}
</script>
