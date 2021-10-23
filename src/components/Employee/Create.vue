<template>
    <div id="app" class="p-4">
        <!--create-->
        <div class="card">
            <div class="card-header d-flex justify-content-between">
                <h3 class="card-title text-bold" style="font-size:1.4rem">Create New Employee</h3>
                <div class="card-tools">
                    <router-link to="/employees" class="btn btn-info btn-sm text-dark">
                        <i class="fas fa-fw fa-arrow-left me-2"></i>
                        <span>Go Back</span>
                    </router-link>
                </div>
            </div>
            <div class="card-body">
                <form class="row g-3" @submit.prevent="submitData()">
                    <div class="col-md-6">
                        <label for="name" class="form-label">Name</label>
                        <input type="text" class="form-control" id="name" v-model="employee.name" name="name" required>
                    </div>

                    <div class="col-md-6">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email" v-model="employee.email" name="email" required>
                    </div>

                    <div class="col-md-6">
                        <label for="address" class="form-label">Address</label>
                        <input type="text" class="form-control" id="address" v-model="employee.address" name="address" required>
                    </div>

                    <div class="col-md-6">
                        <label for="departmentId" class="form-label">Department</label>
                        <select class="form-select" aria-label="Default select example" v-model="employee.departmentId" name="departmentId" placeholder="Select Department" required>
                            <option disabled selected>Select Department</option>
                            <option v-for="department in departments" :key="department.id" v-bind:value="department.id">{{department.title}}</option>
                        </select>
                    </div>

                    <div class="col-md-6">
                        <button type="submit" class="btn btn-primary btn-sm"><i class="fas fa-fw fa-plus-circle me-1"></i>Create Employee</button>
                    </div>
                </form>
            </div>
        </div>
        <!--create end-->
    </div>
</template>

<script>
import EmployeeDataService from '../../../services/EmployeeDataService.js';
import DepartmentDataService from '../../../services/DepartmentDataService.js';
import Swal from 'sweetalert2'

export default {
  name: 'employeeCreate',
   data() {
      return {
          departments : [],
          employee: {
              name: '',
              address: '',
              email: '',
              departmentId: '',
          }
      }
  },
  methods: {
      submitData(){
         var data = {
             name   : this.employee.name,
             email  : this.employee.email,
             address: this.employee.address,
             departmentId : this.employee.departmentId,
         }; 

         EmployeeDataService.create(data).then(response => {
            this.employee.id = response.data.id;
            Swal.fire({
                icon: 'success',
                title: 'Employee Created Successfully !!'
            });
            this.resetForm();
         }).catch(error => {
             console.log(error);
         });
      },
      getDepartment() {
        DepartmentDataService.getAll().then(response => {
            this.departments = response.data;
         }).catch(error => {
             console.log(error);
         });
      },
      resetForm(){
        this.employee.name= '',
        this.employee.email= '',
        this.employee.address= '',
        this.employee.departmentId= ''
    }
  }, 
  mounted() {
      this.getDepartment();
  },   
}
</script>
