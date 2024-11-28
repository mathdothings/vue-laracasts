import Assignment from './Assignment.js';

const AssignmentList = {
    components: { Assignment },
    template: `
        <section v-show="assignments.length" class="flex flex-col flex-wrap gap-2">
            <div class="flex gap-2 items-center">
                <h2 class="font-semibold text-xl text-orange-500">
                    {{title}} 
                </h2>
                <span 
                    class="bg-orange-500 px-3 py-1 rounded text-sm hover:bg-orange-600 cursor-pointer">
                    {{filteredAssignments.length}}
                </span>
            </div>
            <div class="flex gap-2">
                <button 
                    class="px-2 py-1 rounded text-xs"
                    :class="{'bg-blue-500 hover:bg-blue-600': tag === currentTag},
                        {'bg-gray-500 hover:bg-blue-600': tag !== currentTag}"
                    v-for="tag in tags"
                    @click="currentTag = tag">
                    {{tag}}
                </button>
            </div>
            <ul class="border border-gray-600 divide-y divide-gray-600">
                <assignment
                    v-for="assignment in filteredAssignments"
                    :assignment=assignment>
                </assignment>
            </ul>
        </section>
    `,
    data() {
        return {
            currentTag: 'all'
        };
    },
    computed: {
        filteredAssignments() {
            if (this.currentTag === 'all') return this.assignments;

            return this.assignments.filter(
                (assignment) => assignment.tag === this.currentTag
            );
        },
        tags() {
            return [
                'all',
                ...new Set(this.assignments.map((assigment) => assigment.tag))
            ];
        }
    },
    props: {
        assignments: Array,
        title: String
    }
};

export default AssignmentList;
