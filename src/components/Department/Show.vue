<template>
    <div id="app" class="p-4">
        <!--show-->
        <div class="card">
            <div class="card-header d-flex justify-content-between">
                <h3 class="card-title text-bold" style="font-size:1.4rem">Department Information</h3>
                <div class="card-tools">
                    <router-link to="/departments" class="btn btn-info btn-sm text-dark">
                        <i class="fas fa-fw fa-arrow-left mr-1"></i>
                        <span>Go Back</span>
                    </router-link>
                </div>
            </div>
            <div class="card-body">
                <table class="table border-0">
                    <tr>
                        <td>Sn</td>
                        <td>{{ currentDepartment.id }}</td>
                    </tr>
                    <tr>
                        <td>Department Name</td>
                        <td>{{ currentDepartment.title }}</td>
                    </tr>
                     <tr>
                        <td>Employees Name</td>
                        <td>
                            <ul>
                                <li v-for="employee in currentDepartment.employees" :key="employee.id">{{ employee.name }}</li>
                            </ul>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        <!--edit end-->
    </div>
</template>

<script>
//import EmployeeDataService from '../../../services/EmployeeDataService.js';
import DepartmentDataService from '../../../services/DepartmentDataService.js';

export default {
  name: 'departmentShow',
  data() {
      return {
          currentDepartment:'',
      }
  },
  methods: {
      getDepartment(id){
          DepartmentDataService.get(id).then(response => {
              this.currentDepartment = response.data
          })
      }
  },
  mounted() {
      this.getDepartment(this.$route.params.id);
  },
}
</script>
