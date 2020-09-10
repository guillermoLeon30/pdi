<template>
  <!-- <q-dialog ref="dialog" @hide="onDialogHide"> -->
  <q-dialog ref="dialog">
    <q-card class="q-dialog-plugin" dark>
      <q-card-section>
        <div class="text-h6">Ingresar Breaker</div>
      </q-card-section>

      <q-card-section>
        <q-input
          dark
          v-model="codigo"
          label="Codigo"
          bottom-slots
          :error="$v.codigo.$invalid"
          error-message="Este campo es requerido"
        />

        <q-input
          dark
          v-model="polos"
          label="Polos"
          bottom-slots
          :error="$v.polos.$invalid"
          error-message="Este campo es requerido"
        />

        <q-input
          dark
          v-model="ampacidad"
          label="Ampacidad"
          bottom-slots
          :error="$v.ampacidad.$invalid"
          error-message="Este campo es requerido"
        />

        <q-input
          dark
          v-model="marca"
          label="Marca"
          bottom-slots
          :error="$v.marca.$invalid"
          error-message="Este campo es requerido"
        />

        <q-input
          dark
          v-model="alimentador"
          label="Tipo de Alimentador"
          bottom-slots
          :error="$v.alimentador.$invalid"
          error-message="Este campo es requerido"
        />

        <q-input
          dark
          v-model="calibre"
          label="Calibre"
          bottom-slots
          :error="$v.calibre.$invalid"
          error-message="Este campo es requerido"
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
  name: 'AgregarRack',

  data: () => ({
    codigo: '',
    polos: '',
    ampacidad: '',
    marca: '',
    alimentador: '',
    calibre: ''
  }),

  validations: {
    codigo: {
      required
    },
    polos: {
      required
    },
    ampacidad: {
      required
    },
    marca: {
      required
    },
    alimentador: {
      required
    },
    calibre: {
      required
    }
  },

  props: {
    // ...your custom props
  },

  computed: {
    error () {
      return this.$v.codigo.$invalid || this.$v.polos.$invalid || this.$v.ampacidad.$invalid || this.$v.marca.$invalid || this.$v.alimentador.$invalid || this.$v.calibre.$invalid
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
