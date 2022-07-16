import { defineComponent } from "vue";

export default defineComponent({
  name: "CategoryButton",
  props: {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    }
  },
  components: {},
  setup() {},

  return: {},
});
