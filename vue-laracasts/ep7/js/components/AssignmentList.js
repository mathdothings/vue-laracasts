import Assignment from './Assignment.js';

const AssignmentList = {
    components: { Assignment },
    template: `
        <section v-show="assignments.length">
            <h2 class="font-semibold mb-3 text-blue-500">
                {{title}}
            </h2>
            <ul>
                <assignment v-for="assignment in assignments" :assignment=assignment></assignment>
            </ul>
        </section>
    `,
    props: {
        assignments: Array,
        title: String
    }
};

export default AssignmentList;
