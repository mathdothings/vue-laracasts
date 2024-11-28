const AppButton = {
    data() {
        return {
            processing: false
        }
    },
    template: `<button @click="send" :disabled="processing" :class="{
        'disabled:cursor-not-allowed rounded border px-5 py-2': true,
        'bg-blue-500 hover:bg-blue-600': type === 'primary',
        'bg-yellow-400 hover:bg-yellow-500': type === 'secondary',
        'bg-gray-300 hover:bg-gray-400': type === 'muted',
        'is-loading': processing === true
    }"><slot /></button>`,
    props: {
        type: {
            type: String,
            default: 'primary'
        }
    },
    methods: {
        send() {
            this.processing = !this.processing;
            setTimeout(() => {this.processing = false;}, 3000);
        }
    }
};
export default AppButton;