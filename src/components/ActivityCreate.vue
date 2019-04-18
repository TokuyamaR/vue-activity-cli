<template>
    <div class="activityCreateForm">
        <a v-if="!isFormDisplayed"
           class="button is-primary is-block is-alt is-large"
           href="#"
           @click.prevent="toggleFormDisplay">New Activity</a>
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
                <div class="field">
                    <label class="label">Category</label>
                    <div class="control">
                        <select v-model="newActivity.category" class="select">
                            <option disabled value="">Please Select One</option>
                            <option v-for="category in categories"
                                    :key="category.id"
                            >{{ category.text }}
                            </option>
                        </select>
                    </div>
                </div>
                <div class="field is-ground">
                    <div class="control">
                        <button class="button is-link"
                                :disabled="!isFormValid()"
                                @click.prevent="createActivityAPI">Create Goal
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
</template>

<script>
    import {createActivityAPI} from '@/api';

    export default {
        props: {
            categories: {
                type: Object,
                required: true
            }
        },
        data() {
            return {
                isFormDisplayed: false,
                newActivity: {
                    title: '',
                    notes: '',
                    category: ''
                },
            }
        },
        methods: {
            toggleFormDisplay() {
                this.isFormDisplayed = !this.isFormDisplayed
            },

            resetActivity() {
                this.newActivity.title = '';
                this.newActivity.notes = '';
                this.newActivity.category = '';
            },
            createActivityAPI() {
                // debugger;
                createActivityAPI(this.newActivity)
                    .then(activity => {
                        this.$emit('activityCreated', {...activity});
                        this.resetActivity();
                        this.isFormDisplayed = false;
                    });
            },
            isFormValid() {
                return this.newActivity.title && this.newActivity.notes && this.newActivity.category;
            }
        }
    }
</script>

<style>

</style>