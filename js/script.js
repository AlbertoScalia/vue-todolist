const { createApp } = Vue

createApp({
    data() {
        return {
            nuovaTask: '',
            tasks: [
                {
                    text: 'Preparare il meeting',
                    done: true
                },
                {
                    text: 'Creare la presentazione',
                    done: false
                },
                {
                    text: 'Cancellare il viaggio',
                    done: false
                },
                {
                    text: 'Pagare la fattura',
                    done: false
                },
                {
                    text: 'Archiviare le fatture',
                    done: false
                },
                {
                    text: 'Ordinare la cancelleria',
                    done: false
                },
            ],
            error: ''
        }
    },
    methods: {
        rimuoviTask(index) {
            this.tasks.splice(index, 1);
        },
        is_done(i) {
            this.tasks[i].done = !this.tasks[i].done
        },
        aggiungiTask() {
            const nuova_task = {
                text: this.nuovaTask,
                done: false
            }
            if (nuova_task.text.length >= 3) {
                this.tasks.unshift(nuova_task)
            } else {
                this.error = 'Errore! La task inserita deve contenere almeno tre caratteri!'
                setTimeout(this.rimuoviErrore, 5000)
            }
            this.nuovaTask = ''
        },
        rimuoviErrore() {
            this.error = ''
        }
    }
}).mount('#app')