const AssignmentCreate = {
    template: `
        <form @submit.prevent="add">
            <div class="flex border-2 p-2 rounded border-gray-600 hover:border-blue-500">
                <input v-model="newAssignment" required autofocus placeholder="What's your next Initiative?" class="w-full p-2 border-2 border-transparent text-white  bg-gray-700 focus:outline-none focus:border-blue-500"></input>
                <button type="submit" class="bg-blue-500 p-2 px-5 text-white font-semibold hover:bg-blue-600">+</button>
            </div>
        </form>
    `,
    data() {
        return {
            newAssignment: ''
        };
    },
    methods: {
        add() {
            if (this.newAssignment.length) {
                this.$emit('add', this.newAssignment);
                this.newAssignment = '';
            }
        }
    }
};

export default AssignmentCreate;
