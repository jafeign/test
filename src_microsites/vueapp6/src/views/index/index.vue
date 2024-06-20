<template>
  <div class="index-div">
    Vue App Demo
  </div>
</template>

<script>

export default {
  name: 'index',
  props: {
    msg: String
  },
  mounted() {},
  methods: {},
  data() {
    return {
      src: "",
    }
  },
  computed: {},
  watch: {},
  created() {},
  destroyed() {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.index-div {
  width: 100%;
  height: 100%;
  font-size: x-large;
  font-weight: bold;
  margin: 10px;
}

</style>
