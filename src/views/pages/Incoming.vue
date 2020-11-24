<template>
    <Layout>
        <div>
            <h1>To Do List</h1>
            <table class="table table-bordered">
                <td> Incoming Job </td>
                <tr>
                    <th rowspan="2">no</th>
                    <th rowspan="2">Tanggal</th>
                    <th rowspan="2">Job ID</th>
                    <th rowspan="2">Due Date</th>
                    <th rowspan="2">Status</th>
                </tr>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>21-07-2020</td>
                        <td><a v-b-modal.modal-1 href="#">123</a></td>
                        <td>25-02-2021</td>
                        <td>dikerjakan</td>
                    </tr>
                     <tr>
                        <td>2</td>
                        <td>01-12-2024</td>
                        <td><a v-b-modal.modal-1 href="#">213</a></td>
                        <td>12-12-2025</td>
                        <td>dipending</td>
                    </tr>
                </tbody>
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
                            <b-form-input id="input" size="sm" placeholder="Masukkan Nomor"></b-form-input>
                            <b-form-input id="input" size="sm" placeholder=" Nama Pemberi tugas"></b-form-input>
                            <b-form-input id="input" size="sm" placeholder=" Departement"></b-form-input>
                            <b-form-input id="input" size="sm" placeholder=" ID Pekerja "></b-form-input>
                            <b-form-input id="input" size="sm" placeholder=" Nama Job"></b-form-input>
                            <b-form-file v-model= "file1" size="sm" type="file" placeholder=" Object Job"></b-form-file>
                            <b-form-file v-model= "file1" size="sm" type="file" placeholder=" Document Terkait"></b-form-file>
                            <b-form-input id="input" size="sm" placeholder=" Nama Pekerja"></b-form-input>
                            <b-form-input id="input" size="sm" placeholder=" Departemen"></b-form-input>
                            <div>
                                <b-input-group v-for="size in ['sm']" :key="size" :size="size" class="mb-3">
                                    <b-form-input>
                                    </b-form-input>
                                    <b-input-group-append>
                                        <b-button v-b-modal.modal-2 size="sm" text="Input" variant="success">Masukkan
                                        </b-button>
                                    </b-input-group-append>
                                </b-input-group>
                            </div>
                            <b-form-input id="input" size="sm" placeholder=" Job ID"></b-form-input>
                            <b-form-input id="input" size="sm" placeholder=" Reviewer"></b-form-input>
                            <b-form-input id="input" size="sm" placeholder=" Departement"></b-form-input>
                            <div>
                                <b-input-group v-for="size in ['sm']" :key="size" :size="size" class="mb-3">
                                    <b-form-input>
                                    </b-form-input>
                                    <b-input-group-append>
                                        <b-button v-b-modal.modal-3 size="sm" text="Input" variant="success">Masukkan
                                        </b-button>
                                    </b-input-group-append>
                                </b-input-group>
                            </div>
                        </b-col>

                    </b-row>
                <div class="text-right">
                    <b-button>edit</b-button>
                    <b-button>Delete</b-button>
                </div>
            </b-modal>
        </div>
    </Layout>
</template>