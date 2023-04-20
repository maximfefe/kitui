<script>
import PreviewContainer from '../components/PreviewContainer.vue'
import FormContainer from '../components/FormContainer.vue'

export default {
  components:{
    PreviewContainer,
    FormContainer
  }
}
</script>

<template>
  <main>
    <div class="d-flex align-items-start">
      <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
        <button class="nav-link active" type="button">Home</button>
        <button class="nav-link" type="button">Profile</button>
        <button class="nav-link" type="button">Messages</button>
        <button class="nav-link" type="button">Settings</button>
      </div>
      <div class="tab-content" id="v-pills-tabContent">
        <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">...</div>
        <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">...</div>
        <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>
        <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div>
      </div>
    </div>
    <FormContainer />
    <PreviewContainer />
  </main>
</template>
