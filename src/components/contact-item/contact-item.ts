import { defineComponent } from "vue";
import RectangleButton from "../shared/rectangle-button/rectangle-button.vue";

export default defineComponent({
  name: "ContactItem",
  components: {
    RectangleButton: RectangleButton,
  },
  props: {
    btntitle: {
      type: String,
      required: true,
    },
    headertitle: {
      type: String,
      required: true,
    }
  },
  setup() { },

  return: {},
});
