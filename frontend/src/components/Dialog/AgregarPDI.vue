<template>
  <!-- <q-dialog ref="dialog" @hide="onDialogHide"> -->
  <q-dialog ref="dialog">
    <q-card class="q-dialog-plugin" dark>
      <q-card-section>
        <div class="text-h6">Ingresar PDI</div>
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
          v-model="potencia"
          label="Potencia"
          type="number"
          suffix="KVA"
          bottom-slots
          :error="$v.potencia.$invalid"
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
  name: 'AgregarPDI',

  data: () => ({
    codigo: '',
    potencia: ''
  }),

  validations: {
    codigo: {
      required
    },
    potencia: {
      required
    }
  },

  props: {
    // ...your custom props
  },

  computed: {
    error () {
      return this.$v.codigo.$invalid || this.$v.potencia.$invalid
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
        potencia: this.potencia
      })

      this.hide()
    },

    onCancelClick () {
      this.hide()
    }
  }
}
</script>
