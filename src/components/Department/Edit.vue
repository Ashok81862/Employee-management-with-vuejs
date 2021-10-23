<template>
  <div id="app" class="p-4">
    <!--create-->
     <div class="card">
        <div class="card-header d-flex justify-content-between">
            <h3 class="card-title text-bold" style="font-size:1.4rem">Update Department Information</h3>
            <div class="card-tools">
                <router-link to="/departments" class="btn btn-info btn-sm text-dark">
                    <i class="fas fa-fw fa-arrow-left mr-1"></i>
                    <span>Go Back</span>
                </router-link>
            </div>
        </div>
        <div class="card-body">
              <form class="row g-3"  @submit.prevent="updateDepartment()">
                  <div class="col-md-6">
                      <label for="title" class="form-label">Title</label>
                      <input type="text" class="form-control" id="title" v-model="currentDepartment.title" required>
                  </div>

                  <div class="col-12">
                      <button type="submit" class="btn btn-primary btn-sm"><i class="fas fa-fw fa-pen me-2"></i>Update Department</button>
                  </div>
              </form>
        </div>
    </div>
    <!--create end-->
  </div>
</template>

<script>
import DepartmentDataService from '../../../services/DepartmentDataService.js';
import Swal from 'sweetalert2'

export default {
  name: 'departmentEdit',
  data() {
      return {
          currentDepartment: '',
          department: {
              title: ""
          }
      }
  },
  methods: {
      getDepartment(id){
          DepartmentDataService.get(id).then(response => {
              this.currentDepartment = response.data;
          })
      },
      updateDepartment(){
          var data = {
              title: this.currentDepartment.title,
          };

          DepartmentDataService.update(this.currentDepartment.id, data);
          Swal.fire({
                icon: 'success',
                title: 'Department Updated Successfully !!'
            });
            this.resetForm();
      },
      resetForm(){
          this.department.title= this.currentDepartment.title
        }
  },
  mounted() {
      this.getDepartment(this.$route.params.id);
  },
}
</script>
