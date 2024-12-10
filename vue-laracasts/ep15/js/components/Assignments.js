import ToggledAssignmentList from './ToggledAssignmentList.js';
import AssignmentList from './AssignmentList.js';
import AssignmentCreate from './AssignmentCreate.js';
import RandomList from '../generateList.js';
const randomList = new RandomList();
const tasks = randomList.randomTaskList(randomList.base, true, 0, 10);

const Assignments = {
    components: { ToggledAssignmentList, AssignmentList, AssignmentCreate },
    template: `
        <article class="p-2">
            <div class="flex gap-2">
                <toggled-assignment-list
                    v-if="toggleInProgress === false"
                    :assignmentList="inProgressAssignments"
                    :assignmentListTitle="inProgressAssignmentListTitle"
                    @click="toggleInProgress = !toggleInProgress"
                >
                </toggled-assignment-list>
                <toggled-assignment-list
                    v-if="toggleCompleted === false"
                    :assignmentList="completedAssignments"
                    :assignmentListTitle="completedAssignmentListTitle"
                    @click="toggleCompleted = !toggleCompleted"
                >
                </toggled-assignment-list>
            </div>
            <div class="grid lg:grid-cols-2 sm:grid-cols-1 gap-4 w-80">
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
