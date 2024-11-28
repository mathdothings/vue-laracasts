import Assignment from './Assignment.js';

const AssignmentList = {
    components: { Assignment },
    template: `
        <section v-show="assignments.length" class="mb-4">
            <h2 :class="['font-semibold mb-3 text-xl', titleColor]">
                {{title}}
            </h2>
            <ul class="border border-gray-600 divide-y divide-gray-600">
                <assignment v-for="assignment in assignments" :assignment=assignment></assignment>
            </ul>
        </section>
    `,
    props: {
        assignments: Array,
        title: String,
        titleColor: String
    },
    methods: {
        hasCompletedAssignments() {
            return this.assignments.some((assignment) => assignment.completed);
        },
        hasInProgressAssignments() {
            return this.assignments.some((assignment) => !assignment.completed);
        }
    }
};

export default AssignmentList;
