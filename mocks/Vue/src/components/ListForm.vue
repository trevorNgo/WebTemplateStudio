<template>
  <div class="input-group my-3">
    <input
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
      type="text"
      class="form-control"
      placeholder="Add text here..."
      aria-label="Add text here..."
    >
    <button class="btn btn-primary ml-2" v-on:click="$emit('onAddListItem')">Submit</button>
  </div>
</template>

<script>
export default {
  name: "ListForm",
  props: {
    value: String
  }
};
</script>
