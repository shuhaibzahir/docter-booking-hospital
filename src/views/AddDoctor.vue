<template>
  <div class="container">
    <h3 class="m-4">Add Doctor</h3>
    <div class="p-md-3 my-5 border shadow d-md-flex">
      <div class="">
        <div class="form-group m-3">
          <label for="doctor-name">Name</label>
          <input type="text" class="form-control" id="doctorName" />
        </div>
        <div class="form-group m-3">
          <label for="doctor-email">Email</label>
          <input type="email" class="form-control" id="doctorEmail" />
        </div>
        <div class="form-group m-3">
          <label for="doctor-phone">Phone</label>
          <input type="tel" class="form-control" id="doctorPhone" />
        </div>
        <div class="form-group m-3">
          <label class="px-2">Image</label>
          <input
            type="file"
            @change="showImage($event)"
            class="form-control-file"
            id="doctoImage"
          />
        </div>
        <img
          :src="doctorImgeURL"
          v-if="doctorImgeURL"
          style="width: 250px; height: 250px; object-fit: cover"
          alt=""
        />
      </div>
      <div>
        <div class="form-group m-3">
          <label for="doctor-name">Education</label>
          <input
            type="text"
            class="form-control"
            style="width: 350px"
            id="doctorName"
          />
        </div>
        <div class="form-group m-3">
          <label for="doctor-name">Specialization</label>
          <input
            type="text"
            class="form-control"
            style="width: 350px"
            id="doctorName"
          />
        </div>
        <div class="form-group m-3">
          <label for="doctor-name">Department</label>
          <select class="form-select mt-1" aria-label="Default select example">
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
      <div>
        <div class="form-group m-3">
          <label for="doctor-name">Select Day and enter optime</label>
        <div class="input-group">
          <select class="form-select" title="choose" v-model="opDate" id="inputGroupSelect04">
            <option value="0">Sunday</option>
            <option value="1">Monday</option>
            <option value="2">Tuseday</option>
            <option value="3">Wednesday</option>
            <option value="4">Thursday</option>
            <option value="5">Friday</option>
            <option value="6">Saturday</option>
          </select>
          <div class="input-group-append">
            <input type="time" placeholder="hrs:mins" v-model="opTime"   class="form-control" />
          </div>
            <input type="text" placeholder="Number of Op" v-model="opNumber" @keypress.enter="changeTimeFormat"  class="form-control" />
          <button class="btn btn-primary" @click="changeTimeFormat">add</button>
        </div>
          <p ref="opError" class="text-danger"></p>
        </div>
        <div class="form-group   d-flex flex-wrap">
        <div v-for="(item,index) of optimes" :key="index" class="rounded bg-secondary px-2 text-white m-1">
          <span class="">{{item.day}}:{{item.time}} - Nos: {{item.nos}}</span> <span role="button"  @click="delteOptime(index)" class=" "><i class="close  fas fa-times"></i></span>
          </div>
     

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment"
export default {
  name: "addDoctor",
  data() {
    return {
      doctorImge: "",
      doctorImgeURL: "",
      opTime:'',
      opNumber:'',
      opDate:'',
      optimes:[]
    };
  },
  methods: {
    showImage(e) {
      const file = e.target.files[0];
      this.doctorImge = file;
      this.doctorImgeURL = URL.createObjectURL(file);
    },
    changeTimeFormat(){
      if(this.opTime&&this.opDate&&this.opNumber){
      const time = moment(this.opTime, "HH:mm").format("LT")
      const day = moment().day(this.opDate).format('dddd')
      console.log(day)
      const nos = Number(this.opNumber)
      const prev = this.optimes.some(i=>i.time===time&&i.day===day)
      if(!prev){
        this.optimes.push({time,day,nos})
      }else{
        alert('already added')
      }
      this.opTime='';
      this.opNumber='';
      this.opDate='';
      }else{
        this.$refs.opError.innerHTML='Please Enter'
        setTimeout(() => {
        this.$refs.opError.innerHTML=''
        }, 3000);
      }
      
    
       
    },
    delteOptime(target){
      console.log(target)
      this.optimes = this.optimes.filter((i,index)=>index!==target)
    }
  },
};
</script>

<style></style>
