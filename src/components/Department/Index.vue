<template>
  <div id="app" class="p-4">
    <!--index-->
    <div class="card">
        <div class="card-header d-flex justify-content-between">
            <h3 class="card-title text-bold" style="font-size:1.4rem">All Department</h3>
            <div class="card-tools">
                <router-link to="/departments/add" class="btn btn-info btn-sm text-dark">
                    <i class="fas fa-fw fa-plus-circle me-2"></i>
                    <span>Add New Department</span>
                </router-link>
            </div>
        </div>
        <div class="card-body">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Department Name</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody v-if="departments">
                    <tr v-for="department in departments" :key="department.id">
                        <th scope="row">{{ department.id }}</th>
                        <td>{{ department.title }}</td>
                        <td>
                            <a :href="'/departments/'+department.id" class="btn btn-primary btn-sm mx-2"><i class="fa fa-pen me-2"></i>Edit</a>

                            <a :href="'/department/'+department.id" class="btn btn-primary btn-sm mx-2"><i class="fa fa-eye me-2"></i>Show</a>
                            
                            <button @click="confirmDelete(department.id)" class="btn btn-danger btn-sm "><i class="fa fa-trash me-2"></i>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
       
    </div>
    <!--index end-->
  </div>
</template>

<script>
import DepartmentDataService from '../../../services/DepartmentDataService.js';
import Swal from 'sweetalert2';

export default {
  name: 'departmentIndex',
  data() {
      return {
            departments : [],
      }
  },
  methods: {
      getDepartment() {
         DepartmentDataService.getAll().then(response => {
             this.departments = response.data;
             //console.log(response.data);
         }).catch(error => {
             console.log(error);
         })
      },
      confirmDelete(id){
          Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.dismiss != "cancel" && result.value == true) {
                    DepartmentDataService.delete(id).then( ()=> {
                        this.getDepartment()
                    })
                }
            });
      },
  },
  mounted() {
      this.getDepartment()
  },

}
</script>
