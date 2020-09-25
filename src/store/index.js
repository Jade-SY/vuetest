import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        blogs: [{
                url: "https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
                title: "MOBILE FIRST & RESPONSIVE",
                text: "Phasellus lorem enim, luctus ut velit eget, convallis egestas eros. Sed ornare ligula eget tortor tempor, quis porta tellus dictum."
            },
            {
                url: "https://images.unsplash.com/photo-1475938476802-32a7e851dad1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
                title: "THINK OUTSIDE THE BOX",
                text: "Nam ut leo ipsum. Maecenas pretium aliquam feugiat. Aenean vel tempor est, vitae tincidunt risus. Sed sodales vestibulum nibh."
            },
            {
                url: "https://images.unsplash.com/photo-1416339442236-8ceb164046f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1892&q=80",
                title: "SMALL CHANGES, BIG DIFFERENCE",
                text: "Vestibulum in dictum velit, in rhoncus nibh. Maecenas neque libero, interdum a dignissim in, aliquet vitae lectus. Phasellus lorem enim, luctus ut velit eget."
            }
        ],
        etc: "",
        files: [{
            title: 'firstFile',
            subtitle: "this file is good file"
        }]
    },
    mutations: {
        // state안의 데이터를 편집하기 위해서 mutations안에 함수가 필요함
        addBlog(state, payload) {
            state.blogs.push(payload);
        },
        addFile(state, payload) {
            state.files.push(payload);
        }
    },
    actions: {},
    modules: {}
})