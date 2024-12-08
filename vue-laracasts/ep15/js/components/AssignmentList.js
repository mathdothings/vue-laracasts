import Assignment from './Assignment.js';
import AssignmentTags from './AssignmentTags.js';

const AssignmentList = {
    components: { Assignment, AssignmentTags },
    template: `
        <section v-show="assignments.length" class="flex flex-col flex-wrap gap-2 border border-gray-600 p-3 rounded">
            <div class="flex justify-between">
                <div class="flex gap-2 items-center">
                    <h2 class="font-semibold text-xl text-orange-500">
                        {{title}}
                    </h2>
                    <span
                        class="bg-orange-500 px-3 py-1 rounded text-sm hover:bg-orange-600 cursor-pointer">
                        {{filteredAssignments.length}}
                    </span>
                </div>
                <button v-show="toggleable"
                    @click="$emit('toggleAssignmentList')"
                    class="bg-orange-500 px-3 py-1 rounded font-semibold text-sm hover:bg-orange-600 cursor-pointer">
                    &times;
                </button>
            </div>
            <assignment-tags
                :initialTags="initialTags"
                v-model:currentTag="currentTag"
            />
            <ul class="border border-gray-600 rounded divide-y divide-gray-600">
                <assignment
                    v-for="assignment in filteredAssignments"
                    :assignment="assignment"
                    :key="assignment.key"
                </assignment>
            </ul>
            <slot/>
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
        initialTags() {
            return [
                ...new Set(this.assignments.map((assigment) => assigment.tag))
            ];
        }
    },
    props: {
        assignments: Array,
        title: String,
        toggleable: { type: Boolean, default: false }
    }
};

export default AssignmentList;
