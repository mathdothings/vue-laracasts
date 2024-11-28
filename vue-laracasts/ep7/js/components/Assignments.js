import AssignmentList from './AssignmentList.js';

const Assignments = {
    components: { AssignmentList },
    template: `
        <article>
            <assignment-list :assignments="inProgressAssignments" title="In Progress"></assignment-list>
            <assignment-list :assignments="completedAssignments" title="Completed"></assignment-list>
        </article>
    `,
    data() {
        return {
            assignments: [
                { title: 'Finish project', completed: false },
                { title: 'Read chapter 4', completed: false },
                { title: 'Turn in homework', completed: false }
            ]
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
    }
};

export default Assignments;
