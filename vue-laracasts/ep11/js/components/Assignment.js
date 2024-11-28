const Assignment = {
    template: `
        <li class="hover:bg-blue-600 h-12 flex">
            <label class="select-none cursor-pointer p-2 flex items-center justify-between w-full">
                <div class="flex gap-2 items-center justify-between">
                    <span>{{assignment.title}}</span>
                    <span class="bg-gray-500 px-2 py-1 rounded text-xs">{{assignment.tag}}</span>
                </div>
                <input
                    v-model="assignment.completed"
                    type="checkbox"
                    class="cursor-pointer ml-3 accent-blue-500"
            /></label>
        </li>
    `,
    props: {
        assignment: Object
    }
};

export default Assignment;
