import AssignmentList from './AssignmentList.js';
import AssignmentCreate from './AssignmentCreate.js';
import RandomList from '../generateList.js';
const randomList = new RandomList();
const tasks = randomList.randomTaskList(randomList.base, true, 0, 10);

const Assignments = {
    components: { AssignmentList, AssignmentCreate },
    template: `
        <article class="p-4">
            <div class="grid lg:grid-cols-2 sm:grid-cols-1 gap-5">
                <div class="col-span-1">
                    <assignment-list :assignments="inProgressAssignments" title="In Progress"></assignment-list>
                    <assignment-create @add="add"></assignment-create>
                </div>
                <div class="col-span-1">
                    <assignment-list :assignments="completedAssignments" title="Completed"></assignment-list>
                </div>
            </div>
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
