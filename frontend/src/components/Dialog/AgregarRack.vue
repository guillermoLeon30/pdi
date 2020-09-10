<template>
  <!-- <q-dialog ref="dialog" @hide="onDialogHide"> -->
  <q-dialog ref="dialog">
    <q-card class="q-dialog-plugin" dark>
      <q-card-section>
        <div class="text-h6">Ingresar Rack</div>
      </q-card-section>

      <q-card-section>
        <q-input
          dark
          v-model="nombre"
          label="Nombre"
          bottom-slots
          :error="$v.nombre.$invalid"
          error-message="Este campo es requerido"
        />

        <q-input
          dark
          v-model="coordenada"
          label="Coordenada"
          bottom-slots
          :error="$v.coordenada.$invalid"
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
    nombre: '',
    coordenada: ''
  }),

  validations: {
    nombre: {
      required
    },
    coordenada: {
      required
    }
  },

  props: {
    // ...your custom props
  },

  computed: {
    error () {
      return this.$v.nombre.$invalid || this.$v.coordenada.$invalid
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
        nombre: this.nombre,
        coordenada: this.coordenada
      })

      this.hide()
    },

    onCancelClick () {
      this.hide()
    }
  }
}
</script>
