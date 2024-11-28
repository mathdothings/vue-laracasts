import AssignmentList from './AssignmentList.js';
import AssignmentCreate from './AssignmentCreate.js';
import RandomList from '../generateList.js';
const randomList = new RandomList();
const tasks = randomList.randomTaskList(randomList.base, true, 0, 10);

const Assignments = {
    components: { AssignmentList, AssignmentCreate },
    template: `
        <article class="p-5">
            <assignment-list :assignments="inProgressAssignments" title="In Progress" titleColor="text-blue-500"></assignment-list>
            <assignment-list :assignments="completedAssignments" title="Completed" titleColor="text-green-500"></assignment-list>
            <assignment-create @add="add"></assignment-create>
        </article>
    `,
    data() {
        return {
            assignments: tasks
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
        add(assignmentName) {
            this.assignments.push({
                title: assignmentName,
                completed: false
            });
        }
    }
};

export default Assignments;
