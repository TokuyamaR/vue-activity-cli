<template>
    <div id="activityApp">
        <nav class="navbar is-white topNav">
            <div class="container">
                <div class="navbar-brand">
                    <h1>Activity Planner</h1>
                </div>
            </div>
        </nav>
        <nav class="navbar is-white">
            <div class="container">
                <div class="navbar-menu">
                    <div class="navbar-start">
                        <a class="navbar-item is-active" href="#">Newest</a>
                        <a class="navbar-item" href="#">In Progress</a>
                        <a class="navbar-item" href="#">Finished</a>
                    </div>
                </div>
            </div>
        </nav>
        <section class="container">
            <div class="columns">
                <div class="column is-3">
                    <a v-if="!isFormDisplayed"
                       class="button is-primary is-block is-alt is-large"
                       href="#"
                       @click="toggleFormDisplay">New Activity</a>
                    <div v-if="isFormDisplayed" class="create-form">
                        <h2 class="title">Create Activity</h2>
                        <form id="form">
                            <div class="field">
                                <label class="label">Title</label>
                                <div class="control">
                                    <input v-model="newActivity.title" type="text" class="input"
                                           placeholder="Buy movie tickets"
                                    >
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Notes</label>
                                <div class="control">
                                    <textarea v-model="newActivity.notes" class="textarea"
                                              placeholder="Write some notes here">

                                    </textarea>
                                </div>
                            </div>
                            <div class="field is-ground">
                                <div class="control">
                                    <button class="button is-link"
                                            :disabled="!isFormValid"
                                            @click="createActivity">Create Goal
                                    </button>
                                </div>
                                <div class="control">
                                    <button class="button is-text" @click="toggleFormDisplay">Cancel
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="column is-9">
                    <div class="box content">
                        <ActivityItem v-for="activity in activities"
                                      :key="activity.id"
                                      :activity="activity"/>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import ActivityItem from '@/components/ActivityItem'
    import {fetchActivities, fetchCategories, fetchUser} from '@/api'

    export default {
        name: 'App',
        components: {ActivityItem},
        data() {
            return {
                isFormDisplayed: false,
                message: 'Hello Vue',
                titleMessage: 'Title Message Vueeeeeeee!!',
                isTextDisplayed: true,
                newActivity: {
                    title: '',
                    notes: '',
                },
                items: {1: {name: 'Raido'}, 2: {name: 'Miho'}},
                user: {},
                activities: {},
                categories: {}
            }
        },
        computed: {
            isFormValid() {
                console.log('calling isFormValid !!!!!!!!')
                return this.newActivity.title && this.newActivity.notes
            }
        },
        created() {
            this.activities = fetchActivities();
            this.categories = fetchCategories();
            this.user = fetchUser();

            console.log(this.activities);
            console.log(this.categories);
            console.log(this.user)

        },
        methods: {
            toggleTextDisplay() {
                this.isTextDisplayed = !this.isTextDisplayed
            },
            toggleFormDisplay() {
                this.isFormDisplayed = !this.isFormDisplayed
            },
            createActivity() {
                console.log(this.newActivity)
            },
            isFormValid() {
                // console.log('isFormValid called!!!!!!!!')
                // return this.newActivity.title && this.newActivity.notes
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
