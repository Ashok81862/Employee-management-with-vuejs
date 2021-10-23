<template>
    <div id="app" class="p-4">
        <!--edit-->
        <div class="card">
            <div class="card-header d-flex justify-content-between">
                <h3 class="card-title text-bold" style="font-size:1.4rem">Update Employee Information</h3>
                <div class="card-tools">
                    <router-link to="/employees" class="btn btn-info btn-sm text-dark">
                        <i class="fas fa-fw fa-arrow-left mr-1"></i>
                        <span>Go Back</span>
                    </router-link>
                </div>
            </div>
            <div class="card-body">
                <form class="row g-3" @submit.prevent="updateEmployee()">
                    <div class="col-md-6">
                        <label for="name" class="form-label">Name</label>
                        <input type="text" class="form-control" name="name" id="name" v-model="currentEmployee.name" required>
                    </div>

                    <div class="col-md-6">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" name="email" id="email" v-model="currentEmployee.email" required>
                    </div>

                    <div class="col-md-6">
                        <label for="address" class="form-label">Address</label>
                        <input type="text" class="form-control" name="address" id="address" v-model="currentEmployee.address" required>
                    </div>

                    <div class="col-md-6">
                        <label for="departmentId" class="form-label">Department</label>
                        <select class="form-select" aria-label="Default select example" v-model="currentEmployee.departmentId" required name="departmentId">
                            <option disabled selected>Select Department</option>
                            <option v-for="department in departments" :key="department.id" v-bind:value="department.id" selected>{{ department.title }}</option>
                        </select>
                    </div>

                    <div class="col-md-6">
                        <button type="submit" class="btn btn-primary btn-sm"><i class="fas fa-fw fa-pen me-1"></i>Update Employee</button>
                    </div>
                </form>
            </div>
        </div>
        <!--edit end-->
    </div>
</template>

<script>
import DepartmentDataService from '../../../services/DepartmentDataService.js';
import EmployeeDataService from '../../../services/EmployeeDataService.js';
import Swal from 'sweetalert2'

export default {
  name: 'employeeEdit',
  data() {
      return {
          departments:[],
          currentEmployee:'',
          employee : {
              name:'',
              address: '',
              email:'',
              departmentId:'',
          }
      }
  },
  methods: {
      getDepartment(){
          DepartmentDataService.getAll().then(response => {
              this.departments = response.data;
          }).catch(error => {
            console.log(error);
          });
      },
      getEmployee(id){
          EmployeeDataService.get(id).then(response => {
              this.currentEmployee = response.data
          })
      },
      updateEmployee(){
          var data = {
             name   : this.currentEmployee.name,
             email  : this.currentEmployee.email,
             address: this.currentEmployee.address,
             departmentId : this.currentEmployee.departmentId,
         }; 

        EmployeeDataService.update(this.currentEmployee.id,data);
        Swal.fire({
            icon: 'success',
            title: 'Employee Updated Successfully !!'
        });
        this.resetForm();
      },
      resetForm(){
          this.employee.name = this.currentEmployee.name,
          this.employee.email= this.currentEmployee.email,
          this.employee.address= this.currentEmployee.address,
          this.employee.departmentId = this.currentEmployee.departmentId
      }
  },
  mounted() {
      this.getDepartment();
      this.getEmployee(this.$route.params.id);
  },
}
</script>
