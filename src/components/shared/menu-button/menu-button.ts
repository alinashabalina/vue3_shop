import { defineComponent } from "vue";

export default defineComponent({
  name: "MenuButton",
  props: {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    mode: {
      type: String,
      required: true,
    }
  },
  components: {},
  setup() {},

  return: {},
});
