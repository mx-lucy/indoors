<template>
    <div>
      <div>
        <el-input placeholder="请输入内容" v-model="input" style="width: 300px"></el-input>
        <el-button type="info">搜索</el-button>
        <el-button type="primary" @click="stationShow = true">添加</el-button>
      </div>
      <el-table
        :data="tableData"
        style="width: 100%"
        :default-sort = "{prop: 'id', order: 'descending'}"
      >
        <el-table-column
          prop="id"
          label="id"
          sortable
          width="180">
        </el-table-column>
        <el-table-column
          prop="room_id"
          label="room_id"
          sortable
          width="180">
        </el-table-column>
        <el-table-column
          prop="lng"
          label="lng"
          width="380">
        </el-table-column>
        <el-table-column
          prop="lat"
          label="lat"
          width="380">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-form class="stationShow" ref="stationTemp" label-width="80px" v-show="stationShow">
        <el-form-item label="id" v-show="stationEdit">
          <el-input v-model="stationTemp.id" disabled></el-input>
        </el-form-item>
        <el-form-item label="房间">
          <el-input v-model="stationTemp.room_id"></el-input>
        </el-form-item>
        <el-form-item label="Lng">
          <el-input v-model="stationTemp.lng"></el-input>
        </el-form-item>
        <el-form-item label="Lat">
          <el-input v-model="stationTemp.lat"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleAdd">添加信标</el-button>
          <el-button @click="stationShow = false">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
    export default {
        name: 'App',
      data() {
        return {
          input: '',
          tableData: [],
          stationTemp: {
            id: null,
            room_id: null,
            lng: null,
            lat: null
          } ,
          stationShow: false,
          stationEdit: false,
        }
      },
      methods: {
        loading() {
          var _this =this
          this.$axios.get("/test_station").then( res =>{
            _this.tableData = res.data
            // console.log(res.data)
          })
        },
        handleAdd() {
          var station = this.stationTemp
          var _this = this
          // _this.tableData.forEach(function (item, index) {
          //   if (index === 3) {
          //     station = item;
          //   }
          // })
          station= {
            id: station.id,
            room_id: parseInt(station.room_id),
            lng:parseFloat(station.lng),
            lat:parseFloat(station.lat),
          }
          console.log(station)
          if(station.id === null) {
            station.id = 0
          }
          this.$axios.post('/test_station',{
            id: parseInt(station.id),
            room_id: parseInt(station.room_id),
            lng:parseFloat(station.lng),
            lat:parseFloat(station.lat),
          }).then(res => {
            console.log(res)
          })
          this.loading()
          this.stationShow = false
        },
        formatter(row, column) {
          return row.address;
        },
        handleEdit(index, row) {
          console.log(index, row);
          this.stationShow = true
          this.stationEdit = true
          this.stationTemp = row
        },
        handleDelete(index, row) {
          console.log(index, row);
          var url = '/test_station/delete/' + row.id
          console.log(url)
          this.$axios.post(url).then(res => {
            // console.log(res)
          })
          this.loading()
        }
      },
      mounted:function () {
          this.loading();
      }
    }
</script>

<style>
.stationShow{
  position: fixed;
  top: 200px;
  left: 40%;
  width: 500px;
  background-color: white;
}
</style>
