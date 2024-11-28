const AppButton = {
    data() {
        return {
            processing: true
        };
    },
    template: `<button :disabled="processing" class="disabled:cursor-not-allowed bg-blue-500 rounded border px-5 py-2"><slot /></button>`
};
export default AppButton;