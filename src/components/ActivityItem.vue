<template>
    <article class="post">
        <h4 class="title">{{ activity.title }}</h4>
        <h4>{{ textUtility_capitalize(categories[activity.category].text) }}</h4>
        <h4>{{ activity.notes }}</h4>
        <div class="media">
            <div class="media-left">
                <p class="image is-32x32">
                    <img src="../assets/user.png">
                </p>
            </div>
            <div class="media-content">
                <div class="content">
                    <p>
                        <a href="#">Tokuyaman</a> updated {{ activity.updatedAt | prettyTime }} &nbsp;
                    </p>
                </div>
            </div>
            <div class="media-right">
                <span>Progress:
                    <span :style="{color: activityProgress}">
                        {{ activity.progress }} %
                    </span>
                </span>
            </div>
        </div>
    </article>
</template>

<script>
    import textUtility from '@/mixins/textUtility';

    export default {
        mixins: [textUtility],
        props: {
            activity: {
                type: Object,
                required: true
            },
            categories: {
                type: Object,
                required: true
            }
        },
        computed: {
            activityProgress() {
                const progress = this.activity.progress;
                if (progress <= 0) {
                    return 'red';
                } else if (progress <= 50) {
                    return 'orange';
                } else {
                    return 'green';
                }
            }
        }
    }
</script>

<style scoped>
    .post .title {
        margin-bottom: 5px;
    }
</style>