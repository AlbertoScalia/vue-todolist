const { createApp } = Vue

createApp({
    data() {
        return {
            tasks: [
                {
                    text: 'Preparare il meeting',
                    done: false
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
    }
}).mount('#app')