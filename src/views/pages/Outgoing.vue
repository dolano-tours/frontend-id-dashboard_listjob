<template>
  <Layout>
    <div>
      <table border="3" style="background: Tomato">
        <tr>
          <td>
            <b-button v-b-modal.modal-1>Create Job++</b-button>
          </td>
        </tr>
        <tr>
          <th rowspan="2">No</th>
          <th rowspan="2">Pemberi Tugas</th>
          <th rowspan="2">Deskripsi Pekerjaan</th>
          <th colspan="2">Object Pekerjaan</th>
          <th rowspan="2">pekerja</th>
          <th rowspan="2">Job ID</th>
          <th colspan="2">Status</th>
          <th rowspan="2">Result</th>
          <th rowspan="2">Review</th>
        </tr>
        <tr>
          <td>Dokumen</td>
          <td>Dokument Terkait</td>
          <td>Due Date</td>
          <td>Time Stamp</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Titan</td>
          <td>Documentasi Version</td>
          <td>Modul Partner</td>
          <td>Partner Registration</td>
          <td>Lidia</td>
          <td><a v-b-modal.modal-1 href="#"> 123 </a></td>
          <td>start</td>
          <td>12.34</td>
          <td>belum ada</td>
          <td>Pak longkey</td>
        </tr>
      </table>

      <b-modal id="modal-1" size="lg" title="Masukkan list Penugasan ">
        <p class="my-4">
          <b-row class="my-1">
            <b-col sm="4">
              <b-row><label for="input">No:</label></b-row>
              <b-row><label for="input">Nama Pemberi Tugas:</label></b-row>
              <b-row><label for="input">Departement:</label></b-row>
              <b-row><label for="input">ID Pekerja:</label></b-row>
              <b-row><label for="input">Nama Job:</label></b-row>
              <b-row><label for="input">Object job:</label></b-row>
              <b-row><label for="input">Document Terkait:</label></b-row>
              <b-row><label for="input">Nama Pekerja:</label></b-row>
              <b-row><label for="input">Departement:</label></b-row>
              <b-row><label for="input">ID Pekerja:</label></b-row>
              <b-row><label for="input">Job ID:</label></b-row>
              <b-row><label for="input">Reviewer:</label></b-row>
              <b-row><label for="input">Departement:</label></b-row>
              <b-row><label for="input">ID Reviewer:</label></b-row>
            </b-col>
            <b-col sm="8">
              <b-form-input
                id="input"
                size="sm"
                placeholder="Masukkan Nomor"
              ></b-form-input>
              <b-form-input
                id="input"
                size="sm"
                placeholder=" Nama Pemberi tugas"
              ></b-form-input>
              <b-form-input
                id="input"
                size="sm"
                placeholder=" Departement"
              ></b-form-input>
              <b-form-input
                id="input"
                size="sm"
                placeholder=" ID Pekerja "
              ></b-form-input>
              <b-form-input
                id="input"
                size="sm"
                placeholder=" Nama Job"
              ></b-form-input>
              <b-form-file
                v-model="file1"
                size="sm"
                type="file"
                placeholder=" Object Job"
              ></b-form-file>

              <b-form-file
                v-model="file2"
                size="sm"
                type="file"
                placeholder=" Document Terkait"
              ></b-form-file>
              <b-form-input
                id="input"
                size="sm"
                placeholder=" Nama Pekerja"
              ></b-form-input>
              <b-form-input
                id="input"
                size="sm"
                placeholder=" Departemen"
              ></b-form-input>

              <div>
                <b-input-group
                  v-for="size in ['sm']"
                  :key="size"
                  :size="size"
                  class="mb-3"
                >
                  <b-input-group-append>
                    <b-button
                      v-b-modal.modal-2
                      size="sm"
                      text="Input"
                      variant="success"
                      >Masukkan
                    </b-button>
                  </b-input-group-append>
                </b-input-group>
              </div>
              <b-form-input
                id="input"
                size="sm"
                placeholder=" Job ID"
              ></b-form-input>
              <b-form-input
                id="input"
                size="sm"
                placeholder=" Reviewer"
              ></b-form-input>
              <b-form-input
                id="input"
                size="sm"
                placeholder=" Departement"
              ></b-form-input>
              <div>
                <b-input-group
                  v-for="size in ['sm']"
                  :key="size"
                  :size="size"
                  class="mb-3"
                >
                  <b-form-input> </b-form-input>
                  <b-input-group-append>
                    <b-button
                      v-b-modal.modal-3
                      size="sm"
                      text="Input"
                      variant="success"
                      >Masukkan
                    </b-button>
                  </b-input-group-append>
                </b-input-group>
              </div>
            </b-col>
          </b-row>
        </p>

        <div class="text-right">
          <b-button>edit</b-button>
          <b-button>Delete</b-button>
        </div>
      </b-modal>
      <b-modal id="modal-2" size="lg" title="pilih pekerja ">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Nama pekerja:</th>
              <th>Department</th>
              <th>ID Pekerja</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>titan</td>
              <td>Operation</td>
              <td>50</td>
              <td>
                <b-button> pilih </b-button>
              </td>
            </tr>
            <tr>
              <td>Mahfud</td>
              <td>Teknologi Departemen</td>
              <td>45</td>
              <td>
                <b-button> pilih </b-button>
              </td>
            </tr>
            <tr>
              <td>Pak long key</td>
              <td>Product Development</td>
              <td>01</td>
              <td>
                <b-button> pilih </b-button>
              </td>
            </tr>
          </tbody>
        </table>
      </b-modal>
      <b-modal id="modal-3" size="lg" title="pilih Reviewer ">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Nama pekerja:</th>
              <th>Department</th>
              <th>ID Pekerja</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>titan</td>
              <td>Operation</td>
              <td>50</td>
              <td>
                <b-button> pilih </b-button>
              </td>
            </tr>
            <tr>
              <td>Mahfud</td>
              <td>Teknologi Departemen</td>
              <td>45</td>
              <td>
                <b-button> pilih </b-button>
              </td>
            </tr>
            <tr>
              <td>Pak long key</td>
              <td>Product Development</td>
              <td>01</td>
              <td>
                <b-button> pilih </b-button>
              </td>
            </tr>
          </tbody>
        </table>
      </b-modal>
    </div>
  </Layout>
</template>
<script>
export default {
  data() {
    return {
      file1: "0",
      file2: "0",
    };
  },
};
</script>