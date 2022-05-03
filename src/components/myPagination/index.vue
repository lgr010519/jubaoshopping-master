<template>
  <el-pagination :current-page="pageNo" :page-size="pageSize" layout="prev, pager, next, total, jumper" :total="total" style="text-align:center" background @current-change="handleCurrentChange">
  </el-pagination>
</template>

<script>
export default {
  name: "myPagination",
  props: ["pageNo", "pageSize", "total"],
  methods: {
    handleCurrentChange(pageNo) {
      this.$emit('getPageNo', pageNo)
    }
  }
};
</script>

<style lang="less" scoped>
.pagination {
  text-align: center;

  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}

.active {
  background: skyblue;
}
</style>
