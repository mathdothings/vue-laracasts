import ListTitle from './ListTitle.js';
import AssignmentList from './AssignmentList.js';
import AssignmentCreate from './AssignmentCreate.js';
import RandomList from '../generateList.js';
const randomList = new RandomList();
const tasks = randomList.randomTaskList(randomList.base, true, 0, 10);

const Assignments = {
    components: { ListTitle, AssignmentList, AssignmentCreate },
    template: `
        <article class="p-4">
            <div class="flex gap-2">
                <list-title
                    v-if="toggleInProgress === false"
                    :assignmentList="inProgressAssignments"
                    :assignmentListTitle="inProgressAssignmentListTitle"
                    @click="toggleInProgress = !toggleInProgress"
                >
                </list-title>
                <list-title
                    v-if="toggleCompleted === false"
                    :assignmentList="completedAssignments"
                    :assignmentListTitle="completedAssignmentListTitle"
                    @click="toggleCompleted = !toggleCompleted"
                >
                </list-title>
            </div>
            <div class="grid lg:grid-cols-2 sm:grid-cols-1 gap-4 width-full">
                <assignment-list
                v-show="toggleInProgress"
                :assignments="inProgressAssignments"
                :title="inProgressAssignmentListTitle"
                toggleable
                @toggleAssignmentList="toggleInProgress = !toggleInProgress"
                >
                    <assignment-create @add="add"></assignment-create>
                </assignment-list>
                <assignment-list
                    v-show="toggleCompleted"
                    :assignments="completedAssignments"
                    :title="completedAssignmentListTitle"
                    toggleable
                    @toggleAssignmentList="toggleCompleted = !toggleCompleted"
                >
                </assignment-list>
            </div>
        </article>
    `,
    data() {
        return {
            assignments: tasks,
            inProgressAssignmentListTitle: 'In Progress',
            completedAssignmentListTitle: 'Completed',
            toggleInProgress: true,
            toggleCompleted: true
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
