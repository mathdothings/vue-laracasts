const AssignmentTags = {
    template: `
        <div class="flex gap-2">
            <button 
                class="px-2 py-1 rounded text-xs"
                :class="{'bg-blue-500 hover:bg-blue-600': tag === currentTag},
                    {'bg-gray-500 hover:bg-blue-600': tag !== currentTag}"
                v-for="tag in tags"
                @click="$emit('change', tag)"
            >
                {{tag}}
            </button>
        </div>
    `,
    computed: {
        tags() {
            return ['all', ...new Set(this.initialTags)];
        }
    },
    props: {
        initialTags: Array,
        currentTag: String
    }
};

export default AssignmentTags;
