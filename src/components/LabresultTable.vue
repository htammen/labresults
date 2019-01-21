<template>
  <div class="hello">
    <h1>{{ $t("appTitle") }}</h1>
    <FdLabel>{{ $t("welcome_message") }}</FdLabel>
    <!--
    <FdLabel>Datum: {{ $d(new Date(), 'short') }}</FdLabel>
    <FdLabel>Datum: {{ $d(new Date(), 'long') }}</FdLabel>
    <FdLabel>Datum: {{ $d(new Date(), 'long', "fr") }}</FdLabel>
    <FdLabel>Datum: {{ $d(new Date(), 'long', "de") }}</FdLabel>
    <FdLabel>Datum: {{ $d(new Date(), 'short', "de") }}</FdLabel>
    -->
    <div><FdLabel>{{ $t("tableDataCountLabel", {count: $n(tableDataCount, {maximumFractionDigits: 0})}) }}</FdLabel></div>
    <FdTable borderless :items="tableData">
      <FdTableHeader>
        <FdTableHeaderCell label="Date"/>
        <FdTableHeaderCell label="Key"/>
        <FdTableHeaderCell label="Value"/>
        <FdTableHeaderCell label="Rating"/>
        <FdTableHeaderCell label="Comment"/>
      </FdTableHeader>

      <FdTableRow slot="row" slot-scope="{item}">
        <FdTableCell>{{ $d(item.date, 'short') }}</FdTableCell>
        <FdTableCell>{{ item.key }}</FdTableCell>
        <FdTableCell>{{ $n(item.value, "decimal") }}</FdTableCell>
        <FdTableCell>{{ $n(item.rating, "decimal_1") }}</FdTableCell>
        <FdTableCell>{{ item.comment }}</FdTableCell>
      </FdTableRow>
    </FdTable>
  </div>
</template>

<script>
// import sugar.js
import Sugar from "sugar";
// require locales of sugar.js separately
require("sugar/locales/de");
import { mapState } from "vuex";
import { mapGetters } from 'vuex';
import { mapMutations } from 'vuex';

export default {
  name: "LabresultTable",
  props: {
    msg: String
  },
  data() {
    return {
      newEntry: {
        date: null,
        key: null,
        value: null,
        rating: 1,
        comment: ""
      }
    };
  },
  created: function() {
    // `this` points to the vm instance
    let newEntry = {
      date: new Date("12/30/2018"),
      key: "Vit D",
      value: 1.2,
      rating: 2
    };
    this.addTableEntry(newEntry);
    newEntry = {
      date: new Date("01/02/2019"),
      key: "Leukozyten",
      value: 3.432,
      rating: 3.5
    };
    this.addTableEntry(newEntry);
  },
  methods: {
    ...mapMutations([
      "addTableEntry"
    ]),
    getFormattedDate: function(date) {
      return Sugar.Date.medium(date, this.language); // date.getFullYear();
    }
  },
  computed: {
    ...mapState([
      // map this.tableData to store.state.tableData
      "tableData"
    ]),
    ...mapGetters([
      "tableDataCount"
    ])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
