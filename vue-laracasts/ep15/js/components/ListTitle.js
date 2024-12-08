import AssignmentList from './AssignmentList.js';

const ListTitle = {
    components: { AssignmentList },
    template: `
        <div class="flex mb-3 gap-2 justify-center">
            <div v-if="assignmentList.length">
                <div class="flex gap-2 items-center bg-gray-600 rounded px-3 py-2 hover:bg-blue-500 cursor-pointer">
                    <h2 class="font-semibold text-xl text-white">
                        {{assignmentListTitle}}
                    </h2>
                    <span class="bg-gray-500 px-2 py-1 rounded text-xs">{{assignmentList.length}}</span>
                </div>
            </div>
        </div>
    `,
    props: {
        assignmentList: Array,
        assignmentListTitle: String
    }
};

export default ListTitle;
