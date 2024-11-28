import AssignmentList from './AssignmentList.js';
import RandomList from '../generateList.js';
const randomList = new RandomList();
const tasks = randomList.randomTaskList(randomList.base, true, 0, 10);

const Assignments = {
    components: { AssignmentList },
    template: `
        <article class="p-5">
            <assignment-list :assignments="inProgressAssignments" title="In Progress" titleColor="text-blue-500"></assignment-list>
            <assignment-list :assignments="completedAssignments" title="Completed" titleColor="text-green-500"></assignment-list>
            <form @submit.prevent="add">
                <div class="flex border-2 p-2 rounded border-gray-600 hover:border-blue-500">
                    <input v-model="newAssignment" required autofocus placeholder="What's your next Initiative?" class="w-full p-2 border-2 border-transparent text-white  bg-gray-700 focus:outline-none focus:border-blue-500"></input>
                    <button type="submit" class="bg-blue-500 p-2 px-5 text-white font-semibold hover:bg-blue-600">+</button>
                </div>
            </form>
        </article>
    `,
    data() {
        return {
            assignments: tasks,
            newAssignment: ''
        };
    },
    computed: {
        inProgressAssignments() {
            return this.assignments.filter(
                (assignment) => !assignment.completed
            );
        },
        completedAssignments() {
            return this.assignments.filter(
                (assignment) => assignment.completed
            );
        }
    },
    methods: {
        add() {
            if (this.newAssignment.length) {
                this.assignments.push({
                    title: this.newAssignment,
                    completed: false
                });
                this.newAssignment = '';
            }
        }
    }
};

export default Assignments;
