<template>
    <Layout>
        <div class="container">
        <label id="title">
            Incoming Job Table
        </label>
            <b-table id="body" striped hover :items="items">
            <template #cell(job_ID)="row">
                <a
                v-b-modal.modal-1
                size="sm"
                @click="info(row.items)"
                class="mr-8"
                href="#"
                >
                    Job ID
                </a>
                <b-modal id="modal-1" centered size="lg" title="Masukkan list Penugasan ">
                    <p class="my-4">
                        <b-row class="my-1">
                            <b-col sm="4">
                                <b-row class="mt-1 ml-3"><label for="input">No</label></b-row>
                                <b-row class="mt-1 ml-3"><label for="input">Nama Pemberi Tugas</label></b-row>
                                <b-row class="mt-1 ml-3"><label for="input">Departement</label></b-row>
                                <b-row class="mt-1 ml-3"><label><b>Lampiran Job</b></label></b-row>
                                <b-row class="mt-1 ml-3"><label for="input">Nama Job</label></b-row>
                                <b-row class="mt-1 ml-3"><label for="input">Object job</label></b-row>
                                <b-row class="mt-1 ml-3"><label for="input">Document Terkait</label></b-row>
                                <b-row class="mt-1 ml-3"><label for="input">Nama Pekerja</label></b-row>
                                <b-row class="mt-1 ml-3"><label for="input">Departement</label></b-row>
                                <b-row class="mt-1 ml-3"><label for="input">ID Pekerja</label></b-row>
                                <b-row class="mt-1 ml-3"><label for="input">Job ID</label></b-row>
                                <b-row class="mt-1 ml-3"><label for="input">Reviewer</label></b-row>
                                <b-row class="mt-1 ml-3"><label for="input">Departement</label></b-row>
                                <b-row class="mt-1 ml-3"><label for="input">ID Reviewer</label></b-row>
                            </b-col>
                        <b-col sm="8">
                            <b-form-input
                                id="input"
                                size="sm"
                                class="mt-1"
                                placeholder="Masukkan Nomor"
                                disabled
                            ></b-form-input>
                            <b-form-input
                                id="input"
                                size="sm"
                                class="mt-1"
                                placeholder="Nama Pemberi tugas"
                                disabled
                            ></b-form-input>
                            <b-form-input
                                id="input"
                                size="sm"
                                class="mt-1"
                                placeholder="Departement"
                                disabled
                            ></b-form-input>
                            <hr>
                            <b-form-input
                                id="input"
                                size="sm"
                                class="mt-1"
                                placeholder="Nama Job"
                            ></b-form-input>
                            <b-form-file
                                v-model="file1"
                                size="sm"
                                class="mt-1"
                                type="file"
                                placeholder="Object Job"
                            ></b-form-file>
                            <b-form-file
                                v-model="file1"
                                size="sm"
                                class="mt-1"
                                type="file"
                                placeholder="Document Terkait"
                            ></b-form-file>
                            <b-form-input
                                id="input"
                                size="sm"
                                class="mt-1"
                                placeholder="Nama Pekerja"
                            ></b-form-input>
                            <b-form-input
                                id="input"
                                size="sm"
                                class="mt-1"
                                placeholder="Departement"
                            ></b-form-input>
                            <div>
                            <b-input-group
                            v-for="size in ['sm']"
                            :key="size"
                            :size="size"
                            class="mb-3"
                            >
                                <b-form-input></b-form-input>
                                    <b-input-group-append>
                                        <b-button
                                        v-b-modal.modal-2
                                        size="sm"
                                        class="mt-1"
                                        text="Input"
                                        variant="success"
                                        >Tambah Pekerja
                                        </b-button>
                                    </b-input-group-append>
                                </b-input-group>
                            </div>
                            <b-form-input
                                id="input"
                                size="sm"
                                class="mt-1"
                                placeholder=" Job ID"
                            ></b-form-input>
                            <b-form-input
                                id="input"
                                size="sm"
                                class="mt-1"
                                placeholder=" Reviewer"
                            ></b-form-input>
                            <b-form-input
                                id="input"
                                size="sm"
                                class="mt-1"
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
                                    class="mt-1"
                                    text="Input"
                                    variant="success"
                                    >tambah pekerja
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
                </template>
            </b-table>
        </div>
    </Layout>
</template>

<script>

export default {
    data() {
        return {
        items: [
            {
            no: 1,
            tanggal: "24 Agustus 2020",
            job_ID: 12,
            DueDate: "25 Desember 2020",
            status: "Worker",
            },
        ],
        };
    },
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
