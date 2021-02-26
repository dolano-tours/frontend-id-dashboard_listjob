<template>
    <Layout>
        <div class="container">
            <label id="title">
                Outgoing
            </label>
            <div>
                <b-button v-b-modal.modal-2>add</b-button>
                <b-modal id="modal-2" centered size="lg" title="Masukkan list Penugasan " @ok="add_pekerjaan">

                    <p class="my-4">
                        <b-row class="my-1">
                            <b-col sm="4">

                                <b-row class="mt-1 ml-3"><label for="input">Nama Pemberi Tugas</label></b-row>
                                <b-row class="mt-1 ml-3"><label for="input">position</label></b-row>
                                <b-row class="mt-1 ml-3"><label><b>Lampiran Job</b></label></b-row>
                                <b-row class="mt-1 ml-3"><label for="input">Nama Job</label></b-row>
                                <b-row class="mt-1 ml-3"><label for="input">Document Terkait</label></b-row>
                                <b-row class="mt-1 ml-3"><label for="input">Nama Pekerja</label></b-row>
                                <b-row class="mt-1 ml-3"><label for="input">Status</label></b-row>
                                <b-row class="mt-1 ml-3"><label for="input">due date</label></b-row>
                                <!-- <b-row class="mt-1 ml-3"><label for="input">Reviewer</label></b-row> -->

                            </b-col>
                            <b-col sm="8">
                                <b-form-input id="input" size="sm" class="mt-1" placeholder="Nama Pemberi tugas"
                                    v-model="model.nama_pekerja"></b-form-input>

                                <b-form-input id="input" size="sm" class="mt-1" placeholder="Position"
                                    v-model="model.position"></b-form-input>
                                <hr>
                                <b-form-input id="input" size="sm" class="mt-1" placeholder="Deskripsi job"
                                    v-model="model.nama"></b-form-input>
                                <b-form-file size="sm" class="mt-1" type="file" placeholder="Document Terkait"
                                    v-model="model.path_file"></b-form-file>
                                <b-form-select id="input" size="sm" class="mt-1" :options="items1"
                                    v-model="model.pekerja_id"></b-form-select>
                                <b-form-input id="input" size="sm" class="mt-1" placeholder="Status"
                                    v-model="model.status"></b-form-input>
                                <b-form-input id="input" size="sm" class="mt-1" placeholder="due_date"
                                    v-model="model.due_date"></b-form-input>
                                <!-- <b-form-select id="input" size="sm" class="mt-1" :options=" items1"
                                    v-model="model.pekerja_id"></b-form-select> -->
                            </b-col>
                        </b-row>
                    </p>


                </b-modal>

            </div>

            <b-table id="body" striped hover :items="items">
                <template #cell(dokumen_terkait)="data">
                    <div v-for="(v,i) in data.item.dokumen_terkait " :key="i">{{v.path_file}}</div>
                </template>
                <template #cell(dokumen_hasil)="data">
                    <div v-for="(v,i) in data.item.dokumen_hasil " :key="i">{{v.path_file}}</div>
                </template>
                <template #cell(dokumen_review)="data">
                    <div v-for="(v,i) in data.item.dokumen_review " :key="i">{{v.path_file}}</div>
                </template>

                <template #cell(job_ID)="row">
                    <a v-b-modal.modal-1 size="sm" @click="showedit(row.item)" class="mr-8" href="#">
                        {{row.item.job_ID}}
                    </a>

                </template>
            </b-table>
            <b-modal id="modal-1" centered size="lg" title="Masukkan list Penugasan ">
                <p class="my-1">
                    <b-row class="my-1">
                        <b-col sm="4">
                            <b-row class="mt-1 ml-3"><label for="input">Nama Pemberi Tugas</label></b-row>

                            <b-row class="mt-1 ml-3"><label><b>Lampiran Job</b></label></b-row>
                            <b-row class="mt-1 ml-3"><label for="input">Nama Job</label></b-row>
                            <b-row class="mt-1 ml-3"><label for="input">Object job</label></b-row>
                            <b-row class="mt-1 ml-3"><label for="input">Document Terkait</label></b-row>
                            <b-row class="mt-1 ml-3"><label for="input">Nama Pekerja</label></b-row>
                            <!-- <b-row class="mt-1 ml-3"><label for="input">Reviewer</label></b-row> -->


                        </b-col>
                        <b-col sm="8">

                            <b-form-input id="input" size="sm" class="mt-1" placeholder="Nama Pemberi tugas"
                                v-model="model.nama_pekerja"></b-form-input>
                            <hr>
                            <b-form-input id="input" size="sm" class="mt-1" placeholder="Nama Job" v-model="model.nama">
                            </b-form-input>
                            <b-form-file v-model="file1" size="sm" class="mt-1" type="file" placeholder="Object Job">
                            </b-form-file>
                            <b-form-file size="sm" class="mt-1" type="file" placeholder="Document Terkait"
                                v-model="model.path_file"></b-form-file>
                            <b-form-input id="input" size="sm" class="mt-1" placeholder="Nama Pekerja"
                                v-model="model.pekerja_id">
                            </b-form-input>
                            <div>
                            </div>
                            <!-- 
                                    <b-form-input id="input" size="sm" class="mt-1" placeholder=" Reviewer">
                                    </b-form-input> -->
                            <div>

                                <!-- <b-button v-b-modal.modal-3 size="sm" class="mt-1" text="Input"
                                            variant="success">tambah Reviewer
                                        </b-button> -->


                            </div>
                        </b-col>
                    </b-row>
                </p>

                <div class="text-right">
                    <b-button>edit</b-button>
                    <b-button @click="delete_data(model.pekerjaan_id)">Delete</b-button>
                </div>
            </b-modal>
        </div>
    </Layout>
