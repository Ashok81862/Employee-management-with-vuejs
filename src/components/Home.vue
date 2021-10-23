<template>
  <div id="app" class="p-4">
    <!--index-->
    <div class="card">
        <div class="card-header d-flex justify-content-between">
            <h3 class="card-title text-bold" style="font-size:1.4rem">Dashboard</h3>
        </div>
        <div class="card-body">
            <div class="row">
                <!-- Total Departments -->
                <div class="col-6 col-lg-4 p-4">
                    <div class="small-box bg-white border border-1 p-4 rounded-3">
                        <div class="inner">
                            <h3>{{ departments }}</h3>

                            <p>Total Department</p>
                        </div>
                        <div class="icon">
                            <router-link to="/departments" class="btn btn-primary btn-sm"><i class="fa fa-clipboard-list me-2"></i>Visit Department</router-link>
                        </div>
                    </div>
                </div>
                <!-- Total Employees -->
                <div class="col-6 col-lg-4 p-4">
                    <div class="small-box bg-white border border-1 p-4 rounded-3">
                        <div class="inner">
                            <h3>{{ employees }}</h3>

                            <p>Total Employees</p>
                        </div>
                        <div class="icon">
                            
                            <router-link to="/employees" class="btn btn-primary btn-sm"><i class="fa fa-users me-2"></i>Visit Employees</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--index end-->
  </div>
</template>

<script>
import EmployeeDataService from '../../services/EmployeeDataService';
import DepartmentDataService from '../../services/DepartmentDataService';
export default {
    name: "home",
    data() {
        return {
            departments:[],
            employees:[],
        }
    },
    methods: {
        getDepartment(){
            DepartmentDataService.getAll().then(response=>{
                this.departments = response.data.length
            })
        },
        getEmployee(){
            EmployeeDataService.getAll().then(response=>{
                this.employees = response.data.length 
            })
        }
    },
    mounted() {
        this.getDepartment();
        this.getEmployee();
    },
}
</script>
