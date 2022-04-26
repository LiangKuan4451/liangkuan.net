<template>
  <div class="table">
    <el-table :data="tabledb" border stripe>
      <el-table-column prop="id" label="Id"></el-table-column>
      <el-table-column prop="user_name" label="Name"></el-table-column>
      <el-table-column prop="age" label="Age"></el-table-column>
      <el-table-column
        :formatter="sexChange"
        prop="sex"
        label="Sex"
      ></el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      tabledb: [{}],
    };
  },
  name: "WDJS",
  components: {},
  created() {
    this.getData();
  },
  methods: {
    getData() {
      var url = "http://106.55.162.163/api/jsonp";
      var params = {};
      axios.get(url, { params }).then((res) => {
        this.tabledb = res.data;
      });
    },
    sexChange(index) {
      if (index.sex == 1) {
        return "男";
      } else {
        return "女";
      }
    },
  },
};
</script>
