<template>
    <div class="theAlert">
        <div class="position-fixed top-0 right-0 p-3 w-100" style="z-index: 5; right: 0; top: 0;">
            <div id="liveToast" class="toast hide" role="alert" aria-live="assertive" aria-atomic="true" data-delay="2000">
                <div class="toast-header">
                    <strong class="mr-auto text-uppercase">Elblog</strong>
                    <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="toast-body bg-success text-white">
                    Blog is Added !
                </div>
            </div>
        </div>
        <div class="position-fixed top-0 right-0 p-3 w-100" style="z-index: 5; right: 0; top: 0;">
            <div id="liveToast" class="toast hide" role="alert" aria-live="assertive" aria-atomic="true" data-delay="2000">
                <div class="toast-header">
                    <strong class="mr-auto text-uppercase">Elblog</strong>
                    <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="toast-body bg-info text-white">
                    Blog is Updated !
                </div>
            </div>
        </div>
        <div class="position-fixed top-0 right-0 p-3 w-100" style="z-index: 5; right: 0; top: 0;">
            <div id="liveToast delete-toast" class="toast delete-toast hide" role="alert" aria-live="assertive" aria-atomic="true" data-delay="2000">
                <div class="toast-header">
                    <strong class="mr-auto text-uppercase">Elblog</strong>
                    <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="toast-body bg-danger text-white">
                    Blog is Deleted !
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name:"Alert",
    props:["type"],
    computed: mapGetters(["getAlertType"]),
}
</script>

<style>

</style>