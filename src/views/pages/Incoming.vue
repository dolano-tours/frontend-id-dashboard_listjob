<template>
    <Layout>
        <div class="container">
            <label id="title">
                Incoming Job Table
            </label>
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

            <b-modal id="modal-1" centered size="lg" title="list Penugasan ">
                <p class="my-4">
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

                            <b-form-input id="input" size="sm" class="mt-1" placeholder="Nama Pemberi tugas">
                            </b-form-input>
                            <hr>
                            <b-form-input id="input" size="sm" class="mt-1" placeholder="Nama Job">
                            </b-form-input>
                            <b-form-file v-model="file1" size="sm" class="mt-1" type="file" placeholder="Object Job">
                            </b-form-file>
                            <b-form-file size="sm" class="mt-1" type="file" placeholder="Document Terkait">
                            </b-form-file>
                            <b-form-input id="input" size="sm" class="mt-1" placeholder="Nama Pekerja">
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

            </b-modal>
        </div>
    </Layout>
</template>

<script>
    import axios from "axios"

    export default {
        data() {
            return {
                file1: null,
                items: [],
            };
        },
        mounted() {
            this.getjob()
        },
        methods: {
            async getjob() {
                let request = await axios.get(process.env.VUE_APP_BACKEND_URL + "/pekerja_pekerjaan/all")
                let data = request.data.content
                data.forEach((v, i) => {
                    this.items.push({
                        no: i + 1,
                        tanggal: v.StatusPekerjaan.timestamp,
                        job_ID: v.Pekerjaan.id,
                        DueDate: v.StatusPekerjaan.due_date,
                        status: v.StatusPekerjaan.type,
                    }, )
                    

                })
            }
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
        }

    };
</script>

<style scoped>
    #title {
        font-weight: bold;
        font-size: 42px;
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