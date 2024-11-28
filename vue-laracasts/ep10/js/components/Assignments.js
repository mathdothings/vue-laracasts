import AssignmentList from './AssignmentList.js';
import AssignmentCreate from './AssignmentCreate.js';
import RandomList from '../generateList.js';
const randomList = new RandomList();
const tasks = randomList.randomTaskList(randomList.base, true, 0, 10);

const Assignments = {
    components: { AssignmentList, AssignmentCreate },
    template: `
        <article class="p-5 flex gap-8">
            <div>
                <assignment-list :assignments="inProgressAssignments" title="In Progress"></assignment-list>
                <assignment-create @add="add"></assignment-create>
            </div>
            <assignment-list :assignments="completedAssignments" title="Completed"></assignment-list>
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
