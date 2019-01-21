<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <LabresultTable msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import LabresultTable from "@/components/LabresultTable.vue";

export default {
  name: "home",
  components: {
    LabresultTable
  }
};
</script>
