<template>
  <div id="app" class="p-4">
    <!--create-->
     <div class="card">
        <div class="card-header d-flex justify-content-between">
            <h3 class="card-title text-bold" style="font-size:1.4rem">Create New Department</h3>
            <div class="card-tools">
                <router-link to="/departments" class="btn btn-info btn-sm text-dark">
                    <i class="fas fa-fw fa-arrow-left mr-1"></i>
                    <span>Go Back</span>
                </router-link>
            </div>
        </div>
        <div class="card-body">
              <form class="row g-3" @submit.prevent="submitData()">
                  <div class="col-md-6">
                      <label for="title" class="form-label">Title</label>
                      <input type="text" class="form-control" id="title" v-model="department.title" required >
                  </div>

                  <div class="col-12">
                      <button type="submit" class="btn btn-primary btn-sm"><i class="fas fa-fw fa-plus-circle me-1"></i>Create Department</button>
                  </div>
              </form>
        </div>
    </div>
    <!--create end-->
  </div>
</template>

<script>
import DepartmentDataService from '../../../services/DepartmentDataService';
import Swal from 'sweetalert2';

export default {
  name: 'departmentCreate',
  data() {
      return {
          department: {
              title: '',
          }
      }
  },
  methods: {
      submitData(){
          var data = {
              title: this.department.title
          };

          DepartmentDataService.create(data).then(response => {
                this.department.id = response.data.id;
                Swal.fire({
                        icon: 'success',
                        title: 'Department Created Successfully !!'
                    });
                this.resetForm();
              //console.log(response.data);
          }).catch(error => {
             console.log(error);
         });
      },
      resetForm(){
          this.department.title= ''
      }
  },
}
</script>
