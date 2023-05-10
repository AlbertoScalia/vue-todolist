const { createApp } = Vue

createApp({
    data() {
        return {
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
            ]
        }
    },
    methods: {
        rimuoviTask(index) {
            this.tasks.splice(index, 1);
        },
        is_done(i) {
            this.tasks[i].done = !this.tasks[i].done
        }
    }
}).mount('#app')