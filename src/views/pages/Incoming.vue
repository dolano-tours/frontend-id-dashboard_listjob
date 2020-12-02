<template>
<Layout>
    <b-table id="body" hover :items="items">
    <template #cell(job_ID)="row">
        <a
        v-b-modal.modal-1
        size="sm"
        @click="info(row.items)"
        class="mr-1"
        href="#"
        >
            Job ID
        </a>
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
                    v-model="file1"
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
                    <b-form-input> </b-form-input>
                        <b-input-group-append>
                            <b-button
                            v-b-modal.modal-2
                            size="sm"
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
#body {
    background: rgba(255, 255, 255, 0.5);
    margin-top: 2em;
    margin-left: 2em;
    margin-right: 2em;
    padding: 1em;
}
</style>