</template>


<script>
    import axios from 'axios';
    import Layout from '../layouts/Layout.vue'

    export default {
        name: 'Outgoing',
        components: {
            Layout
        },
        data() {
            return {
                model: {
                    pekerja_id: null,
                    pekerjaan_id: null,
                    position: null,
                    nama: null,
                    status: null,
                    due_date: null,
                    path_file: null,
                },
                file1: null,
                file2: null,
                items: [],
                items1: [],
            };
        },
        mounted() {
            this.getjob()
            this.getpekerja()
        },
        methods: {
            async getjob() {
                this.items=[]
                let request = await axios.get(process.env.VUE_APP_BACKEND_URL + "/pekerja_pekerjaan/all")
                let data = request.data.content
                data.forEach((v, i) => {

                    let aset = v.Aset
                    let dokumen = []
                    let dokumen_review = []
                    let dokumen_hasil = []
                    aset.forEach((v2) => {
                        if (v2.is_hasil == "DOKUMEN") {
                            let file = v2.path_file.split("/")
                            v2.path_file = file[file.length - 1]
                            dokumen.push(v2)
                        }
                        if (v2.is_hasil == "HASIL") {
                            let file = v2.path_file.split("/")
                            v2.path_file = file[file.length - 1]
                            dokumen_hasil.push(v2)
                        }
                        if (v2.is_hasil == "REVIEW") {
                            let file = v2.path_file.split("/")
                            v2.path_file = file[file.length - 1]
                            dokumen_review.push(v2)
                        }


                    })
                    let item = {
                        no: i + 1,
                        pemberi_tugas: v.Pekerja.nama_pekerja,
                        deskripsi_pekerjaan: v.Pekerjaan.nama,
                        dokumen_terkait: dokumen,
                        dokumen_hasil: dokumen_hasil,
                        dokumen_review: dokumen_review,
                        pekerja: v.Pekerja.nama_pekerja,
                        job_ID: v.Pekerjaan.id,
                        due_date: v.StatusPekerjaan.due_date,
                        time_stamp: v.StatusPekerjaan.timestamp,
                        result: v.Aset.is_hasil,
                        review: v.Pekerja.nama_pekerja,
                        status: v.StatusPekerjaan.type
                    }
                    this.items.push(item)

                });
            },
            async getpekerja() {
                let request = await axios.get(process.env.VUE_APP_BACKEND_URL + "/pekerja/all")
                let data = request.data.content
                data.forEach((v) => {
                    this.items1.push({
                        text: v.nama_pekerja,
                        value: v.id_employee
                    })

                })
            },
            async add_pekerjaan() {
                // let request = await axios.post(process.env.VUE_APP_BACKEND_URL+ "/pekerja_pekerjaan/add",this.model)
                let bodyFormData = new FormData();
                bodyFormData.append('pekerja_id', this.model.pekerja_id);
                bodyFormData.append('pekerjaan_id', this.model.pekerjaan_id);
                bodyFormData.append('position', this.model.position);
                bodyFormData.append('nama', this.model.nama);
                bodyFormData.append('status', this.model.status);
                bodyFormData.append('due_date', this.model.due_date);
                bodyFormData.append('file_path', this.model.path_file);
                bodyFormData.append('due_date', this.model.due_date);

                await axios({
                        method: 'post',
                        url: (process.env.VUE_APP_BACKEND_URL + "/pekerja_pekerjaan/add"),
                        data: bodyFormData,
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    })
                    .then(function (response) {
                        //handle success
                        console.log(response);
                    })
                    .catch(function (response) {
                        //handle error
                        console.log(response);
                    });

            },
            showedit(data) {
                this.model.pekerja_id = data.pekerja;
                // this.mode.pemberi_tugas=data.pemberi_tugas;
                this.model.pekerjaan_id = data.job_ID;
                this.model.position = data.position;
                this.model.nama = data.deskripsi_pekerjaan;
                this.model.status = data.status;
                this.model.due_date = data.due_date;
                this.model.path_file = data.path_file;
                console.log(data)
            },
           async delete_data(pekerjaan_id){
                let request = await axios.post(process.env.VUE_APP_BACKEND_URL+ "/pekerja_pekerjaan/delete",{pekerjaan_id:pekerjaan_id})
                let data = request.data
                 console.log(pekerjaan_id)
                console.log(data)
                this.getjob()
               

            }


        }
    };
</script>


<style scoped>
    #title {
        font-weight: bold;
        font-size: 50px;
        color: white;
        text-shadow: 2px 2px 4px black;
    }

    #body {
        background: rgba(255, 255, 255, 0.8);
        margin-top: 2em;
        padding: 1em;
    }

    .b-modal {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>