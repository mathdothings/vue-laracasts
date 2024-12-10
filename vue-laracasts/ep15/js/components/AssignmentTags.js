const AssignmentTags = {
    template: `
        <div class="flex gap-2 flex-wrap">
            <button 
                class="px-2 py-1 rounded text-xs"
                :class="{'bg-blue-500 hover:bg-blue-600': tag === currentTag},
                    {'bg-gray-500 hover:bg-blue-600': tag !== currentTag}"
                v-for="tag in tags"
                @click="$emit('update:currentTag', tag)"
            >
                {{tag}}
            </button>
        </div>
    `,
    computed: {
        tags() {
            return ['all', ...new Set(this.initialTags.sort())];
        }
    },
    props: {
        initialTags: Array,
        currentTag: String
    }
};

export default AssignmentTags;
