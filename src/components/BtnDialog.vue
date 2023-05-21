<template>
    <div class="text-center">
      <v-dialog
        v-model="dialog"
        width="500">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="red lighten-2"
            dark
            v-bind="attrs"
            v-on="on">
            Púlsame
          </v-btn>
        </template>
        <v-card>
          <v-card-title class="text-h5 grey lighten-2">
            Detalles de personajes
          </v-card-title>
          <v-card-text>
            texto aqui
        </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              text
              @click="dialog = false">
              Ok
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </template>

<script>
  export default {
    data () {
      return {
        dialog: false,
      }
    },
  }
</script>