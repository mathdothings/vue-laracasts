const AssignmentCreate = {
    template: `
        <form @submit.prevent="add">
            <div class="flex border-2 p-2 rounded border-gray-600 hover:border-blue-500 mt-2">
                <input v-model="newAssignment" :maxLength="userInputMaxLength" required autofocus placeholder="What's your next Initiative?" class="w-full p-2 border-2 border-transparent text-white  bg-gray-700 focus:outline-none focus:border-blue-500"></input>
                <button type="submit" class="bg-blue-500 p-2 px-5 text-white font-semibold hover:bg-blue-600">+</button>
            </div>
            <span class="text-gray-600 text-xs">({{ charCount() }}/{{ userInputMaxLength }})</span>
        </form>
    `,
    data() {
        return {
            newAssignment: '',
            userInputMaxLength: 40
        };
    },
    methods: {
        add() {
            const input = this.removeNonAlphabeticChars(this.newAssignment);
            if (input.length) {
                this.$emit('add', input);
                this.newAssignment = '';
            }
        },

        charCount() {
            const input = this.removeNonAlphabeticChars(this.newAssignment);
            return input.length;
        },

        removeNonAlphabeticChars(input) {
            return input
                .replace(/[^a-zA-ZáàãâäéèêëíìîïóòôõöúùûüçÇ ]/g, '')
                .trim();
        }
    }
};

export default AssignmentCreate;
